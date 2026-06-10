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
            className="bg-[var(--bone)] py-6 sm:py-8 lg:py-10 px-6 sm:px-12 lg:px-20"
            data-testid="editorial-section"
        >
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-5 sm:mb-6 gap-6">
                    <div>
                        <p className="eyebrow mb-5">Editorial</p>
                        <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4.4vw] leading-[1.15]">
                            Stories, <span className="font-italic-serif italic">in cloth.</span>
                        </h2>
                    </div>
                    <a href="#" className="hairline-link" data-testid="editorial-view-lookbook">
                        View Lookbook <span aria-hidden>→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {STORIES.map((s, i) => (
                        <a
                            key={s.no}
                            href="#"
                            className={[
                                "block group",
                                i === 1 ? "md:translate-y-4" : "",
                            ].join(" ")}
                            data-testid={`editorial-${s.no}`}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden cat-card">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                <span className="absolute top-5 left-5 font-display text-3xl text-[var(--bone)]">
                                    {s.no}
                                </span>
                            </div>
                            <div className="mt-5 flex items-baseline justify-between">
                                <div>
                                    <p className="font-italic-serif text-lg text-[var(--muted)]">
                                        {s.season}
                                    </p>
                                    <p className="h-luxe text-xl sm:text-2xl mt-1">
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
