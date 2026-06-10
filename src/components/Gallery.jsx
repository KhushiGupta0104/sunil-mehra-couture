import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/images/Sunil Mehra  0019.jpg";
import img2 from "@/assets/images/Sunil Mehra  0246.jpg";
import img3 from "@/assets/images/Sunil Mehra  0493.jpg";
import img4 from "@/assets/images/Sunil Mehra  0553.jpg";
import img5 from "@/assets/images/Sunil Mehra  0966.jpg";
import img6 from "@/assets/images/Sunil Mehra_0039.jpg";

const IMAGES = [
    { id: 1, src: img1, caption: "Heritage Kurta with Delicate Handcrafted Motifs", tag: "Couture" },
    { id: 2, src: img2, caption: "Classic Cream Sherwani with Zardozi Embroidery", tag: "Atelier" },
    { id: 3, src: img3, caption: "Intricate Pastel Floral Threadwork Detailing", tag: "Bridal" },
    { id: 4, src: img4, caption: "Signature Nehru Jacket with Hand-Sewn Accents", tag: "Formal" },
    { id: 5, src: img5, caption: "Raw Silk Kurta paired with Premium Drape Stole", tag: "Mirage" },
    { id: 6, src: img6, caption: "Contemporary Indo-Western Silhouette with Modern Cut", tag: "Fusion" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = IMAGES.findIndex((img) => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
        setSelectedImage(IMAGES[prevIndex]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = IMAGES.findIndex((img) => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % IMAGES.length;
        setSelectedImage(IMAGES[nextIndex]);
    };

    return (
        <section id="gallery" className="bg-[var(--bone)] text-[var(--ink)] py-16 sm:py-20 lg:py-24 border-b border-[var(--hairline)]" data-testid="gallery-section">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
                
                {/* Header */}
                <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="eyebrow block mb-3">Maison — Gallery</span>
                        <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl font-light">
                            Visual Stories in <span className="font-italic-serif">Cloth & Art</span>
                        </h2>
                    </div>
                    <p className="text-[var(--muted)] font-italic-serif text-lg max-w-sm">
                        A curation of hand-built couture, highlighting the mastery of craft, alignment, and karigari.
                    </p>
                </div>

                {/* Editorial Offset Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {IMAGES.map((img, index) => (
                        <div 
                            key={img.id}
                            className={`group cursor-pointer flex flex-col ${
                                index % 3 === 1 ? "lg:translate-y-8" : index % 3 === 2 ? "lg:translate-y-16" : ""
                            }`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream)] border border-[var(--hairline)]">
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="absolute top-4 left-4 bg-[var(--ink)] text-[var(--champagne)] font-luxe text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
                                    {img.tag}
                                </span>
                            </div>
                            
                            <div className="mt-4 flex justify-between items-start gap-4">
                                <p className="font-luxe text-xs uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">
                                    {img.caption}
                                </p>
                                <span className="font-italic-serif text-sm opacity-50">
                                    0{img.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid Spacer for offset elements */}
                <div className="hidden lg:block h-16" />
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-6 sm:p-10"
                    >
                        {/* Lightbox Top */}
                        <div className="flex justify-between items-center w-full shrink-0">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                                Gallery — 0{selectedImage.id} of 0{IMAGES.length}
                            </span>
                            <button
                                onClick={() => setSelectedImage(null)}
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
                                key={selectedImage.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-w-full max-h-full aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.caption}
                                    className="max-w-full max-h-[70vh] object-contain mx-auto shadow-2xl"
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
                        <div className="text-center shrink-0 max-w-xl mx-auto">
                            <span className="bg-[var(--bronze)] text-[var(--bone)] font-luxe text-[8px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                                {selectedImage.tag}
                            </span>
                            <p className="font-display text-white text-lg sm:text-xl lg:text-2xl mt-4">
                                {selectedImage.caption}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
