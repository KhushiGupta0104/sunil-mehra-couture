import React from "react";

// Import local images
import img0553 from "@/assets/images/Sunil Mehra  0553.jpg";
import img0904 from "@/assets/images/Sunil Mehra_0904.jpg";
import img0039 from "@/assets/images/Sunil Mehra_0039.jpg";

const STORIES = [
    {
        no: "01",
        season: "Couture 2025",
        name: "Mirage",
        img: img0553,
    },
    {
        no: "02",
        season: "Spring Ceremony",
        name: "The Bone Edit",
        img: img0904,
    },
    {
        no: "03",
        season: "Womenswear Edit",
        name: "The Muse",
        img: img0039,
    },
];

export default function Editorial() {
    return (
        <section
            id="editorial"
            className="relative bg-[var(--bone)] text-[var(--ink)] min-h-screen lg:h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-12 px-6 sm:px-10 lg:pb-5 lg:px-14 py-8 lg:py-0"
            data-testid="editorial-section"
        >
            <div className="max-w-[1500px] mx-auto w-full flex-1 flex flex-col justify-between py-6 lg:py-0">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4 sm:mb-5 gap-6 shrink-0">
                    <div>
                        <p className="eyebrow mb-2">Editorial</p>
                        <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[3.8vw] leading-[1.15]">
                            Stories, <span className="font-italic-serif italic">in cloth.</span>
                        </h2>
                    </div>
                    <a href="#" onClick={(e) => e.preventDefault()} className="hairline-link" data-testid="editorial-view-lookbook">
                        View Lookbook <span aria-hidden>→</span>
                    </a>
                </div>

                {/* Grid (Flex-1 to fit viewport exactly) */}
                <div className="flex-1 min-h-0 w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                    {STORIES.map((s, i) => (
                        <a
                            key={s.no}
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="block group w-full h-full flex flex-col"
                            data-testid={`editorial-${s.no}`}
                        >
                            <div className="relative aspect-[4/3] sm:aspect-auto sm:flex-1 sm:min-h-0 w-full overflow-hidden border border-[var(--hairline)] cat-card">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top"
                                />
                                <span className="absolute top-5 left-5 font-display text-3xl text-[var(--bone)]">
                                    {s.no}
                                </span>
                            </div>
                            <div className="mt-4 flex items-baseline justify-between shrink-0">
                                <div>
                                    <p className="font-italic-serif text-base text-[var(--muted)]">
                                        {s.season}
                                    </p>
                                    <p className="h-luxe text-lg sm:text-xl mt-0.5">
                                        {s.name}
                                    </p>
                                </div>
                                <span className="font-luxe text-[11px] uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition">
                                    Read →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
