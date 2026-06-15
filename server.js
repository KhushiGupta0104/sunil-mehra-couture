import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to format values safely for CSV
function escapeCSV(field) {
    if (field === null || field === undefined) return '';
    const stringified = String(field);
    if (stringified.includes(',') || stringified.includes('\n') || stringified.includes('\r') || stringified.includes('"')) {
        return `"${stringified.replace(/"/g, '""')}"`;
    }
    return stringified;
}

// API endpoint to receive appointment requests
app.post('/api/appointments', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
            return res.status(400).json({
                success: false,
                error: 'All fields (name, email, message) are required.'
            });
        }

        const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        const csvFilePath = path.join(__dirname, 'appointments.csv');

        // Check if file exists to see if we need to write headers
        const fileExists = fs.existsSync(csvFilePath);
        const headers = 'Timestamp,Name,Email,Message / Preferred Fitting Time\n';
        const row = `${escapeCSV(timestamp)},${escapeCSV(name)},${escapeCSV(email)},${escapeCSV(message)}\n`;

        if (!fileExists) {
            fs.writeFileSync(csvFilePath, headers + row, 'utf8');
        } else {
            fs.appendFileSync(csvFilePath, row, 'utf8');
        }

        console.log(`[Backend] Appointment request for "${name}" successfully written to CSV.`);

        // Optional forwarding to Google Sheets webhook (Apps Script)
        const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
        if (webhookUrl && webhookUrl.trim() !== '') {
            console.log(`[Backend] Forwarding request to Google Sheets: ${webhookUrl}`);
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    timestamp,
                    name,
                    email,
                    message
                })
            })
            .then(async (response) => {
                if (response.ok) {
                    console.log('[Backend] Successfully forwarded to Google Sheets Webhook.');
                } else {
                    const text = await response.text();
                    console.error(`[Backend] Google Sheets Webhook returned error (${response.status}): ${text}`);
                }
            })
            .catch((err) => {
                console.error('[Backend] Error forwarding to Google Sheets Webhook:', err.message);
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Your appointment request has been logged successfully.'
        });

    } catch (error) {
        console.error('[Backend Error]:', error);
        return res.status(500).json({
            success: false,
            error: 'An internal error occurred. Please try again later.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`[Backend] Server listening on http://localhost:${PORT}`);
});
