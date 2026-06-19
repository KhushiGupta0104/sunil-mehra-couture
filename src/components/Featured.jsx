import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local images
// Ivory Chapter (Beige/White/Cream)
import ivory1_front from "@/assets/images/KurtaSets/sunil_mehra_1147.jpg";
import ivory1_back from "@/assets/images/KurtaSets/sunil_mehra_1177.jpg";
import ivory2_front from "@/assets/images/KurtaSets/sunil_mehra_1298.jpg";
import ivory2_back from "@/assets/images/KurtaSets/sunil_mehra_1217.jpg";
import ivory3_front from "@/assets/images/KurtaSets/sunil_mehra_1318.jpg";
import ivory3_back from "@/assets/images/KurtaSets/sunil_mehra_1338.jpg";

// Slate & Indigo Chapters (Neutral & Blue)
import slate_front from "@/assets/images/IMG8912 copy.jpg";
import slate_back from "@/assets/images/IMG9115 copy.jpg";
import ash_front from "@/assets/images/KurtaSets/sunil_mehra_8328.jpg";
import ash_back from "@/assets/images/KurtaSets/sunil_mehra_8350.jpg";
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
        name: "Slate Blue Tailored Suit",
        price: "₹1,85,000",
        tag: "New",
        front: slate_front,
        back: slate_back,
    },
    {
        id: "p5",
        name: "Ash Grey Silk Kurta Set",
        price: "₹1,15,000",
        tag: null,
        front: ash_front,
        back: ash_back,
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

const ALL_PRODUCTS = [...IVORY_PRODUCTS, ...COLORED_PRODUCTS];

export default function Featured() {
    const [selectedProd, setSelectedProd] = useState(null);

    useEffect(() => {
        if (selectedProd) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [selectedProd]);

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = ALL_PRODUCTS.findIndex((p) => p.id === selectedProd.id);
        const prevIndex = (currentIndex - 1 + ALL_PRODUCTS.length) % ALL_PRODUCTS.length;
        setSelectedProd(ALL_PRODUCTS[prevIndex]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = ALL_PRODUCTS.findIndex((p) => p.id === selectedProd.id);
        const nextIndex = (currentIndex + 1) % ALL_PRODUCTS.length;
        setSelectedProd(ALL_PRODUCTS[nextIndex]);
    };

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
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProd(prod); }} className="block w-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                        <img src={prod.front} alt={prod.name} loading="lazy" className="img-front absolute inset-0 w-full h-full object-cover object-top transition duration-700" />
                                        <img src={prod.back} alt={prod.name} loading="lazy" className="img-back absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
                            The Slate & Indigo Chapters
                        </h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
                        {COLORED_PRODUCTS.map((prod) => (
                            <div key={prod.id} className="w-full flex flex-col">
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProd(prod); }} className="block w-full flex flex-col group" data-testid={`product-${prod.id}`}>
                                    <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                        <img src={prod.front} alt={prod.name} loading="lazy" className="img-front absolute inset-0 w-full h-full object-cover object-top transition duration-700" />
                                        <img src={prod.back} alt={prod.name} loading="lazy" className="img-back absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProd && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProd(null)}
                        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-6 sm:p-10"
                    >
                        {/* Lightbox Top */}
                        <div className="flex justify-between items-center w-full shrink-0">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                                FEATURED / PIECES — {selectedProd.name.toUpperCase()}
                            </span>
                            <button
                                onClick={() => setSelectedProd(null)}
                                className="font-luxe text-[10px] uppercase tracking-[0.3em] text-white hover:text-[var(--champagne)] border border-white/20 hover:border-[var(--champagne)] px-6 py-3 transition duration-300"
                            >
                                Close <span aria-hidden>×</span>
                            </button>
                        </div>

                        {/* Lightbox Middle */}
                        <div className="relative flex items-center justify-center grow my-6 max-h-[75vh]">
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 sm:left-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Previous image"
                            >
                                ❮
                            </button>

                            <motion.div
                                key={selectedProd.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-w-full max-h-full aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src={selectedProd.front}
                                    alt={selectedProd.name}
                                    className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain mx-auto shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            <button
                                onClick={handleNext}
                                className="absolute right-0 sm:right-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Next image"
                            >
                                ❯
                            </button>
                        </div>

                        {/* Lightbox Bottom */}
                        <div className="text-center shrink-0 max-w-xl mx-auto flex flex-col items-center">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.2em] text-[var(--champagne)]">
                                {selectedProd.name}
                            </span>
                            <p className="font-display text-white text-sm mt-2">
                                Hand-finished tailoring from the House of Sunil Mehra.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
