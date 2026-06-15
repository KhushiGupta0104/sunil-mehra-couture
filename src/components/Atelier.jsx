import React from "react";
import { Link } from "react-router-dom";

// Import local image
import img6602 from "@/assets/images/Sunil Mehra_6602.jpg";

export default function Atelier() {
    return (
        <section
            id="atelier"
            className="relative bg-[var(--cream)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5"
            data-testid="atelier-section"
        >
            <div className="max-w-[1500px] mx-auto w-full h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[65vh] overflow-hidden border border-[var(--hairline-strong)]">
                        <img
                            src={img6602}
                            alt="The Atelier"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[var(--bone)]">
                            <p className="eyebrow !text-[var(--champagne)]">The Atelier</p>
                            <p className="font-luxe text-[11px] tracking-[0.32em] uppercase">
                                Delhi Flagship
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="eyebrow mb-6">A single hand</p>
                        <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4vw] leading-[1.15] mb-5">
                            A single hand, <br />
                            <span className="font-italic-serif italic">from start to finish.</span>
                        </h2>

                        <div className="grid grid-cols-3 gap-6 border-y border-[var(--hairline-strong)] py-7 mb-5">
                            {[
                                { n: "08", l: "weeks" },
                                { n: "03", l: "fittings" },
                                { n: "28", l: "measurements" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <p className="font-display text-4xl sm:text-5xl text-[var(--ink)]">{s.n}</p>
                                    <p className="font-luxe text-[11px] tracking-[0.3em] uppercase text-[var(--muted)] mt-2">
                                        {s.l}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[var(--ink-soft)] leading-relaxed mb-5 max-w-lg">
                            Begin your private appointment with our Master Tailor in
                            Delhi — by invitation, always. We sketch
                            in your story; the karigar gives it form.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            <Link
                                to="/#request-form"
                                className="hairline-link"
                                data-testid="atelier-book"
                            >
                                Book Appointment <span aria-hidden>→</span>
                            </Link>
                            <Link
                                to="/#manifesto"
                                className="text-[11px] uppercase tracking-[0.32em] font-luxe text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
                                data-testid="atelier-house"
                            >
                                The House
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
