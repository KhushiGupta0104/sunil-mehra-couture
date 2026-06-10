import React from "react";

export default function Navbar({ onMenuOpen, menuOpen }) {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full bg-[var(--bone)] text-[var(--ink)] border-b border-[var(--hairline)]"
            data-testid="site-navbar"
        >
            {/* Top Tier: Currency, Brand Name, Search & Bag */}
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 pt-3 pb-1.5 sm:pt-4 sm:pb-2 flex items-center justify-between w-full">
                {/* Left — Currency selector */}
                <div className="flex items-center w-1/3">
                    <span className="text-[10px] tracking-[0.25em] font-luxe opacity-75 cursor-pointer hover:opacity-100 transition flex items-center gap-1">
                        INR <span className="text-[7px]">▼</span>
                    </span>
                </div>

                {/* Center — Brand Wordmark */}
                <a href="/" className="text-center w-1/3 flex flex-col items-center" data-testid="navbar-brand">
                    <p className="font-display text-[clamp(18px,2.2vw,26px)] leading-none tracking-[0.18em] text-[var(--ink)]">
                        SUNIL MEHRA
                    </p>
                    <p className="font-italic-serif text-[10px] sm:text-[11px] opacity-80 mt-0.5 tracking-[0.2em] text-[var(--ink)]">
                        couture · est. 1984
                    </p>
                </a>

                {/* Right — Search and Shopping Bag */}
                <div className="flex items-center justify-end gap-5 sm:gap-6 text-[10px] text-[var(--ink)] w-1/3">
                    {/* Search Icon */}
                    <button className="hover:opacity-60 transition" aria-label="Search">
                        <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[var(--ink)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                        </svg>
                    </button>
                    {/* Bag Icon */}
                    <a href="#" className="hover:opacity-60 transition flex items-center gap-1.5" data-testid="navbar-bag">
                        <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[var(--ink)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span className="font-luxe text-[10px] tracking-wider opacity-85">(0)</span>
                    </a>
                </div>
            </div>

            {/* Bottom Tier: Centered Symmetrical Navigation features */}
            <div className="border-t border-[var(--hairline)] w-full">
                <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-2.5 text-[10px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                    {/* Index trigger */}
                    <button
                        onClick={onMenuOpen}
                        className="flex items-center gap-2 group hover:opacity-60 transition"
                        data-testid="navbar-menu-btn"
                        aria-label="Open menu"
                    >
                        <span className={`burger ${menuOpen ? "open" : ""}`} style={{ gap: "4px", width: "18px" }}>
                            <span style={{ height: "1px" }}></span>
                            <span style={{ height: "1px" }}></span>
                        </span>
                        <span className="font-luxe text-[10px] uppercase tracking-[0.3em]">
                            Index
                        </span>
                    </button>

                    <a href="#wardrobe" className="hidden lg:inline-block hover:opacity-60 transition">
                        Wardrobe
                    </a>
                    <a href="#featured" className="hidden lg:inline-block hover:opacity-60 transition">
                        Featured
                    </a>
                    <a href="#gallery" className="hidden lg:inline-block hover:opacity-60 transition">
                        Gallery
                    </a>
                    <a href="#designer" className="hidden lg:inline-block hover:opacity-60 transition">
                        The Designer
                    </a>
                    <a href="#salons" className="hidden lg:inline-block hover:opacity-60 transition">
                        Salons
                    </a>
                    <a href="#request-form" className="hover:opacity-60 transition font-medium text-[var(--bronze)]">
                        Book Appointment
                    </a>
                </div>
            </div>
        </header>
    );
}
