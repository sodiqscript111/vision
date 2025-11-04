import ariks from "../assets/arik.png"
import virgin from "../assets/virgin.svg"
import prince from "../assets/prince.png"
import justrite from "../assets/justrite.png"
import spar from "../assets/spar.png"


const logos = [
    { img: ariks, label: "Ariks Airway" },
    { img: virgin, label: "Virgin Airway" },
    { img: prince, label: "Price Ebeano" },
    { img: justrite, label: "Justright" },
    { img: spar, label: "Spar" },
]

export function LovedBySection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-[#0153cf] py-6 px-8 rounded-lg inline-block">
                        Loved By
                    </h1>

                    <p className="text-[#0153cf] max-w-2xl mx-auto">
                        Trusted by leading companies across various industries worldwide
                    </p>
                </div>

                {/* Infinite Logo Slider */}
                <div className="overflow-hidden">
                    <div className="flex animate-slide">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center px-4"
                                style={{ minWidth: '150px' }}
                            >
                                <img
                                    src={logo.img}
                                    alt={logo.label}
                                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for Infinite Slider Animation */}
            <style>{`
                .animate-slide {
                    display: flex;
                    animation: slide 20s linear infinite;
                }

                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                /* Pause animation on hover */
                .animate-slide:hover {
                    animation-play-state: paused;
                }

                /* Responsive adjustments */
                @media (max-width: 640px) {
                    .animate-slide {
                        animation-duration: 15s; /* Faster on smaller screens */
                    }
                }
            `}</style>
        </section>
    )
}
