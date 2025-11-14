"use client";
import { Link } from "react-router-dom";
import { services } from "../servicesData";

export default function AllServices() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our full suite of cutting-edge AI solutions, empowering businesses with advanced analytics, automation, and intelligent systems for superior operational efficiency.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="bg-gray-50 border-2 border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                </div>
            </section>
        </div>
    );
}
