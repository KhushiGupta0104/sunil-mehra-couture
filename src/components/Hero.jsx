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
        </section>
    );
}
