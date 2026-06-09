import React from "react";

// Import local images
import img3721 from "@/assets/images/Sunil Mehra_3721.jpg";
import img0904 from "@/assets/images/Sunil Mehra_0904.jpg";
import img0039 from "@/assets/images/Sunil Mehra_0039.jpg";
import img6602 from "@/assets/images/Sunil Mehra_6602.jpg";
import img2281 from "@/assets/images/Sunil Mehra_2281.jpg";
import img0493 from "@/assets/images/Sunil Mehra  0493.jpg";
import img0966 from "@/assets/images/Sunil Mehra  0966.jpg";
import img0246 from "@/assets/images/Sunil Mehra  0246.jpg";
import img0553 from "@/assets/images/Sunil Mehra  0553.jpg";
import img9371 from "@/assets/images/IMG9371 copy.jpg";
import img9488 from "@/assets/images/IMG9488 copy.jpg";

const IVORY_PRODUCTS = [
    {
        id: "p1",
        name: "Mirage Silk Kurta Set",
        price: "₹1,45,000",
        tag: "Couture",
        front: img3721,
        back: img0904,
    },
    {
        id: "p2",
        name: "Bone Silk Kurta Set",
        price: "₹1,25,000",
        tag: "New",
        front: img0039,
        back: img6602,
    },
    {
        id: "p3",
        name: "Classic Atelier Kurta",
        price: "₹98,000",
        tag: null,
        front: img2281,
        back: img3721,
    },
];

const COLORED_PRODUCTS = [
    {
        id: "p4",
        name: "Dune Bandhgala",
        price: "₹1,89,000",
        tag: "New",
        front: img0493,
        back: img0966,
    },
    {
        id: "p5",
        name: "Sand Linen Jodhpuri",
        price: "₹1,72,000",
        tag: null,
        front: img0246,
        back: img0553,
    },
    {
        id: "p6",
        name: "Indigo Couture Sherwani",
        price: "₹2,45,000",
        tag: "Couture",
        front: img9371,
        back: img9488,
    },
];

export default function Featured() {
    return (
        <section
            id="featured"
            className="bg-[var(--bone)] py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20"
            data-testid="featured-section"
        >
            <div className="max-w-[1300px] mx-auto">
                
                {/* Global Heading */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-24">
                    <div>
                        <p className="eyebrow mb-5">New In</p>
                        <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4.4vw] leading-[1.15]">
                            Featured <span className="font-italic-serif italic">pieces.</span>
                        </h2>
                    </div>
                    <a href="#" className="hairline-link" data-testid="featured-discover-all">
                        Discover All <span aria-hidden>→</span>
                    </a>
                </div>

                {/* ============ SUBSECTION 1: IVORY COLLECTION ============ */}
                <div className="mb-32 lg:mb-48">
                    <div className="mb-14 border-b border-[var(--hairline)] pb-5">
                        <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
                            The Ivory Chapter
                        </h3>
                        <p className="font-italic-serif text-[15px] sm:text-base text-[var(--muted)] mt-1.5">
                            A study in pure silk and light linen, hand-finished in the quiet of the atelier.
                        </p>
                    </div>

                    {/* Asymmetric layout grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-20 lg:gap-y-0 items-start">
                        {/* Product 1: Spans cols 1 to 7 */}
                        <div className="lg:col-span-7">
                            <a href="#" className="block group" data-testid={`product-${IVORY_PRODUCTS[0].id}`}>
                                <div className="product-card aspect-[3.2/4] relative w-full">
                                    <img src={IVORY_PRODUCTS[0].front} alt={IVORY_PRODUCTS[0].name} className="img-front absolute inset-0 w-full h-full object-cover" />
                                    <img src={IVORY_PRODUCTS[0].back} alt={IVORY_PRODUCTS[0].name} className="img-back absolute inset-0 w-full h-full object-cover" />
                                    {IVORY_PRODUCTS[0].tag && (
                                        <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                            {IVORY_PRODUCTS[0].tag}
                                        </span>
                                    )}
                                    <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                        Discover Piece →
                                    </span>
                                </div>
                                <div className="mt-5 flex items-start justify-between gap-4 w-full">
                                    <p className="h-luxe text-base tracking-[0.05em]">{IVORY_PRODUCTS[0].name}</p>
                                    <p className="font-display text-lg font-medium whitespace-nowrap">{IVORY_PRODUCTS[0].price}</p>
                                </div>
                            </a>
                        </div>

                        {/* Product 2: Staggered smaller image on the right (cols 9 to 12) */}
                        <div className="lg:col-span-4 lg:col-start-9 lg:mt-48">
                            <a href="#" className="block group" data-testid={`product-${IVORY_PRODUCTS[1].id}`}>
                                <div className="product-card aspect-[2.8/4] relative">
                                    <img src={IVORY_PRODUCTS[1].front} alt={IVORY_PRODUCTS[1].name} className="img-front absolute inset-0 w-full h-full object-cover" />
                                    <img src={IVORY_PRODUCTS[1].back} alt={IVORY_PRODUCTS[1].name} className="img-back absolute inset-0 w-full h-full object-cover" />
                                    {IVORY_PRODUCTS[1].tag && (
                                        <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                            {IVORY_PRODUCTS[1].tag}
                                        </span>
                                    )}
                                    <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                        Discover Piece →
                                    </span>
                                </div>
                                <div className="mt-5 flex items-start justify-between gap-4">
                                    <p className="h-luxe text-base tracking-[0.05em]">{IVORY_PRODUCTS[1].name}</p>
                                    <p className="font-display text-lg font-medium whitespace-nowrap">{IVORY_PRODUCTS[1].price}</p>
                                </div>
                            </a>
                        </div>

                        {/* Product 3: Offset below and centered (cols 3 to 8) */}
                        <div className="lg:col-span-6 lg:col-start-3 lg:mt-16">
                            <a href="#" className="block group" data-testid={`product-${IVORY_PRODUCTS[2].id}`}>
                                <div className="product-card aspect-[3/4] relative">
                                    <img src={IVORY_PRODUCTS[2].front} alt={IVORY_PRODUCTS[2].name} className="img-front absolute inset-0 w-full h-full object-cover" />
                                    <img src={IVORY_PRODUCTS[2].back} alt={IVORY_PRODUCTS[2].name} className="img-back absolute inset-0 w-full h-full object-cover" />
                                    {IVORY_PRODUCTS[2].tag && (
                                        <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                            {IVORY_PRODUCTS[2].tag}
                                        </span>
                                    )}
                                    <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                        Discover Piece →
                                    </span>
                                </div>
                                <div className="mt-5 flex items-start justify-between gap-4">
                                    <p className="h-luxe text-base tracking-[0.05em]">{IVORY_PRODUCTS[2].name}</p>
                                    <p className="font-display text-lg font-medium whitespace-nowrap">{IVORY_PRODUCTS[2].price}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ============ SUBSECTION 2: OCHRE & INDIGO CHAPTERS ============ */}
                <div>
                    <div className="mb-14 border-b border-[var(--hairline)] pb-5">
                        <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
                            The Ochre & Indigo Chapters
                        </h3>
                        <p className="font-italic-serif text-[15px] sm:text-base text-[var(--muted)] mt-1.5">
                            Rich earth tones and deep indigo shades, tailored for ceremonial presence.
                        </p>
                    </div>

                    {/* Symmetrical 3-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {COLORED_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full">
                                <a href="#" className="block group" data-testid={`product-${prod.id}`}>
                                    <div className="product-card aspect-[3/4] relative w-full">
                                        <img src={prod.front} alt={prod.name} className="img-front absolute inset-0 w-full h-full object-cover" />
                                        <img src={prod.back} alt={prod.name} className="img-back absolute inset-0 w-full h-full object-cover" />
                                        {prod.tag && (
                                            <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                                {prod.tag}
                                            </span>
                                        )}
                                        <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                            Discover Piece →
                                        </span>
                                    </div>
                                    <div className="mt-5 flex items-start justify-between gap-4 w-full">
                                        <p className="h-luxe text-base tracking-[0.05em]">{prod.name}</p>
                                        <p className="font-display text-lg font-medium whitespace-nowrap">{prod.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
