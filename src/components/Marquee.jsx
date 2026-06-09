import React from "react";

const ITEMS = Array(2).fill([
    "Sunil Mehra",
    "Couture 2025",
    "Made by hand",
    "Est. 1984",
    "The Mirage Edit",
    "Hand-finished in Delhi",
]).flat();

export default function Marquee() {
    return (
        <div
            className="border-y border-[var(--hairline)] py-5 overflow-hidden bg-[var(--bone)]"
            data-testid="marquee-strip"
        >
            <div className="marquee-track">
                {[...ITEMS, ...ITEMS].map((t, i) => (
                    <span
                        key={i}
                        className="font-display text-2xl sm:text-3xl tracking-[0.08em] mx-8 flex items-center gap-8 text-[var(--ink)]"
                    >
                        {t}
                        <span className="text-[var(--bronze)]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
