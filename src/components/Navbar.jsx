import React from "react";

export default function Navbar({ onMenuOpen, menuOpen }) {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--bone)] text-[var(--ink)] border-b border-[var(--hairline)]"
            data-testid="site-navbar"
        >
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-5 flex items-center justify-between">
                {/* Left — menu trigger */}
                <button
                    onClick={onMenuOpen}
                    className="flex items-center gap-4 group"
                    data-testid="navbar-menu-btn"
                    aria-label="Open menu"
                >
                    <span className={`burger ${menuOpen ? "open" : ""}`}>
                        <span></span>
                        <span></span>
                    </span>
                    <span className="hidden sm:inline font-luxe uppercase tracking-[0.38em] text-[10px]">
                        Index
                    </span>
                </button>

                {/* Center — brand wordmark */}
                <a
                    href="/"
                    className="text-center"
                    data-testid="navbar-brand"
                >
                    <p className="font-display text-[clamp(20px,2.2vw,30px)] leading-none tracking-[0.18em]">
                        SUNIL MEHRA
                    </p>
                    <p className="font-italic-serif text-[10px] sm:text-[11px] opacity-80 mt-1 tracking-[0.2em]">
                        couture · est. 1984
                    </p>
                </a>

                {/* Right — actions */}
                <div className="flex items-center gap-5 sm:gap-7 text-[10px] uppercase tracking-[0.35em] font-luxe">
                    <a href="#atelier" className="hidden md:inline hover:opacity-60 transition" data-testid="navbar-appointment">
                        Appointment
                    </a>
                    <a href="#salons" className="hidden lg:inline hover:opacity-60 transition" data-testid="navbar-salons">
                        Salons
                    </a>
                    <a href="#" className="hover:opacity-60 transition flex items-center gap-2" data-testid="navbar-bag">
                        <span>Bag</span>
                        <span className="opacity-50">(0)</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
