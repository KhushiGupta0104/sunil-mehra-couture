import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/images/Sunil Mehra  0019.jpg";
import img2 from "@/assets/images/Sunil Mehra  0246.jpg";
import img3 from "@/assets/images/Sunil Mehra  0493.jpg";
import img4 from "@/assets/images/Sunil Mehra  0553.jpg";
import img5 from "@/assets/images/Sunil Mehra  0966.jpg";
import img6 from "@/assets/images/Sunil Mehra_0039.jpg";

const CELEBRITIES = [
    {
        id: 1,
        src: img1,
        celebrity: "Ranbir Kapoor",
        caption: "Spotted in Custom Hand-Embroidered Bandhgala",
        occasion: "Festive Gala, Mumbai",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
    {
        id: 2,
        src: img2,
        celebrity: "Vicky Kaushal",
        caption: "Exuding heritage charm in the Ivory Silk Sherwani",
        occasion: "Promotional Event",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
    {
        id: 3,
        src: img3,
        celebrity: "Ayushmann Khurrana",
        caption: "Styled in the Signature Pastel Kurta Set & Drape Stole",
        occasion: "Filmfare Pre-Gala",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
    {
        id: 4,
        src: img4,
        celebrity: "Kartik Aaryan",
        caption: "Seen in the Premium Handcrafted Emerald Nehru Jacket",
        occasion: "Deepavali Celebration",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
    {
        id: 5,
        src: img5,
        celebrity: "Ranveer Singh",
        caption: "Making a statement in the Raw Silk Hand-Cut Kurta",
        occasion: "Red Carpet, Delhi",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
    {
        id: 6,
        src: img6,
        celebrity: "Rajkummar Rao",
        caption: "Styled in the Atelier Contemporary Asymmetric Jacket",
        occasion: "Special Screening",
        instagramUrl: "https://instagram.com/sunilmehraart",
    },
];

export default function Gallery() {
    const [selectedCeleb, setSelectedCeleb] = useState(null);

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = CELEBRITIES.findIndex((c) => c.id === selectedCeleb.id);
        const prevIndex = (currentIndex - 1 + CELEBRITIES.length) % CELEBRITIES.length;
        setSelectedCeleb(CELEBRITIES[prevIndex]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = CELEBRITIES.findIndex((c) => c.id === selectedCeleb.id);
        const nextIndex = (currentIndex + 1) % CELEBRITIES.length;
        setSelectedCeleb(CELEBRITIES[nextIndex]);
    };

    return (
        <section id="gallery" className="bg-[var(--bone)] text-[var(--ink)] py-16 sm:py-20 lg:py-24 border-b border-[var(--hairline)]" data-testid="gallery-section">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
                
                {/* Header */}
                <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="eyebrow block mb-3">Maison — Spotlight</span>
                        <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl font-light">
                            Spotted In <span className="font-italic-serif">Sunil Mehra</span>
                        </h2>
                    </div>
                    <p className="text-[var(--muted)] font-italic-serif text-lg max-w-sm">
                        Celebrity placements and editorial features captured from our official Instagram updates.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {CELEBRITIES.map((celeb, index) => (
                        <div 
                            key={celeb.id}
                            className={`group cursor-pointer flex flex-col ${
                                index % 3 === 1 ? "lg:translate-y-8" : index % 3 === 2 ? "lg:translate-y-16" : ""
                            }`}
                            onClick={() => setSelectedCeleb(celeb)}
                        >
                            {/* Image Box */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream)] border border-[var(--hairline)]">
                                <img
                                    src={celeb.src}
                                    alt={`${celeb.celebrity} in Sunil Mehra`}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                />
                                
                                {/* Instagram Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-2 text-white">
                                        <svg className="w-8 h-8 text-white stroke-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className="font-luxe text-[8px] uppercase tracking-[0.25em]">
                                            View Style Details
                                        </span>
                                    </div>
                                </div>

                                <span className="absolute top-4 left-4 bg-[var(--ink)] text-[var(--champagne)] font-luxe text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
                                    @{celeb.celebrity.toLowerCase().replace(/\s+/g, "")}
                                </span>
                            </div>
                            
                            {/* Metadata */}
                            <div className="mt-4 flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-luxe text-xs uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">
                                        {celeb.celebrity}
                                    </h3>
                                    <p className="font-italic-serif text-sm text-[var(--muted)] mt-1">
                                        {celeb.occasion}
                                    </p>
                                </div>
                                <span className="font-italic-serif text-sm opacity-50">
                                    0{celeb.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid Spacer for offset elements */}
                <div className="hidden lg:block h-16" />
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCeleb && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCeleb(null)}
                        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-6 sm:p-10"
                    >
                        {/* Lightbox Top */}
                        <div className="flex justify-between items-center w-full shrink-0">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                                SPOTLIGHT — 0{selectedCeleb.id} of 0{CELEBRITIES.length}
                            </span>
                            <button
                                onClick={() => setSelectedCeleb(null)}
                                className="font-luxe text-[10px] uppercase tracking-[0.3em] text-white hover:text-[var(--champagne)] border border-white/20 hover:border-[var(--champagne)] px-6 py-3 transition duration-300"
                            >
                                Close <span aria-hidden>×</span>
                            </button>
                        </div>

                        {/* Lightbox Middle */}
                        <div className="relative flex items-center justify-center grow my-6 max-h-[75vh]">
                            {/* Prev Button */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 sm:left-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Previous image"
                            >
                                ❮
                            </button>

                            {/* Image wrapper */}
                            <motion.div
                                key={selectedCeleb.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-w-full max-h-full aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src={selectedCeleb.src}
                                    alt={`${selectedCeleb.celebrity} in Sunil Mehra`}
                                    className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain mx-auto shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="absolute right-0 sm:right-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Next image"
                            >
                                ❯
                            </button>
                        </div>

                        {/* Lightbox Bottom */}
                        <div className="text-center shrink-0 max-w-xl mx-auto flex flex-col items-center">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.2em] text-[var(--champagne)]">
                                {selectedCeleb.celebrity} — {selectedCeleb.occasion}
                            </span>
                            <p className="font-display text-white text-lg sm:text-xl lg:text-2xl mt-3">
                                {selectedCeleb.caption}
                            </p>
                            
                            <a
                                href={selectedCeleb.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-[var(--champagne)] text-white hover:text-[var(--ink)] font-luxe text-[9px] uppercase tracking-[0.25em] px-6 py-3 border border-white/10 hover:border-transparent transition-all duration-300"
                            >
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                                </svg>
                                View on Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
