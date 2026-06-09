import React from "react";

export default function Hero() {
    return (
        <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-[var(--bone)]" data-testid="hero-section">
            {/* Background video with fallback poster */}
            <video
                className="hero-video"
                style={{ objectFit: "cover", objectPosition: "center 18%", width: "100%", height: "100%", border: "none", outline: "none" }}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png"
                data-testid="hero-video"
            >
                <source
                    src="https://videos.pexels.com/video-files/4666740/4666740-uhd_2560_1440_24fps.mp4"
                    type="video/mp4"
                />
                <source
                    src="https://videos.pexels.com/video-files/8085836/8085836-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="hero-overlay" />
            <div className="grain" />

            {/* Top eyebrow + chapter indicator */}
            <div className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10 lg:px-14 flex items-center justify-between text-[var(--bone)]">
                <p className="eyebrow !text-[var(--champagne)] rise delay-1">
                    Couture 2025
                </p>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] font-luxe rise delay-2">
                    <span>Chapter</span>
                    <span className="font-display text-2xl leading-none">01</span>
                    <span className="opacity-50">/</span>
                    <span className="opacity-70">06</span>
                </div>
            </div>

            {/* Side label */}
            <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 -rotate-90 origin-left">
                <p className="text-[11px] tracking-[0.4em] uppercase font-luxe opacity-90 rise delay-3">
                    Photographed in the Thar — film by SM Atelier
                </p>
            </div>

            {/* Center title */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-28 sm:pb-32 px-6 sm:px-10 lg:px-14">
                <p className="font-italic-serif text-xl sm:text-2xl opacity-90 mb-5 rise delay-2">
                    The Mirage Edit
                </p>
                <h1 className="h-display text-[14vw] sm:text-[11vw] lg:text-[8.4vw] leading-[0.92] max-w-[1200px] rise delay-3">
                    The art of <span className="font-italic-serif italic font-light">undoing.</span>
                </h1>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-[1100px]">
                    <p className="font-body text-[15px] sm:text-base leading-relaxed opacity-90 max-w-md rise delay-4">
                        A new chapter from the atelier — silk, linen and silver,
                        hand-built by a single karigar. Eight weeks. Three fittings.
                        Twenty-eight measurements.
                    </p>

                    <div className="flex items-center gap-7 sm:gap-9 rise delay-5">
                        <a
                            href="#wardrobe"
                            className="hairline-link !text-[var(--bone)] !border-[var(--bone)]"
                            data-testid="hero-cta-discover"
                        >
                            Discover Couture
                            <span aria-hidden>→</span>
                        </a>
                        <a
                            href="#editorial"
                            className="text-[11px] uppercase tracking-[0.32em] font-luxe opacity-80 hover:opacity-100 transition"
                            data-testid="hero-cta-lookbook"
                        >
                            View Lookbook
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-80 rise delay-5">
                <span className="text-[10px] tracking-[0.4em] font-luxe uppercase">
                    Scroll
                </span>
                <span className="w-px h-10 bg-[var(--bone)] opacity-60 animate-pulse" />
            </div>
        </section>
    );
}
