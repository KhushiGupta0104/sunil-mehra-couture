import React from "react";

const SALONS = [
    { city: "Delhi", addr: "14 Sundar Nagar Market, New Delhi", note: "Flagship · Mon–Sat, by appointment", bold: true },
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
            className="relative bg-[var(--cream)] py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20"
            data-testid="salons-section"
        >
            <div className="max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <p className="eyebrow mb-6">The Salons</p>
                        <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4.4vw] leading-[1.15] mb-8">
                            By <span className="font-italic-serif italic">invitation.</span>
                        </h2>
                        <p className="text-[var(--ink-soft)] leading-relaxed max-w-md mb-10">
                            Six salons across India and the world. Step inside for a
                            private consultation — espresso, fabric swatches, and the
                            quiet of the atelier.
                        </p>
                        <a href="#request-form" className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-8 py-3.5 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block mb-4">
                            Request Appointment
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
                                    <p className={[
                                        "font-italic-serif text-[var(--muted)] mt-2",
                                        s.bold ? "font-semibold !text-[var(--ink-soft)]" : ""
                                    ].join(" ")}>
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

                {/* ============ CONTACT FORM SUBSECTION ============ */}
                <div id="request-form" className="mt-24 pt-16 border-t border-[var(--hairline-strong)] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h3 className="font-display text-3.5xl mb-4 text-[var(--ink)]">
                            Request an Appointment
                        </h3>
                        <p className="text-[var(--ink-soft)] leading-relaxed mb-6 max-w-md">
                            Submit your details below, and our salon concierge will contact you within 24 hours to schedule your private fitting.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="font-luxe text-[10px] uppercase tracking-wider mb-2 text-[var(--muted)]">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        className="bg-transparent border-b border-[var(--hairline-strong)] py-2 focus:border-[var(--ink)] outline-none font-body text-sm" 
                                        placeholder="Your Name" 
                                        required 
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-luxe text-[10px] uppercase tracking-wider mb-2 text-[var(--muted)]">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        className="bg-transparent border-b border-[var(--hairline-strong)] py-2 focus:border-[var(--ink)] outline-none font-body text-sm" 
                                        placeholder="Your Email" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-luxe text-[10px] uppercase tracking-wider mb-2 text-[var(--muted)]">
                                    Message / Preferred Salon
                                </label>
                                <textarea 
                                    rows="3" 
                                    className="bg-transparent border-b border-[var(--hairline-strong)] py-2 focus:border-[var(--ink)] outline-none font-body text-sm resize-none" 
                                    placeholder="Let us know your preferred date and salon location..." 
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-8 py-3.5 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 self-start"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
