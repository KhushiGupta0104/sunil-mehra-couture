import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU = [
    { label: "Couture", hover: "the atelier", href: "#wardrobe" },
    { label: "The Wardrobe", hover: "six chapters", href: "#wardrobe" },
    { label: "Featured", hover: "new in", href: "#featured" },
    { label: "Lookbook", hover: "stories in cloth", href: "#editorial" },
    { label: "The House", hover: "since 1984", href: "#manifesto" },
    { label: "Salons", hover: "by invitation", href: "#salons" },
    { label: "Journal", hover: "from the desk", href: "#editorial" },
    { label: "Appointment", hover: "private fitting", href: "#atelier" },
];

const META = [
    { label: "Delhi · Flagship", sub: "14 Sundar Nagar" },
    { label: "Mumbai · Salon", sub: "Kala Ghoda" },
    { label: "London · By Appointment", sub: "Mount Street" },
];

export default function OverlayMenu({ open, onClose }) {
    useEffect(() => {
        document.body.classList.toggle("no-scroll", open);
        return () => document.body.classList.remove("no-scroll");
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="overlay"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.85, ease: [0.7, 0, 0.2, 1] }}
                    className="menu-overlay"
                    data-testid="overlay-menu"
                >
                    {/* LEFT — links */}
                    <div className="relative flex flex-col h-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-12 overflow-y-auto scrollbar-none">
                        <div className="flex items-center justify-between shrink-0 mb-6">
                            <span className="eyebrow !text-[var(--champagne)]">Index — Maison</span>
                            <span
                                className="hairline-link cursor-pointer !text-[var(--bone)] !border-[var(--bone)]"
                                onClick={onClose}
                                data-testid="overlay-menu-close"
                            >
                                Close
                                <span aria-hidden>×</span>
                            </span>
                        </div>

                        <nav className="my-auto flex flex-col gap-1 sm:gap-2 py-6 shrink-0">
                            {MENU.map((m, i) => (
                                <motion.a
                                    key={m.label}
                                    href={m.href}
                                    onClick={onClose}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.35 + i * 0.06,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="menu-link h-display text-[6.5vw] sm:text-[5vw] lg:text-[3.2vw] py-1"
                                    data-testid={`menu-link-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    <span className="menu-text">{m.label}</span>
                                    <span className="menu-text-hover">— {m.hover}</span>
                                </motion.a>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-[var(--hairline)] pt-6 shrink-0"
                        >
                            {META.map((m) => (
                                <div key={m.label} className="text-xs">
                                    <p className="font-luxe uppercase tracking-[0.22em] text-[var(--bone)]">
                                        {m.label}
                                    </p>
                                    <p className="text-[var(--champagne)] mt-1 font-italic-serif text-[15px]">
                                        {m.sub}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — visual */}
                    <motion.div
                        initial={{ scale: 1.08, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="panel-image bg-[var(--cream)]"
                    >
                        <img
                            src="https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/eof7etf1_image.png"
                            alt="Atelier — Sunil Mehra"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[rgba(20,18,14,0.18)]" />
                        <div className="absolute bottom-10 left-10 right-10 text-[var(--bone)]">
                            <p className="eyebrow !text-[var(--champagne)]">Couture 2025</p>
                            <p className="h-display text-3xl lg:text-5xl mt-3">
                                The Mirage Edit
                            </p>
                            <p className="font-italic-serif text-lg lg:text-xl mt-3 opacity-90">
                                Silk, linen and silver — hand-built by a single karigar.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
