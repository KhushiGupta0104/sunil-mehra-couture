import React from "react";
import coverImg from "@/assets/images/cover.jpg";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] pt-[126px] sm:pt-[136px] pb-0 w-full" data-testid="hero-section">
            {/* Full width image container */}
            <div className="px-0 pt-0">
                <div className="relative w-full h-[calc(100vh-126px)] sm:h-[calc(100vh-136px)] overflow-hidden bg-[var(--cream)]">
                    {/* Fallback Image: Renders perfectly with object-fit: cover and object-position: center bottom */}
                    <img
                        src={coverImg}
                        alt="Atelier — Sunil Mehra"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: "center bottom" }}
                    />
                    {/* Autoplaying Video: Sits on top and covers the image once loaded/played */}
                    <video
                        src="/cover.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: "center bottom" }}
                        data-testid="hero-video"
                    />
                    <div className="absolute inset-0 bg-[rgba(20,18,14,0.05)]" />
                    <div className="grain" />
                </div>
            </div>
        </section>
    );
}
