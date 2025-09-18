"use client"

import { useState, useEffect } from "react"
// Import images from assets
import healthcareImage from "../assets/medical-ai-technology-with-stethoscope-and-digital.jpg"
import retailImage from "../assets/futuristic-retail-store-with-ai-powered-smart-chec.jpg"
import securityImage from "../assets/advanced-security-camera-with-ai-computer-vision-t.jpg"
import vehiclesImage from "../assets/self-driving-car-with-ai-sensors-and-computer-visi.jpg"
import socialMediaImage from "../assets/social-media-ai-with-face-recognition-and-content-.jpg"

const industries = [
    {
        id: 1,
        name: "Healthcare",
        tagline: "AI-powered medical diagnostics",
        image: healthcareImage,
    },
    {
        id: 2,
        name: "Retail",
        tagline: "Smart checkout automation",
        image: retailImage,
    },
    {
        id: 3,
        name: "Security",
        tagline: "Intelligent surveillance systems",
        image: securityImage,
    },
    {
        id: 4,
        name: "Autonomous Vehicles",
        tagline: "Vision-powered navigation",
        image: vehiclesImage,
    },
    {
        id: 5,
        name: "Social Media",
        tagline: "Content intelligence platform",
        image: socialMediaImage,
    },
]

export default function AIBusinessCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === industries.length - 1 ? 0 : prevIndex + 1))
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-blue-900 py-6 px-8 rounded-lg inline-block">
                    AI Solutions for Target Industries
                </h1>
                <p className="text-xl text-blue-900 text-pretty max-w-3xl mx-auto mt-6">
                    Empowering industries with tailored AI services in computer vision, analytics, and automation
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden rounded-xl">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-4"
                        style={{
                            transform: `translateX(-${currentIndex * 33.33}%)`,
                        }}
                    >
                        {[...industries, ...industries].map((industry, index) => (
                            <div key={`${industry.id}-${index}`} className="w-1/3 flex-shrink-0 px-2">
                                <div className="relative h-96 overflow-hidden group cursor-pointer bg-slate-800 rounded-lg shadow-lg">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-slate-800"
                                        style={{ backgroundImage: `url(${industry.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                                    </div>
                                    <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                                        <h3 className="text-2xl font-bold mb-2 text-balance drop-shadow-lg">{industry.tagline}</h3>
                                        <p className="text-lg font-medium opacity-90 drop-shadow-md">{industry.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {industries.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentIndex ? "bg-blue-900 scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
