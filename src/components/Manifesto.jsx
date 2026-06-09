import React from "react";

export default function Manifesto() {
    return (
        <section
            id="manifesto"
            className="relative bg-[var(--ink)] text-[var(--bone)] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
            data-testid="manifesto-section"
        >
            <div className="grain" />
            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <p className="eyebrow !text-[var(--champagne)] justify-center mb-10">
                    The House Manifesto
                </p>

                <p className="font-italic-serif text-[7vw] sm:text-[5vw] lg:text-[3.6vw] leading-[1.15] tracking-tight">
                    <span className="text-[var(--champagne)] font-display not-italic mr-2">
                        “
                    </span>
                    We do not chase seasons. We chase silhouette, drape, and the
                    small architectures inside a coat that you can only feel when
                    it is on.
                    <span className="text-[var(--champagne)] font-display not-italic ml-2">
                        ”
                    </span>
                </p>

                <div className="mt-14 flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-[var(--champagne)] opacity-70" />
                    <p className="font-luxe uppercase text-[11px] tracking-[0.4em]">
                        Sunil Mehra · Founder
                    </p>
                    <span className="w-8 h-px bg-[var(--champagne)] opacity-70" />
                </div>
            </div>
        </section>
    );
}
