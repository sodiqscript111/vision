// src/SolutionsSection.tsx
"use client" // Keep if this is Next.js; remove if plain React
import { Link } from 'react-router-dom';
import { solutions } from '../solutions.ts';

export default function SolutionsSection() {
  const featuredSolutions = solutions.slice(0, 3);

  return (
      <div className="w-full">
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
                Our Solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredSolutions.map((solution) => (
                  <div
                      key={solution.id}
                      className="bg-white border-2 border-blue-200 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Card Title */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 leading-tight">
                        {solution.title.split(" - ")[1] || solution.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">{solution.description}</p>
                    </div>

                    {/* Read More Link (navigates to details) */}
                    <Link
                        to={`/solutions/${solution.id}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-center"
                    >
                      Read More
                    </Link>
                  </div>
              ))}
            </div>

            {/* Explore Button */}
            <div className="text-center mt-12">
              <Link
                  to="/solutions"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Explore All Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
