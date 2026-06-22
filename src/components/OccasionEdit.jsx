import React from "react";
import { Link } from "react-router-dom";

export default function OccasionEdit() {
    const OCCASIONS = [
        {
            id: "carnival",
            title: "Carnival",
            video: "/REEL 3 SM C2.mp4",
            link: "/wardrobe/kurta-sets",
        },
        {
            id: "sangeet",
            title: "Sangeet",
            video: "/REEL 7 SM C2.mp4",
            link: "/wardrobe/jawahar-jackets",
        },
        {
            id: "wedding",
            title: "Wedding",
            video: "/REEL 10 SM C2.mp4",
            link: "/wardrobe/bandhagala-indo-western",
        },
    ];

    return (
        <section
            id="occasion-edit"
            className="w-full flex flex-col bg-[var(--bone)]"
            data-testid="occasion-edit-section"
        >
            {/* Header section inspired by Jatin Malik Couture */}
            <div className="text-center py-14 sm:py-16 md:py-20 px-6 border-b border-[var(--hairline)]">
                <span className="font-luxe text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[var(--ink-soft)] block mb-3">
                    THE OCCASION EDIT
                </span>
                <h2 className="font-italic-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--ink)] italic font-light">
                    Where Every Occasion Finds Its Outfit
                </h2>
            </div>

            {/* Parallel columns layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full border-b border-[var(--hairline)] bg-black overflow-hidden">
                {OCCASIONS.map((occ) => (
                    <Link
                        key={occ.id}
                        to={occ.link}
                        className="group relative flex flex-col justify-end overflow-hidden h-[60vh] md:h-[80vh] lg:h-[85vh] border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-[var(--hairline-strong)]"
                        data-testid={`occasion-${occ.id}`}
                    >
                        {/* Video Layer */}
                        <div className="absolute inset-0 w-full h-full bg-[var(--cream)] overflow-hidden">
                            <video
                                src={occ.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                            />
                        </div>

                        {/* Overlay Gradient for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-black/65 group-hover:via-black/20" />

                        {/* Title text overlay at bottom */}
                        <div className="relative z-10 w-full text-center pb-12 sm:pb-16 flex flex-col items-center justify-center pointer-events-none">
                            <span className="font-luxe text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white relative pb-1 border-b border-white/60 group-hover:border-white transition-all duration-500">
                                {occ.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
