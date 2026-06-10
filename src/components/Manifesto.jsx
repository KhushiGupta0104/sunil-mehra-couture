import React from "react";

export default function Manifesto() {
    return (
        <section
            id="manifesto"
            className="relative bg-[var(--ink)] text-[var(--bone)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5 overflow-hidden"
            data-testid="manifesto-section"
        >
            <div className="grain" />
            <div className="relative z-10 max-w-[1200px] mx-auto w-full h-full flex flex-col justify-center text-center">
                <p className="eyebrow !text-[var(--champagne)] justify-center mb-6">
                    The House Manifesto
                </p>

                <p className="font-italic-serif text-[7vw] sm:text-[5vw] lg:text-[3.6vw] leading-[1.2] tracking-tight max-w-4xl mx-auto">
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

                <div className="mt-8 flex items-center justify-center gap-4">
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
