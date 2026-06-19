import React from "react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/images/logo.jpg";

export default function Navbar({ onMenuOpen, menuOpen, onSearchOpen }) {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full bg-[var(--bone)] text-[var(--ink)] border-b border-[var(--hairline)]"
            data-testid="site-navbar"
        >
            {/* Top Tier: Currency, Brand Name, Search & Bag */}
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 pt-3 pb-1.5 sm:pt-4 sm:pb-2 flex items-center justify-between w-full">
                {/* Left — Empty spacer to maintain symmetry */}
                <div className="w-1/3" />

                {/* Center — Brand Signature Logo */}
                <Link to="/" className="flex flex-col items-center justify-center w-1/3 py-1" data-testid="navbar-brand">
                    <img 
                        src={logoImg} 
                        alt="Sunil Mehra" 
                        className="h-6 sm:h-8 lg:h-10 w-auto object-contain" 
                        style={{ filter: "contrast(120%) brightness(102%)", mixBlendMode: "multiply" }}
                    />
                </Link>

                {/* Right — Search Button */}
                <div className="flex items-center justify-end text-[10px] text-[var(--ink)] w-1/3">
                    {/* Search Icon */}
                    <button 
                        onClick={onSearchOpen} 
                        className="hover:opacity-60 transition flex items-center justify-center" 
                        aria-label="Search"
                    >
                        <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[var(--ink)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                        </svg>
                    </button>
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

                    <Link to="/wardrobe" className="hidden lg:inline-block hover:opacity-60 transition">
                        Wardrobe
                    </Link>
                    <Link to="/gallery" className="hidden lg:inline-block hover:opacity-60 transition">
                        Gallery
                    </Link>
                    <Link to="/#request-form" className="hover:opacity-60 transition font-medium text-[var(--bronze)]">
                        Book Appointment
                    </Link>
                </div>
            </div>
        </header>
    );
}
