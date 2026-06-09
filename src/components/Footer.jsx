import React from "react";

export default function Footer() {
    return (
        <footer
            className="bg-[var(--ink)] text-[var(--bone)] px-6 sm:px-10 lg:px-14 pt-24 pb-10 relative overflow-hidden"
            data-testid="site-footer"
        >
            <div className="grain" />
            <div className="relative z-10 max-w-[1500px] mx-auto">
                <p className="font-display text-[18vw] sm:text-[14vw] lg:text-[10vw] leading-[0.85] tracking-[0.05em]">
                    SUNIL <span className="font-italic-serif italic font-light text-[var(--champagne)]">Mehra</span>
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mt-20 border-t border-[rgba(250,246,239,0.18)] pt-12">
                    <div>
                        <p className="font-luxe text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">
                            Shop
                        </p>
                        {["Sherwani", "Bandhgala", "Kurta Sets", "Indo-Western", "Jodhpuri", "Suits"].map((x) => (
                            <a key={x} href="#wardrobe" className="block py-1.5 hover:text-[var(--champagne)] transition text-sm">
                                {x}
                            </a>
                        ))}
                    </div>
                    <div>
                        <p className="font-luxe text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">
                            Maison
                        </p>
                        {["The House", "The Atelier", "Couture 2025", "Lookbook", "Editorial"].map((x) => (
                            <a key={x} href="#manifesto" className="block py-1.5 hover:text-[var(--champagne)] transition text-sm">
                                {x}
                            </a>
                        ))}
                    </div>
                    <div>
                        <p className="font-luxe text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">
                            Salons
                        </p>
                        {["Delhi · Sundar Nagar", "Mumbai · Kala Ghoda", "London · Mount Street", "Dubai · DIFC"].map((x) => (
                            <a key={x} href="#salons" className="block py-1.5 hover:text-[var(--champagne)] transition text-sm">
                                {x}
                            </a>
                        ))}
                    </div>
                    <div>
                        <p className="font-luxe text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">
                            Letters from the Atelier
                        </p>
                        <p className="font-italic-serif text-lg mb-5 text-[var(--champagne)]">
                            Private editions, two letters a season.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex border-b border-[rgba(250,246,239,0.3)] focus-within:border-[var(--champagne)] transition"
                        >
                            <input
                                type="email"
                                placeholder="your email"
                                className="bg-transparent flex-1 outline-none py-3 text-sm placeholder:text-[rgba(250,246,239,0.4)] font-italic-serif text-lg"
                                data-testid="footer-newsletter-input"
                            />
                            <button
                                type="submit"
                                className="font-luxe text-[11px] uppercase tracking-[0.3em] px-2 hover:text-[var(--champagne)] transition"
                                data-testid="footer-newsletter-submit"
                            >
                                Subscribe →
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 border-t border-[rgba(250,246,239,0.18)] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs opacity-70">
                    <p>© {new Date().getFullYear()} Sunil Mehra Couture · Est. 1984</p>
                    <p className="font-italic-serif text-base text-[var(--champagne)]">
                        Hand-finished in Delhi · Photographed in the Thar
                    </p>
                    <div className="flex gap-6 font-luxe uppercase tracking-[0.3em]">
                        <a href="#" className="hover:text-[var(--champagne)]">Instagram</a>
                        <a href="#" className="hover:text-[var(--champagne)]">Journal</a>
                        <a href="#" className="hover:text-[var(--champagne)]">Press</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
