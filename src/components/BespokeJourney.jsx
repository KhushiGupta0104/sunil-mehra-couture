import React from "react";

const STEPS = [
    {
        no: "01",
        title: "Private Consultation",
        description: "Your journey begins with a virtual or in-person session at our Sundar Nagar flagship salon. We discuss your event requirements, aesthetic preferences, and style silhouette while browsing through premium fabric swatches.",
        details: "espresso & private fitting suite · 60 minutes"
    },
    {
        no: "02",
        title: "Design & Drapery",
        description: "We select exceptional fabrics sourced globally—raw silk, cashmeres, or fine linens—and draft custom sketches of your garment. A trial muslin (toile) is built to establish the initial contours and drape.",
        details: "hand-drawn illustrations & test fittings"
    },
    {
        no: "03",
        title: "Master Handcrafting",
        description: "The approved design is assigned to a single master karigar. Every thread, bead, and embroidery stitch is done strictly by hand, using centuries-old Indian methods like zardozi, aari, and dabka.",
        details: "40–80 hours of meticulous hand-embroidery"
    },
    {
        no: "04",
        title: "Fitting & Delivery",
        description: "A final fitting is scheduled to make micro-adjustments to the drape. Once perfected, your custom couture garment is steam-pressed and packaged in our signature garment casing, ready for your milestone day.",
        details: "final adjustment & luxury packaging"
    }
];

export default function BespokeJourney() {
    return (
        <section
            id="bespoke-journey"
            className="w-full bg-[var(--bone)] pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-[var(--hairline)]"
            data-testid="bespoke-journey-section"
        >
            <div className="max-w-[1500px] mx-auto w-full px-6 sm:px-10 lg:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-[140px] lg:self-start space-y-6">
                        <span className="font-luxe text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[var(--bronze)] block">
                            THE BESPOKE EXPERIENCE
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.05em] text-[var(--ink)] leading-[1.1]">
                            A Journey in <br />
                            <span className="font-italic-serif italic capitalize">Craftsmanship.</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed max-w-md font-light">
                            At Sunil Mehra, couture is not merely about fashion; it is a process of devotion, legacy, and precision. We balance historical craftsmanship with modern cuts to create garments that belong solely to you.
                        </p>
                        
                        <div className="pt-4">
                            <a
                                href="#request-form"
                                className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-8 py-4 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className="lg:col-span-7 space-y-12 lg:space-y-16">
                        {STEPS.map((step, idx) => (
                            <div 
                                key={step.no} 
                                className="group flex gap-6 sm:gap-10 pb-8 border-b border-[var(--hairline)] last:border-b-0 last:pb-0"
                            >
                                {/* Step Number */}
                                <div className="font-display text-2xl sm:text-3xl text-[var(--bronze)] opacity-70 group-hover:opacity-100 transition-opacity duration-300 select-none">
                                    {step.no}
                                </div>
                                
                                {/* Step Info */}
                                <div className="space-y-3">
                                    <h3 className="font-luxe text-base sm:text-lg uppercase tracking-wider text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--bronze)]">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                    <p className="font-italic-serif text-xs text-[var(--muted)] italic pt-1">
                                        — {step.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
