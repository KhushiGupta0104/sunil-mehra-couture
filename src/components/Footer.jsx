import React from "react";

export default function Footer() {
    return (
        <footer
            className="bg-[var(--ink)] text-[var(--bone)] px-6 sm:px-12 lg:px-20 py-20 relative overflow-hidden"
            data-testid="site-footer"
        >
            <div className="grain" />
            <div className="relative z-10 max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pb-16 border-b border-[rgba(250,246,239,0.12)]">
                    
                    {/* Brand column */}
                    <div>
                        <p className="font-display text-5xl sm:text-6xl tracking-[0.05em]">
                            SUNIL <span className="font-italic-serif italic font-light text-[var(--champagne)]">Mehra</span>
                        </p>
                        <p className="font-italic-serif text-sm opacity-80 mt-3 tracking-[0.2em] uppercase">
                            couture · est. 1984
                        </p>
                    </div>

                    {/* Contact details column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-luxe text-[10px] uppercase tracking-[0.25em] opacity-50 mb-3">
                                Flagship Salon
                            </p>
                            <p className="font-body opacity-90 leading-relaxed">
                                14 Sundar Nagar Market,<br />
                                New Delhi, 110003, India
                            </p>
                        </div>
                        <div>
                            <p className="font-luxe text-[10px] uppercase tracking-[0.25em] opacity-50 mb-3">
                                Correspondence
                            </p>
                            <p className="font-body opacity-90 leading-relaxed">
                                T: +91 11 4150 1484<br />
                                E: <a href="mailto:atelier@sunilmehra.com" className="hover:text-[var(--champagne)] transition">atelier@sunilmehra.com</a>
                            </p>
                            <div className="flex gap-4 font-luxe uppercase tracking-[0.25em] text-[10px] mt-4">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--champagne)] transition">
                                    Instagram
                                </a>
                                <span>·</span>
                                <a href="#" className="hover:text-[var(--champagne)] transition">
                                    Journal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs opacity-60">
                    <p>© Sunil Mehra Couture House 1984</p>
                    <p className="font-italic-serif text-sm text-[var(--champagne)]">
                        Hand-finished in Delhi · Photographed in the Thar
                    </p>
                </div>
            </div>
        </footer>
    );
}
