"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The computer vision system has transformed our quality control. We've detected defects we never knew existed and prevented over $3M in potential recalls in the first year alone.",
    name: "Sarah Martinez",
    designation: "VP Operations, Automotive Manufacturing",
  },
  {
    quote: "RFID implementation was seamless. We achieved 98% inventory accuracy within 60 days and captured $890K in lost sales. The ROI exceeded projections by 40%.",
    name: "David Chen",
    designation: "CFO, Regional Grocery Chain",
  },
  {
    quote: "The centralized platform gives us visibility we never had. I manage 150 stores from my tablet and can identify issues before they become problems. Time savings alone justified the investment.",
    name: "Jennifer Williams",
    designation: "Director of Operations, Retail Chain",
  },
];

export const AnimatedTestimonials = ({
  autoplay = true,
}: {
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-900 mb-16">
          Client Testimonials
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Previous Testimonial (Background) */}
            <div className="hidden lg:block opacity-30 scale-95">
              <TestimonialCard testimonial={testimonials[(active - 1 + testimonials.length) % testimonials.length]} />
            </div>

            {/* Active Testimonial */}
            <div className="relative z-10 overflow-hidden min-h-[300px] flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <TestimonialCard testimonial={testimonials[active]} isActive />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Testimonial (Background) */}
            <div className="hidden lg:block opacity-30 scale-95">
              <TestimonialCard testimonial={testimonials[(active + 1) % testimonials.length]} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="group p-3 rounded-full bg-white shadow-lg border border-blue-100 hover:bg-blue-50 transition-all"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="w-5 h-5 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group p-3 rounded-full bg-white shadow-lg border border-blue-100 hover:bg-blue-50 transition-all"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-blue-600 w-8" : "bg-blue-200"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, isActive = false }: { testimonial: Testimonial; isActive?: boolean }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 ${isActive ? "border-blue-200 shadow-2xl" : "border-transparent"
        }`}
    >
      <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>
      <div>
        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
        <p className="text-sm text-blue-600 font-medium">{testimonial.designation}</p>
      </div>
    </div>
  );
};