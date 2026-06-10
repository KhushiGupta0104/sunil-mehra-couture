import React from "react";
import coverImg from "@/assets/images/cover.jpg";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] pt-[126px] sm:pt-[136px] pb-4 w-full" data-testid="hero-section">
            {/* Boxed image container */}
            <div className="px-6 sm:px-12 lg:px-20 pt-6">
                <div className="relative w-full aspect-[1.8/1] sm:aspect-[21/9] lg:h-[65vh] overflow-hidden bg-[var(--cream)]">
                    <video
                        src="/cover.mp4"
                        poster={coverImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 35%" }}
                        data-testid="hero-video"
                    />
                    <div className="absolute inset-0 bg-[rgba(20,18,14,0.05)]" />
                    <div className="grain" />
                </div>
            </div>
        </section>
    );
}
