// src/page/ServiceDetail.tsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../servicesData";
import PageHeader from "../component/ui/PageHeader";
import GlassCard from "../component/ui/GlassCard";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);

    if (!service) return <div className="min-h-screen flex items-center justify-center">Service not found</div>;

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title={service.title}
                subtitle={service.description}
                backLink="/services"
                backText="Back to Services"
                badge="Service Detail"
            />

            <div className="max-w-5xl mx-auto px-6 py-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={child} className="mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">How It Works</h3>
                        <GlassCard title="Methodology" className="bg-white/80">
                            <p className="text-slate-600 mb-6 leading-relaxed">{service.howItWorks.description}</p>
                            <ul className="space-y-3">
                                {service.howItWorks.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>

                    <motion.div variants={child} className="mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Key Metrics</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {service.metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-3xl font-bold text-blue-600 mb-2 font-display">{metric.value}</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{metric.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child} className="mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Implementation Process</h3>
                        <div className="space-y-4">
                            {service.implementationSteps.map((step, index) => (
                                <GlassCard key={index} title={step.title} className="hover:border-blue-200">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                                            {step.number}
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child}>
                        <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl">
                            <h4 className="text-blue-800 text-xl font-bold mb-6 font-display">Implementation Considerations</h4>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {service.considerations.map((consideration, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                        <span>{consideration}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
