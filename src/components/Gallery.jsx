import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import faisalImg from "@/assets/images/faisal_sheikh.png";
import shaanImg from "@/assets/images/shaan_mukherji.png";
import shantanuImg from "@/assets/images/shantanu_maheshwari.png";
import ammyImg from "@/assets/images/ammy_virk.png";
import shreyasImg from "@/assets/images/shreyas_talpade.png";

const CELEBRITIES = [
    {
        id: 1,
        src: faisalImg,
        celebrity: "Faisal Sheikh",
        tag: "@mr_faisu_07",
        caption: "Spotted in custom Sunil Mehra cream pinstriped double-breasted suit with a striking fuchsia silk shirt.",
        occasion: "Influencer & Actor",
        instagramUrl: "https://www.instagram.com/mr_faisu_07/",
    },
    {
        id: 2,
        src: shaanImg,
        celebrity: "Shaan Mukherji",
        tag: "@shaanmusic",
        caption: "Exuding classic charm in a bespoke pastel pink embroidered suit paired with a crisp white tee.",
        occasion: "Singer & Composer",
        instagramUrl: "https://www.instagram.com/shaanmusic/",
    },
    {
        id: 3,
        src: shantanuImg,
        celebrity: "Shantanu Maheshwari",
        tag: "@shantanu.maheshwari",
        caption: "Stylishly relaxed in a custom lavender suit set paired with signature high-top sneakers.",
        occasion: "Actor & Dancer",
        instagramUrl: "https://www.instagram.com/shantanu.maheshwari/",
    },
    {
        id: 4,
        src: ammyImg,
        celebrity: "Ammy Virk",
        tag: "@ammyvirk",
        caption: "Looking sharp in a custom snakeskin textured blazer with contrast black lapels and a matching magenta turban.",
        occasion: "Singer & Actor",
        instagramUrl: "https://www.instagram.com/ammyvirk/",
    },
    {
        id: 5,
        src: shreyasImg,
        celebrity: "Shreyas Talpade",
        tag: "@shreyastalpade27",
        caption: "Seated in a custom black bandhgala suit embellished with delicate, colorful floral motifs.",
        occasion: "Actor & Filmmaker",
        instagramUrl: "https://www.instagram.com/shreyastalpade27/",
    },
];

export default function Gallery() {
    const [selectedCeleb, setSelectedCeleb] = useState(null);

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = CELEBRITIES.findIndex((c) => c.id === selectedCeleb.id);
        const prevIndex = (currentIndex - 1 + CELEBRITIES.length) % CELEBRITIES.length;
        setSelectedCeleb(CELEBRITIES[prevIndex]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = CELEBRITIES.findIndex((c) => c.id === selectedCeleb.id);
        const nextIndex = (currentIndex + 1) % CELEBRITIES.length;
        setSelectedCeleb(CELEBRITIES[nextIndex]);
    };

    return (
        <section
            id="gallery"
            className="relative bg-[var(--bone)] text-[var(--ink)] min-h-screen lg:h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-12 px-6 sm:px-10 lg:pb-5 lg:px-14 border-b border-[var(--hairline)] py-8 lg:py-0"
            data-testid="gallery-section"
        >
            <div className="max-w-[1500px] mx-auto w-full flex-1 flex flex-col justify-between py-6 lg:py-0">
                
                {/* Header */}
                <div className="mb-4 sm:mb-5 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <div>
                        <span className="eyebrow block mb-2">Maison — Spotlight</span>
                        <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl font-light">
                            Spotted In <span className="font-italic-serif">Sunil Mehra</span>
                        </h2>
                    </div>
                </div>

                {/* Grid (Flex-1 to fit viewport perfectly, 5 columns on desktop) */}
                <div className="flex-1 min-h-0 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 lg:gap-5">
                    {CELEBRITIES.map((celeb) => (
                        <div 
                            key={celeb.id}
                            className="group cursor-pointer flex flex-col w-full h-full relative"
                            onClick={() => setSelectedCeleb(celeb)}
                        >
                            {/* Image Box */}
                             <div className="relative aspect-[3/4] sm:aspect-auto sm:flex-1 sm:min-h-0 overflow-hidden bg-[var(--cream)] border border-[var(--hairline)]">
                                <img
                                    src={celeb.src}
                                    alt={`${celeb.celebrity} in Sunil Mehra`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                />
                                
                                {/* Instagram Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-2 text-white">
                                        <svg className="w-6 h-6 text-white stroke-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className="font-luxe text-[8px] uppercase tracking-[0.25em]">
                                            View Style Details
                                        </span>
                                    </div>
                                </div>

                                <span className="absolute top-4 left-4 bg-[var(--ink)] text-[var(--champagne)] font-luxe text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
                                    {celeb.tag}
                                </span>
                            </div>
                            
                            {/* Metadata */}
                            <div className="mt-3 flex justify-between items-start gap-4 shrink-0">
                                <div>
                                    <h3 className="font-luxe text-xs uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">
                                        {celeb.celebrity}
                                    </h3>
                                    <p className="font-italic-serif text-sm text-[var(--muted)] mt-0.5">
                                        {celeb.occasion}
                                    </p>
                                </div>
                                <span className="font-italic-serif text-xs opacity-50 mt-1">
                                    0{celeb.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCeleb && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCeleb(null)}
                        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-6 sm:p-10"
                    >
                        {/* Lightbox Top */}
                        <div className="flex justify-between items-center w-full shrink-0">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                                SPOTLIGHT — 0{selectedCeleb.id} of 0{CELEBRITIES.length}
                            </span>
                            <button
                                onClick={() => setSelectedCeleb(null)}
                                className="font-luxe text-[10px] uppercase tracking-[0.3em] text-white hover:text-[var(--champagne)] border border-white/20 hover:border-[var(--champagne)] px-6 py-3 transition duration-300"
                            >
                                Close <span aria-hidden>×</span>
                            </button>
                        </div>

                        {/* Lightbox Middle */}
                        <div className="relative flex items-center justify-center grow my-6 max-h-[75vh]">
                            {/* Prev Button */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 sm:left-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Previous image"
                            >
                                ❮
                            </button>

                            {/* Image wrapper */}
                            <motion.div
                                key={selectedCeleb.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-w-full max-h-full aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src={selectedCeleb.src}
                                    alt={`${selectedCeleb.celebrity} in Sunil Mehra`}
                                    className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain mx-auto shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            {/* Next Button */}
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
                                {selectedCeleb.celebrity} — {selectedCeleb.occasion}
                            </span>
                            <p className="font-display text-white text-lg sm:text-xl lg:text-2xl mt-3 px-4">
                                {selectedCeleb.caption}
                            </p>
                            
                            <a
                                href={selectedCeleb.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-[var(--champagne)] text-white hover:text-[var(--ink)] font-luxe text-[9px] uppercase tracking-[0.25em] px-6 py-3 border border-white/10 hover:border-transparent transition-all duration-300"
                            >
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                                </svg>
                                View on Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
