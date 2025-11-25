"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { solutions } from "../solutions.ts"
import { ArrowRight } from "lucide-react"

export default function SolutionsSection() {
  // Filter out the "Medical Diagnostics" solution and keep the rest
  const displayedSolutions = solutions.filter(
    (solution) => !solution.title.includes("Medical Diagnostics")
  )

  return (
    <section className="relative py-7 px-4 overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/50 to-white z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light"
          >
            Comprehensive AI-powered solutions to transform your business operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {displayedSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 ${index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
            >
              {/* Image Background with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {solution.title.split(" - ")[1] || solution.title}
                  </h3>
                  <p className="text-blue-100/90 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {solution.description}
                  </p>

                  <Link
                    to={`/solutions/${solution.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold group/btn"
                  >
                    Learn more
                    <span className="bg-white/20 p-1.5 rounded-full group-hover/btn:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
