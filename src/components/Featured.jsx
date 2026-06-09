import React from "react";

const PRODUCTS = [
    {
        id: "p1",
        name: "Mirage Silk Kurta Set",
        price: "₹1,45,000",
        tag: "Couture",
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        id: "p2",
        name: "Dune Bandhgala",
        price: "₹89,000",
        tag: "New",
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        id: "p3",
        name: "Sand Linen Jodhpuri",
        price: "₹72,000",
        tag: null,
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        id: "p4",
        name: "Ivory Drape Indo-Western",
        price: "₹98,000",
        tag: "Limited",
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
    {
        id: "p5",
        name: "Cream Cotton Kurta",
        price: "₹32,000",
        tag: null,
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
    },
    {
        id: "p6",
        name: "Pearl Atelier Sherwani",
        price: "₹1,98,000",
        tag: "Couture",
        front: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png",
        back: "https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png",
    },
];

export default function Featured() {
    return (
        <section
            id="featured"
            className="bg-[var(--bone)] py-24 sm:py-32 px-6 sm:px-10 lg:px-14"
            data-testid="featured-section"
        >
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
                    <div>
                        <p className="eyebrow mb-5">New In</p>
                        <h2 className="h-display text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.94]">
                            Featured <span className="font-italic-serif italic">pieces.</span>
                        </h2>
                    </div>
                    <a href="#" className="hairline-link" data-testid="featured-discover-all">
                        Discover All <span aria-hidden>→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-x-10 lg:gap-y-20">
                    {PRODUCTS.map((p) => (
                        <a
                            key={p.id}
                            href="#"
                            className="block group"
                            data-testid={`product-${p.id}`}
                        >
                            <div className="product-card aspect-[3/4] relative">
                                <img
                                    src={p.front}
                                    alt={p.name}
                                    className="img-front absolute inset-0 w-full h-full object-cover"
                                />
                                <img
                                    src={p.back}
                                    alt={p.name}
                                    className="img-back absolute inset-0 w-full h-full object-cover"
                                />
                                {p.tag && (
                                    <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[10px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                        {p.tag}
                                    </span>
                                )}
                                <span className="absolute bottom-5 right-5 z-10 text-[var(--bone)] text-[10px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                    Discover Piece →
                                </span>
                            </div>
                            <div className="mt-5 flex items-start justify-between gap-4">
                                <p className="h-luxe text-lg">{p.name}</p>
                                <p className="font-display text-lg whitespace-nowrap">
                                    {p.price}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
