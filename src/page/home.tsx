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
      {/* 1. HERO - High impact, fast CTA */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        <AniComponent />
        <div className="absolute inset-0 z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-slate-900/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-10"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-5xl z-30 flex flex-col items-center">
         

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
            AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              Business Intelligence
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100/80 leading-relaxed max-w-3xl mx-auto text-balance font-light">
            Transform your business with cutting-edge computer vision, analytics, and smart automation solutions that drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <HoverBorderGradient containerClassName="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-2 py- text-lg shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              Get Started Now
            </HoverBorderGradient>
            <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      {/* 5. DETAILED SERVICES - For deeper interest */}
      <section className="py-1 sm:py-0 px-0 bg-white">
        <div className="max-w-6xl mx-auto">
          <ServicesPage />
        </div>
      </section>

      {/* 4. SOLUTIONS SHOWCASE - Interactive, engaging */}
      <section className="py-0 sm:py-0 px-0">
        <div className="max-w-9xl mx-auto">
          <AIBusinessCarousel />
        </div>
      </section>

      {/* 3. CORE BENEFITS - BENTO GRID LAYOUT */}
      {/* 3. CORE BENEFITS - BENTO GRID LAYOUT */}
      <section ref={ref} className="bg-white py-24 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Why Businesses Choose Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Proven results that drive real business value through intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {[
              {
                endValue: 40,
                isPercentage: true,
                title: "Cost Reduction",
                desc: "Save up to 40% on operational costs",
                span: "lg:col-span-2",
                gradient: "from-blue-50 to-white"
              },
              {
                endValue: 80,
                isPercentage: true,
                title: "Time Savings",
                desc: "Reduce manual tasks by 80%",
                span: "lg:col-span-2",
                gradient: "from-indigo-50 to-white"
              },
              { endValue: "✓", title: "Reduced Manpower", desc: "Optimize workforce allocation", span: "", gradient: "from-white to-white" },
              { endValue: 25, isPercentage: true, title: "Increased Revenue", desc: "Boost sales by 25%", span: "", gradient: "from-white to-white" },
              {
                endValue: 99,
                isPercentage: true,
                title: "Improved Accuracy",
                desc: "99% inventory accuracy",
                span: "",
                gradient: "from-white to-white"
              },
              { endValue: "∞", title: "Scalable Solutions", desc: "Scale across locations", span: "", gradient: "from-white to-white" },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${item.gradient} rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1 ${item.span}`}
              >
                <div className="text-5xl sm:text-6xl font-extrabold text-blue-600 mb-4 tracking-tighter">
                  <Counter endValue={item.endValue} isPercentage={item.isPercentage} isVisible={inView} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/5 rounded-tl-full -mr-4 -mb-4 transition-transform group-hover:scale-150 duration-500"></div>
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
      <section className="py-6 sm:py-10 px-4 bg-white ">
        <div className="max-w-4xl mx-auto">
          <FAQSection />
        </div>
      </section>

      {/* 8. FINAL CTA - Contact */}
      <section className="py-12 sm:py-0 px-4">
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  )
}

export default Home
