import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import baseImg from "@/assets/images/Bandhagla/sunil_mehra_0738.jpg";

const ITEMS = [
    {
        id: "jacket",
        name: "Classic Royal Bandhgala",
        chapter: "Chapter 01 — Tailored Royalty",
        materials: "100% Handspun Silk, Brass Buttons",
        description: "A timeless expression of heritage. Hand-tailored with structure that follows the natural drape of the shoulders, featuring custom engraved brass buttons and double-piped pockets. Crafted over 45 hours by a single karigar.",
        coords: { top: "42%", left: "46%" },
    },
    {
        id: "pocketSquare",
        name: "Embroidered Silk Pocket Square",
        chapter: "Chapter 06 — Finishing Details",
        materials: "Mulberry Silk, Silver Zardozi Thread",
        description: "Fine mulberry silk featuring hand-rolled edges and a subtle motif embroidered with genuine silver zardozi thread. The perfect accent of sophistication.",
        coords: { top: "37%", left: "57%" },
    },
    {
        id: "collar",
        name: "Structured Band Collar Inner",
        chapter: "Chapter 02 — Quiet Luxury",
        materials: "Premium Giza Cotton, Muted Ivory Stitching",
        description: "A tailored inner kurta constructed from exceptionally soft, breathable Giza cotton. Features a high, stiffened band collar designed to sit cleanly beneath the bandhgala jacket.",
        coords: { top: "22%", left: "48%" },
    }
];

export default function ShopTheLook() {
    const [activeItem, setActiveItem] = useState(ITEMS[0]);

    return (
        <section
            id="shop-the-look"
            className="w-full bg-[var(--cream)] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[var(--hairline)]"
            data-testid="shop-the-look-section"
        >
            <div className="max-w-[1500px] mx-auto w-full px-6 sm:px-10 lg:px-14 space-y-8 sm:space-y-12">
                
                {/* Header */}
                <div className="text-center md:text-left pb-4 border-b border-[var(--hairline)]">
                    <span className="font-luxe text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[var(--ink-soft)] block mb-2">
                        CHAPTER & COLLECTION
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.05em] text-[var(--ink)]">
                        Shop the <span className="font-italic-serif italic">Look.</span>
                    </h2>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Image with Hotspots */}
                    <div className="lg:col-span-7 flex justify-center">
                        <div className="relative w-full max-w-[550px] aspect-[3/4] overflow-hidden bg-[var(--bone)] border border-[var(--hairline)] shadow-md select-none group">
                            <img
                                src={baseImg}
                                alt="Sunil Mehra — Shop the Look"
                                loading="lazy"
                                className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                            
                            {/* Hotspot Dots */}
                            {ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveItem(item)}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 z-20"
                                    style={{ top: item.coords.top, left: item.coords.left }}
                                    aria-label={`View ${item.name}`}
                                >
                                    <span className="relative flex h-6 w-6 items-center justify-center">
                                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70 transition-all duration-500 ${activeItem.id === item.id ? "scale-125 bg-[var(--bronze)]" : ""}`}></span>
                                        <span className={`relative inline-flex rounded-full h-4.5 w-4.5 items-center justify-center border shadow-lg transition-all duration-500 ${
                                            activeItem.id === item.id 
                                                ? "bg-[var(--bronze)] border-white scale-110" 
                                                : "bg-white/80 border-[var(--hairline-strong)] hover:bg-white hover:scale-105"
                                        }`}>
                                            <span className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${activeItem.id === item.id ? "bg-white" : "bg-[var(--ink)]"}`} />
                                        </span>
                                    </span>
                                </button>
                            ))}
                            <div className="grain" />
                        </div>
                    </div>

                    {/* Right Column: Dynamic Side Panel Details */}
                    <div className="lg:col-span-5 flex flex-col justify-center min-h-[300px] lg:min-h-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col h-full justify-between py-2"
                            >
                                <div className="space-y-6">
                                    {/* Category / Chapter */}
                                    <div>
                                        <span className="font-luxe text-[10px] tracking-[0.25em] text-[var(--bronze)] uppercase block mb-1">
                                            {activeItem.chapter}
                                        </span>
                                        <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)] leading-tight mb-2">
                                            {activeItem.name}
                                        </h3>
                                        <p className="font-italic-serif text-sm text-[var(--ink-soft)] italic">
                                            {activeItem.materials}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-12 h-px bg-[var(--hairline-strong)]" />

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light max-w-md">
                                        {activeItem.description}
                                    </p>
                                </div>

                                {/* Inquiry Button */}
                                <div className="mt-8 pt-6 border-t border-[var(--hairline)]">
                                    <a
                                        href={`https://ig.me/m/sunilmehraart?text=I'm%20inquiring%20about%20the%20${encodeURIComponent(activeItem.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[var(--ink)] text-[var(--bone)] hover:bg-[var(--bronze)] px-8 py-4 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block w-full text-center"
                                    >
                                        Inquire on Instagram
                                    </a>
                                    <p className="text-[10px] text-[var(--muted)] tracking-wider mt-2.5 text-center block">
                                        Redirects to direct message on @sunilmehraart
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
