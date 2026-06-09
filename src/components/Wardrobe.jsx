import React from "react";

const CATS = [
    {
        no: "01",
        edit: "The Heirloom Edit",
        name: "Sherwani",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        no: "02",
        edit: "Tailored Royalty",
        name: "Bandhgala",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        no: "03",
        edit: "Quiet Luxury",
        name: "Kurta Sets",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        no: "04",
        edit: "Modern Maharaja",
        name: "Indo-Western",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        no: "05",
        edit: "Princely Silhouettes",
        name: "Jodhpuri",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        no: "06",
        edit: "Sharply Cut",
        name: "Suits",
        img: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
];

export default function Wardrobe() {
    return (
        <section
            id="wardrobe"
            className="bg-[var(--bone)] py-24 sm:py-32 px-6 sm:px-10 lg:px-14"
            data-testid="wardrobe-section"
        >
            <div className="max-w-[1500px] mx-auto">
                {/* heading row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-24">
                    <div>
                        <p className="eyebrow mb-6">The Wardrobe</p>
                        <h2 className="h-display text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.94] max-w-[900px]">
                            Cut for the modern{" "}
                            <span className="font-italic-serif italic">maharaja.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm">
                        <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                            Six chapters of menswear from the atelier. Each piece is
                            hand-finished by a single karigar — measured not in
                            minutes, but in months.
                        </p>
                        <a href="#featured" className="hairline-link" data-testid="wardrobe-browse">
                            Browse the Atelier <span aria-hidden>→</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {CATS.map((c) => (
                        <a
                            key={c.no}
                            href="#featured"
                            className="cat-card group block"
                            data-testid={`wardrobe-card-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={c.img}
                                    alt={c.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,14,0.45)] via-transparent to-transparent" />
                                <span className="absolute top-5 right-5 font-display text-2xl text-[var(--bone)] opacity-90">
                                    {c.no}
                                </span>
                                <div className="absolute bottom-6 left-6 right-6 text-[var(--bone)]">
                                    <p className="font-italic-serif text-lg opacity-90">
                                        {c.edit}
                                    </p>
                                    <p className="h-display text-3xl sm:text-4xl mt-1">
                                        {c.name}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
