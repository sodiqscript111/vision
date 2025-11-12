"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import AniComponent from "../component/animationforheader.tsx"
import { HoverBorderGradient } from "../component/ui/hover-border-gradient.tsx"
import Contact from "../component/contact.tsx"
import AIBusinessCarousel from "../component/servicesCourasel.tsx"
import AIVisionBlog from "../component/blog.tsx"
import ServicesPage from "../component/services.tsx"
import { AnimatedTestimonials } from "../component/animated-testimonials.tsx"
import FAQSection from "../component/faq.tsx"

function Home() {
  const Counter: React.FC<{
    endValue: number | string
    duration?: number
    isPercentage?: boolean
    isVisible: boolean
  }> = ({ endValue, duration = 2000, isPercentage = false, isVisible }) => {
    const [count, setCount] = useState<number | string>(typeof endValue === "number" ? 0 : endValue)

    useEffect(() => {
      if (!isVisible) return
      if (typeof endValue !== "number") {
        setCount(endValue)
        return
      }
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const value = Math.floor(progress * endValue)
        setCount(value)
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(isPercentage ? `${endValue}%` : endValue)
        }
      }
      requestAnimationFrame(animate)
    }, [endValue, duration, isPercentage, isVisible])

    return <span>{count}</span>
  }

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
      <main className="relative font-inter">
        {/* 1. HERO - High impact, fast CTA */}
        <section className="relative h-[70vh] sm:h-screen bg-blue-900 overflow-hidden">
          <AniComponent />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/60 to-blue-900/40 z-10" />
            <div className="relative text-center text-white px-6 max-w-4xl z-30">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl">
                AI-Powered Business Intelligence
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed drop-shadow-lg">
                Transform your business with cutting-edge computer vision, analytics, and smart automation solutions
              </p>
              <HoverBorderGradient containerClassName="bg-white text-blue-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-xl">
                Get Started Now
              </HoverBorderGradient>
            </div>
          </div>
        </section>

        {/* 5. DETAILED SERVICES - For deeper interest */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ServicesPage />
          </div>
        </section>

        {/* 4. SOLUTIONS SHOWCASE - Interactive, engaging */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <AIBusinessCarousel />
          </div>
        </section>

        {/* 3. CORE BENEFITS - BENTO GRID LAYOUT */}
        <section ref={ref} className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Businesses Choose Us</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Proven results that drive real business value
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-max">
              {[
                {
                  endValue: 40,
                  isPercentage: true,
                  title: "Cost Reduction",
                  desc: "Save up to 40% on operational costs",
                  span: "lg:col-span-2",
                },
                {
                  endValue: 80,
                  isPercentage: true,
                  title: "Time Savings",
                  desc: "Reduce manual tasks by 80%",
                  span: "lg:col-span-2",
                },
                { endValue: "✓", title: "Reduced Manpower", desc: "Optimize workforce allocation", span: "" },
                { endValue: 25, isPercentage: true, title: "Increased Revenue", desc: "Boost sales by 25%", span: "" },
                {
                  endValue: 99,
                  isPercentage: true,
                  title: "Improved Accuracy",
                  desc: "99% inventory accuracy",
                  span: "",
                },
                { endValue: "∞", title: "Scalable Solutions", desc: "Scale across locations", span: "" },
              ].map((item, index) => (
                  <div
                      key={index}
                      className={`bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 text-center ${item.span}`}
                  >
                    <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
                      <Counter endValue={item.endValue} isPercentage={item.isPercentage} isVisible={inView} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SOCIAL PROOF - Build trust immediately */}
        <section className="bg-white py-12 sm:py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedTestimonials autoplay={true} />
          </div>
        </section>

        {/* 6. BLOG / INSIGHTS - Authority & SEO */}
        <section className="py-12 sm:py-16 px-4 bg-blue-200">
          <div className="max-w-7xl mx-auto">
            <AIVisionBlog />
          </div>
        </section>

        {/* 7. FAQ - Reduce friction */}
        <section className="py-6 sm:py-10 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </section>

        {/* 8. FINAL CTA - Contact */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
  )
}

export default Home
