import React from "react";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] pt-[126px] sm:pt-[136px] pb-16 w-full" data-testid="hero-section">
            {/* Boxed image container */}
            <div className="px-6 sm:px-12 lg:px-20 pt-6">
                <div className="relative w-full aspect-[1.8/1] sm:aspect-[21/9] lg:h-[65vh] overflow-hidden bg-[var(--cream)]">
                    <img
                        src="https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png"
                        alt="Atelier — Sunil Mehra"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 18%" }}
                        data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-[rgba(20,18,14,0.05)]" />
                    <div className="grain" />
                </div>
            </div>

            {/* Centered single button below image */}
            <div className="py-10 text-center w-full flex justify-center">
                <a
                    href="#featured"
                    className="bg-[var(--ink)] text-[var(--champagne)] hover:bg-transparent hover:text-[var(--ink)] border border-[var(--champagne)] px-10 py-4 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 shadow-sm"
                    data-testid="hero-cta-explore"
                >
                    Explore The Mirage Edit
                </a>
            </div>
        </section>
    );
}
