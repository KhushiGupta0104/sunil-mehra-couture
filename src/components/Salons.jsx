import React from "react";

export default function Salons() {
    return (
        <>
            {/* FRAME 1: The Salons (Delhi Flagship card) */}
            <section
                id="salons"
                className="relative bg-[var(--cream)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5 border-b border-[var(--hairline)]"
                data-testid="salons-section"
            >
                <div className="max-w-[1150px] mx-auto w-full h-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <p className="eyebrow mb-5">The Salons</p>
                            <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4vw] leading-[1.15] mb-4">
                                By <span className="font-italic-serif italic">invitation.</span>
                            </h2>
                            <p className="text-[var(--ink-soft)] leading-relaxed max-w-md mb-6 text-sm">
                                Step inside our flagship salon in Sundar Nagar for a private consultation — espresso, fabric swatches, and the quiet of the atelier.
                            </p>
                            <a
                                href="#request-form"
                                className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-8 py-3.5 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block"
                            >
                                Request Appointment
                            </a>
                        </div>

                        {/* Single flagship salon card */}
                        <div className="border border-[var(--hairline-strong)] p-8 sm:p-10 bg-[var(--bone)] flex flex-col justify-between group hover:shadow-md transition-all duration-500 rounded-sm">
                            <div>
                                <span className="eyebrow !text-[var(--bronze)] mb-4">Flagship Salon</span>
                                <p className="font-display text-3xl sm:text-4xl leading-none text-[var(--ink)] mt-2">
                                    New Delhi
                                </p>
                                <p className="font-italic-serif text-base sm:text-lg text-[var(--ink-soft)] mt-4 leading-relaxed">
                                    14 Sundar Nagar Market,<br />
                                    New Delhi, 110003, India
                                </p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-[var(--hairline)]">
                                <p className="font-luxe text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                                    Hours & Access
                                </p>
                                <p className="text-xs text-[var(--ink-soft)] mt-2 font-body tracking-wide">
                                    Mon–Sat · 11:00 AM – 7:30 PM
                                </p>
                                <p className="text-xs text-[var(--bronze)] mt-1 font-italic-serif">
                                    Strictly by invitation or private appointment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FRAME 2: Request Form (Private Fitting) */}
            <section
                id="request-form"
                className="relative bg-[var(--bone)] h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px] pb-4 px-4 sm:pb-4 sm:px-4 lg:pb-5 lg:px-5 border-t border-[var(--hairline)]"
                data-testid="request-form-section"
            >
                <div className="max-w-[1150px] mx-auto w-full h-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <p className="eyebrow mb-5">Private Fitting</p>
                            <h2 className="h-display text-[8vw] sm:text-[6vw] lg:text-[4vw] leading-[1.15] mb-4">
                                Request an <span className="font-italic-serif italic">appointment.</span>
                            </h2>
                            <p className="text-[var(--ink-soft)] leading-relaxed mb-4 max-w-md text-sm">
                                Submit your details below, and our salon concierge will contact you within 24 hours to schedule your private fitting.
                            </p>
                            <div className="mt-6 pt-6 border-t border-[var(--hairline)] max-w-md">
                                <p className="font-luxe text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] mb-3">
                                    Correspondence
                                </p>
                                <p className="text-xs sm:text-sm font-body text-[var(--ink-soft)]">
                                    T: +91 11 4150 1484<br />
                                    E: atelier@sunilmehra.com
                                </p>
                            </div>
                        </div>

                        <div>
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
                                        Message / Preferred Fitting Time
                                    </label>
                                    <textarea 
                                        rows="3" 
                                        className="bg-transparent border-b border-[var(--hairline-strong)] py-2 focus:border-[var(--ink)] outline-none font-body text-sm resize-none" 
                                        placeholder="Let us know your preferred date and time for the fitting..." 
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
        </>
    );
}
