import React from "react";

const STORIES = [
    {
        no: "01",
        season: "Couture 2025",
        name: "Mirage",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        no: "02",
        season: "Spring Ceremony",
        name: "The Bone Edit",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        no: "03",
        season: "Womenswear Edit",
        name: "The Muse",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/rernyotw_image.png",
    },
];

export default function Editorial() {
    return (
        <section
            id="editorial"
            className="bg-[var(--bone)] py-24 sm:py-32 px-6 sm:px-10 lg:px-14"
            data-testid="editorial-section"
        >
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 sm:mb-20 gap-6">
                    <div>
                        <p className="eyebrow mb-5">Editorial</p>
                        <h2 className="h-display text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.94]">
                            Stories, <span className="font-italic-serif italic">in cloth.</span>
                        </h2>
                    </div>
                    <a href="#" className="hairline-link" data-testid="editorial-view-lookbook">
                        View Lookbook <span aria-hidden>→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {STORIES.map((s, i) => (
                        <a
                            key={s.no}
                            href="#"
                            className={[
                                "block group",
                                i === 1 ? "md:translate-y-12" : "",
                            ].join(" ")}
                            data-testid={`editorial-${s.no}`}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden cat-card">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-full h-full object-cover"
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
