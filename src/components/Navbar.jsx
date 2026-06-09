import React from "react";

export default function Navbar({ onMenuOpen, menuOpen }) {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full"
            data-testid="site-navbar"
        >
            {/* Top Tier: Brand Wordmark (cream background) */}
            <div className="bg-[var(--bone)] border-b border-[var(--hairline)] py-3 sm:py-4 flex justify-center items-center w-full">
                <a href="/" className="text-center" data-testid="navbar-brand">
                    <p className="font-display text-[clamp(18px,2vw,24px)] leading-none tracking-[0.18em] text-[var(--ink)]">
                        SUNIL MEHRA
                    </p>
                    <p className="font-italic-serif text-[9px] sm:text-[10px] opacity-80 mt-1 tracking-[0.2em] text-[var(--ink)]">
                        couture · est. 1984
                    </p>
                </a>
            </div>

            {/* Bottom Tier: Black Color Block with Navbar Features */}
            <div className="bg-[var(--ink)] text-[var(--bone)] px-6 sm:px-10 lg:px-14 py-3.5 flex items-center justify-between w-full shadow-md">
                {/* Left — menu trigger */}
                <button
                    onClick={onMenuOpen}
                    className="flex items-center gap-3 group text-[var(--bone)]"
                    data-testid="navbar-menu-btn"
                    aria-label="Open menu"
                >
                    <span className={`burger ${menuOpen ? "open" : ""}`} style={{ color: "var(--bone)" }}>
                        <span style={{ backgroundColor: "var(--bone)" }}></span>
                        <span style={{ backgroundColor: "var(--bone)" }}></span>
                    </span>
                    <span className="font-luxe uppercase tracking-[0.38em] text-[10px] text-[var(--bone)]">
                        Index
                    </span>
                </button>

                {/* Right — actions */}
                <div className="flex items-center gap-5 sm:gap-7 text-[10px] uppercase tracking-[0.35em] font-luxe">
                    <a href="#atelier" className="hidden md:inline hover:opacity-80 transition text-[var(--bone)]" data-testid="navbar-appointment">
                        Appointment
                    </a>
                    <a href="#salons" className="hidden lg:inline hover:opacity-80 transition text-[var(--bone)]" data-testid="navbar-salons">
                        Salons
                    </a>
                    <a href="#" className="hover:opacity-80 transition flex items-center gap-2 text-[var(--bone)]" data-testid="navbar-bag">
                        <span>Bag</span>
                        <span className="opacity-60">(0)</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
