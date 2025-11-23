"use client";
import { Link } from "react-router-dom";
import { services } from "../servicesData";

export default function AllServices() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">


                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
                            Comprehensive <span className="text-blue-600">AI Solutions</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light text-balance">
                            Discover our full suite of cutting-edge AI solutions, empowering businesses with advanced analytics, automation, and intelligent systems for superior operational efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{service.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed relative z-10">{service.description}</p>

                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Key Advantages</h4>
                                    <ul className="space-y-3">
                                        {service.advantages.slice(0, 3).map((advantage, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                                <span>{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-blue-600 font-medium group/link">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
