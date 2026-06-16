import React from "react";
import designerImg from "@/assets/images/sunil_mehra.jpg";

export default function Designer() {
    return (
        <section
            id="designer"
            className="relative bg-[var(--bone)] text-[var(--ink)] min-h-screen lg:h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-12 px-6 sm:px-10 lg:pb-5 lg:px-14 border-b border-[var(--hairline)] py-8 lg:py-0"
            data-testid="designer-section"
        >
            <div className="max-w-[1500px] mx-auto w-full flex-1 flex flex-col justify-center py-6 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Visual Column */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-[1.1/1] lg:aspect-auto lg:h-[60vh] overflow-hidden bg-[var(--cream)] border border-[var(--hairline)] shadow-sm">
                            <img
                                src={designerImg}
                                alt="Sunil Mehra — The Designer"
                                loading="lazy"
                                className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                            <div className="grain" />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <span className="eyebrow block mb-2">Maison — The Designer</span>
                        <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl font-light mb-1">
                            Sunil Mehra
                        </h2>
                        <h3 className="font-italic-serif text-lg sm:text-xl text-[var(--bronze)] mb-4">
                            Where Couture Meets Divinity
                        </h3>

                        <div className="space-y-4 text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed max-w-2xl font-light">
                            <p>
                                For over four decades, the Mehra family has been synonymous with timeless Indian couture. Building upon the celebrated legacy of Study by Janak, Sunil Mehra established his bespoke menswear atelier in New Delhi with a singular vision: to create garments that embody elegance, individuality, and meaning.
                            </p>
                            <p>
                                What distinguishes the House of Sunil Mehra is a philosophy rooted in devotion and craftsmanship. Inspired by the eternal love and harmony of Lord Krishna and Goddess Radha, every creation is designed with intention, balancing tradition with contemporary refinement.
                            </p>
                            <p>
                                From meticulously tailored bandhgalas and regal sherwanis to elevated occasion wear and refined accessories, each piece is crafted using exceptional fabrics sourced from around the world. Every garment reflects a commitment to quality, precision, and personal expression.
                            </p>
                            <p>
                                Today, alongside Karan Mehra, the next generation of the brand, Sunil Mehra continues to evolve this legacy for the modern gentleman while preserving the values that have defined it for decades.
                            </p>
                            <p className="font-italic-serif text-sm text-[var(--ink)] pt-3 border-t border-[var(--hairline)]">
                                More than a couture house, Sunil Mehra is a celebration of artistry, heritage, and individuality, where every thread tells a story.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
