import React from "react";

const SALONS = [
    { city: "Delhi", addr: "14 Sundar Nagar Market", note: "Flagship · Mon–Sat, by appointment" },
    { city: "Mumbai", addr: "1st Floor, Kala Ghoda", note: "Salon · Tue–Sun" },
    { city: "Bengaluru", addr: "Lavelle Road", note: "Salon · Wed–Sun" },
    { city: "Hyderabad", addr: "Banjara Hills", note: "Salon · By appointment" },
    { city: "London", addr: "29 Mount Street, Mayfair", note: "By Invitation" },
    { city: "Dubai", addr: "DIFC, Gate Village 4", note: "By Invitation" },
];

export default function Salons() {
    return (
        <section
            id="salons"
            className="relative bg-[var(--cream)] py-24 sm:py-32 px-6 sm:px-10 lg:px-14"
            data-testid="salons-section"
        >
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                    <p className="eyebrow mb-6">The Salons</p>
                    <h2 className="h-display text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.94] mb-8">
                        By <span className="font-italic-serif italic">invitation.</span>
                    </h2>
                    <p className="text-[var(--ink-soft)] leading-relaxed max-w-md mb-10">
                        Six salons across India and the world. Step inside for a
                        private consultation — espresso, fabric swatches, and the
                        quiet of the atelier.
                    </p>
                    <a href="#atelier" className="hairline-link" data-testid="salons-find">
                        Find a Salon <span aria-hidden>→</span>
                    </a>
                </div>

                <div className="border-t border-[var(--hairline-strong)]">
                    {SALONS.map((s) => (
                        <div
                            key={s.city}
                            className="border-b border-[var(--hairline-strong)] py-6 flex items-center justify-between group hover:px-4 transition-all duration-500"
                            data-testid={`salon-${s.city.toLowerCase()}`}
                        >
                            <div>
                                <p className="font-display text-3xl sm:text-4xl leading-none">
                                    {s.city}
                                </p>
                                <p className="font-italic-serif text-[var(--muted)] mt-2">
                                    {s.addr}
                                </p>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="font-luxe text-[11px] uppercase tracking-[0.3em] text-[var(--ink-soft)]">
                                    {s.note}
                                </p>
                                <span className="inline-block mt-2 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500 text-[var(--bronze)]">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
