import React from "react";

export default function Atelier() {
    return (
        <section
            id="atelier"
            className="relative bg-[var(--cream)] py-24 sm:py-32 px-6 sm:px-10 lg:px-14"
            data-testid="atelier-section"
        >
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src="https://customer-assets.emergentagent.com/job_mens-style-elite/artifacts/pz9985kj_image.png"
                        alt="The Atelier"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[var(--bone)]">
                        <p className="eyebrow !text-[var(--champagne)]">The Atelier</p>
                        <p className="font-luxe text-[11px] tracking-[0.32em] uppercase">
                            Delhi · Mumbai · London
                        </p>
                    </div>
                </div>

                <div>
                    <p className="eyebrow mb-6">A single hand</p>
                    <h2 className="h-display text-[9vw] sm:text-[6vw] lg:text-[4.4vw] leading-[0.96] mb-8">
                        A single hand, <br />
                        <span className="font-italic-serif italic">from start to finish.</span>
                    </h2>

                    <div className="grid grid-cols-3 gap-6 border-y border-[var(--hairline-strong)] py-7 mb-8">
                        {[
                            { n: "08", l: "weeks" },
                            { n: "03", l: "fittings" },
                            { n: "28", l: "measurements" },
                        ].map((s) => (
                            <div key={s.l}>
                                <p className="font-display text-4xl sm:text-5xl">{s.n}</p>
                                <p className="font-luxe text-[11px] tracking-[0.3em] uppercase text-[var(--muted)] mt-2">
                                    {s.l}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[var(--ink-soft)] leading-relaxed mb-8 max-w-lg">
                        Begin your private appointment with our Master Tailor in
                        Delhi, Mumbai or London — by invitation, always. We sketch
                        in your story; the karigar gives it form.
                    </p>

                    <div className="flex flex-wrap items-center gap-8">
                        <a
                            href="#atelier"
                            className="hairline-link"
                            data-testid="atelier-book"
                        >
                            Book Appointment <span aria-hidden>→</span>
                        </a>
                        <a
                            href="#manifesto"
                            className="text-[11px] uppercase tracking-[0.32em] font-luxe text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
                            data-testid="atelier-house"
                        >
                            The House
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
