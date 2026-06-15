import React from "react";

// Import local images
// Ivory Chapter (Beige/White/Cream)
import ivory1_front from "@/assets/images/KurtaSets/sunil_mehra_1147.jpg";
import ivory1_back from "@/assets/images/KurtaSets/sunil_mehra_1177.jpg";
import ivory2_front from "@/assets/images/KurtaSets/sunil_mehra_1298.jpg";
import ivory2_back from "@/assets/images/KurtaSets/sunil_mehra_1217.jpg";
import ivory3_front from "@/assets/images/KurtaSets/sunil_mehra_1318.jpg";
import ivory3_back from "@/assets/images/KurtaSets/sunil_mehra_1338.jpg";

// Ochre & Indigo Chapters (Brown/Orange/Blue)
import ochre1_front from "@/assets/images/Bandhagla/sunil_mehra_0738.jpg";
import ochre1_back from "@/assets/images/Bandhagla/sunil_mehra_1043.jpg";
import ochre2_front from "@/assets/images/KurtaSets/sunil_mehra_0711.jpg";
import ochre2_back from "@/assets/images/KurtaSets/sunil_mehra_0725.jpg";
import indigo_front from "@/assets/images/Bandhagla/img9367_copy.jpg";
import indigo_back from "@/assets/images/Bandhagla/img9702_copy.jpg";

const IVORY_PRODUCTS = [
    {
        id: "p1",
        name: "Mirage Silk Kurta Set",
        price: "₹1,45,000",
        tag: "Couture",
        front: ivory1_front,
        back: ivory1_back,
    },
    {
        id: "p2",
        name: "Bone Silk Kurta Set",
        price: "₹1,25,000",
        tag: "New",
        front: ivory2_front,
        back: ivory2_back,
    },
    {
        id: "p3",
        name: "Classic Atelier Kurta",
        price: "₹98,000",
        tag: null,
        front: ivory3_front,
        back: ivory3_back,
    },
];

const COLORED_PRODUCTS = [
    {
        id: "p4",
        name: "Dune Bandhgala",
        price: "₹1,89,000",
        tag: "New",
        front: ochre1_front,
        back: ochre1_back,
    },
    {
        id: "p5",
        name: "Sand Linen Jodhpuri",
        price: "₹1,72,000",
        tag: null,
        front: ochre2_front,
        back: ochre2_back,
    },
    {
        id: "p6",
        name: "Indigo Couture Sherwani",
        price: "₹2,45,000",
        tag: "Couture",
        front: indigo_front,
        back: indigo_back,
    },
];

export default function Featured() {
    return (
        <section
            id="featured"
            className="relative bg-[var(--bone)] text-[var(--ink)] pt-12 pb-20 lg:pt-16 lg:pb-28 w-full flex flex-col px-6 sm:px-10 lg:px-14 border-b border-[var(--hairline)] scroll-mt-28"
            data-testid="featured-section"
        >
            <div className="max-w-[1500px] mx-auto w-full space-y-6 sm:space-y-8">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-2 border-b border-[var(--hairline)]">
                    <div>
                        <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.05em] text-[var(--ink)]">
                            Featured <span className="font-italic-serif italic">pieces.</span>
                        </h2>
                    </div>
                </div>

                {/* Subchapter 1: The Ivory Chapter */}
                <div className="space-y-4">
                    <div>
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                            The Ivory Chapter
                        </h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
                        {IVORY_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full flex flex-col">
                                <a href="#" className="block w-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                        <img src={prod.front} alt={prod.name} className="img-front absolute inset-0 w-full h-full object-cover object-top transition duration-700" />
                                        <img src={prod.back} alt={prod.name} className="img-back absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        {prod.tag && (
                                            <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                                {prod.tag}
                                            </span>
                                        )}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-[var(--bone)] text-[var(--ink)] text-[9px] uppercase tracking-[0.25em] font-luxe px-5 py-2.5 border border-[var(--hairline)]">
                                                Discover Piece
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-start justify-between gap-4 w-full">
                                        <h4 className="font-luxe text-xs uppercase tracking-[0.1em] text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">{prod.name}</h4>
                                        <p className="font-display text-sm font-medium whitespace-nowrap text-[var(--ink)]">{prod.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subchapter 2: The Ochre & Indigo Chapters */}
                <div className="space-y-4">
                    <div>
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                            The Ochre & Indigo Chapters
                        </h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
                        {COLORED_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full flex flex-col">
                                <a href="#" className="block w-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                        <img src={prod.front} alt={prod.name} className="img-front absolute inset-0 w-full h-full object-cover object-top transition duration-700" />
                                        <img src={prod.back} alt={prod.name} className="img-back absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        {prod.tag && (
                                            <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-[var(--bone)] text-[9px] uppercase tracking-[0.3em] font-luxe text-[var(--ink)]">
                                                {prod.tag}
                                            </span>
                                        )}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-[var(--bone)] text-[var(--ink)] text-[9px] uppercase tracking-[0.25em] font-luxe px-5 py-2.5 border border-[var(--hairline)]">
                                                Discover Piece
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-start justify-between gap-4 w-full">
                                        <h4 className="font-luxe text-xs uppercase tracking-[0.1em] text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">{prod.name}</h4>
                                        <p className="font-display text-sm font-medium whitespace-nowrap text-[var(--ink)]">{prod.price}</p>
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
