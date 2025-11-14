"use client";
import { Link } from "react-router-dom";
import {type Service, services} from "../servicesData";

export default function ServicesPage() {
  const featuredServices: Service[] = services.slice(0, 3);

  return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                  <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-700">Advantages</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.advantages.map((advantage, index) => (
                            <li key={index}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
