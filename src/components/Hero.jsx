import React from "react";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] pt-20 sm:pt-24 w-full" data-testid="hero-section">
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

            {/* Content below the image container */}
            <div className="py-12 sm:py-16 px-6 sm:px-12 lg:px-20 text-center max-w-[850px] mx-auto">
                <p className="eyebrow mb-4 rise delay-1">Couture 2025</p>
                <p className="font-italic-serif text-lg sm:text-xl text-[var(--muted)] mb-3 rise delay-2">
                    The Mirage Edit
                </p>
                <h1 className="h-display text-4xl sm:text-5xl lg:text-6.5xl leading-[1.15] text-[var(--ink)] rise delay-3">
                    The art of <span className="font-italic-serif italic font-light">undoing.</span>
                </h1>
                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--ink-soft)] mt-6 max-w-xl mx-auto opacity-80 rise delay-4">
                    A new chapter from the atelier — silk, linen and silver,
                    hand-built by a single karigar. Eight weeks. Three fittings.
                    Twenty-eight measurements.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 rise delay-5">
                    <a
                        href="#featured"
                        className="bg-[var(--ink)] text-[var(--bone)] hover:bg-transparent hover:text-[var(--ink)] border border-[var(--ink)] px-8 py-3.5 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300"
                        data-testid="hero-cta-explore"
                    >
                        Explore The Mirage Edit
                    </a>
                    <a
                        href="#atelier"
                        className="border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bone)] px-8 py-3.5 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300"
                        data-testid="hero-cta-book"
                    >
                        Book Private Appointment
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 opacity-80 pb-8 rise delay-5">
                <span className="text-[10px] tracking-[0.4em] font-luxe uppercase">
                    Scroll
                </span>
                <span className="w-px h-10 bg-[var(--ink)] opacity-30 animate-pulse" />
            </div>
        </section>
    );
}
