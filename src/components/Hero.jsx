import React from "react";
import coverImg from "@/assets/images/cover.jpg";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5" data-testid="hero-section">
            {/* Boxed framed image container */}
            <div className="relative w-full h-full overflow-hidden bg-[var(--cream)]">
                {/* Fallback Image: Renders perfectly with object-fit: cover and object-position: center bottom */}
                <img
                    src={coverImg}
                    alt="Atelier — Sunil Mehra"
                    fetchpriority="high"
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
                    style={{ objectPosition: "center top" }}
                    data-testid="hero-video"
                />
                <div className="absolute inset-0 bg-[rgba(20,18,14,0.05)]" />
                <div className="grain" />
            </div>
        </section>
    );
}
