import React from "react";
import coverImg from "@/assets/images/cover.jpg";

export default function Hero() {
    return (
        <section className="relative bg-[var(--bone)] text-[var(--ink)] h-screen w-full flex flex-col pt-[78px] sm:pt-[86px] lg:pt-[96px] pb-6 px-6 sm:pb-10 sm:px-10 lg:pb-14 lg:px-14" data-testid="hero-section">
            {/* Boxed framed image container */}
            <div className="relative w-full h-full overflow-hidden bg-[var(--cream)]">
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
        </section>
    );
}
