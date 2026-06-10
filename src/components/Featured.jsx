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
        <>
            {/* FRAME 1: The Ivory Chapter */}
            <section
                id="featured"
                className="relative bg-[var(--bone)] text-[var(--ink)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5"
                data-testid="featured-section"
            >
                <div className="max-w-[1500px] mx-auto w-full h-full flex flex-col justify-between">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-3 sm:mb-4 shrink-0">
                        <div>
                            <p className="eyebrow mb-1">New In</p>
                            <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[3.8vw] leading-[1.15]">
                                Featured <span className="font-italic-serif italic">pieces.</span>
                            </h2>
                        </div>
                        <a href="#featured-part2" className="hairline-link" data-testid="featured-discover-all">
                            Discover All <span aria-hidden>→</span>
                        </a>
                    </div>

                    {/* Subsection Divider & Title */}
                    <div className="mb-4 border-b border-[var(--hairline)] pb-2 shrink-0">
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                            The Ivory Chapter
                        </h3>
                        <p className="font-italic-serif text-sm text-[var(--muted)] mt-1">
                            A study in pure silk and light linen, hand-finished in the quiet of the atelier.
                        </p>
                    </div>

                    {/* Grid (Flex-1 to fit viewport exactly) */}
                    <div className="flex-1 min-h-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                        {IVORY_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full h-full flex flex-col">
                                <a href="#" className="block w-full h-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="product-card flex-1 min-h-0 relative w-full overflow-hidden border border-[var(--hairline)]">
                                        <img src={prod.front} alt={prod.name} className="img-front absolute inset-0 w-full h-full object-cover object-top" />
                                        <img src={prod.back} alt={prod.name} className="img-back absolute inset-0 w-full h-full object-cover object-top" />
                                        {prod.tag && (
                                            <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                                {prod.tag}
                                            </span>
                                        )}
                                        <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                            Discover Piece →
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-start justify-between gap-4 w-full shrink-0">
                                        <p className="h-luxe text-sm tracking-[0.05em]">{prod.name}</p>
                                        <p className="font-display text-base font-medium whitespace-nowrap">{prod.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FRAME 2: The Ochre & Indigo Chapters */}
            <section
                id="featured-part2"
                className="relative bg-[var(--bone)] text-[var(--ink)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5"
                data-testid="featured-section-2"
            >
                <div className="max-w-[1500px] mx-auto w-full h-full flex flex-col justify-between">
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
                        <p className="eyebrow">Featured — Chapter II</p>
                        <span className="text-[10px] tracking-[0.2em] font-luxe opacity-60 uppercase">
                            Collection 04–06
                        </span>
                    </div>

                    {/* Subsection Divider & Title */}
                    <div className="mb-4 border-b border-[var(--hairline)] pb-2 shrink-0">
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                            The Ochre & Indigo Chapters
                        </h3>
                        <p className="font-italic-serif text-sm text-[var(--muted)] mt-1">
                            Rich earth tones and deep indigo shades, tailored for ceremonial presence.
                        </p>
                    </div>

                    {/* Grid (Flex-1 to fit viewport exactly) */}
                    <div className="flex-1 min-h-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                        {COLORED_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full h-full flex flex-col">
                                <a href="#" className="block w-full h-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="product-card flex-1 min-h-0 relative w-full overflow-hidden border border-[var(--hairline)]">
                                        <img src={prod.front} alt={prod.name} className="img-front absolute inset-0 w-full h-full object-cover object-top" />
                                        <img src={prod.back} alt={prod.name} className="img-back absolute inset-0 w-full h-full object-cover object-top" />
                                        {prod.tag && (
                                            <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                                {prod.tag}
                                            </span>
                                        )}
                                        <span className="absolute bottom-5 right-5 z-10 text-[var(--champagne)] text-[9px] uppercase tracking-[0.3em] font-luxe opacity-0 group-hover:opacity-100 transition duration-500">
                                            Discover Piece →
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-start justify-between gap-4 w-full shrink-0">
                                        <p className="h-luxe text-sm tracking-[0.05em]">{prod.name}</p>
                                        <p className="font-display text-base font-medium whitespace-nowrap">{prod.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
