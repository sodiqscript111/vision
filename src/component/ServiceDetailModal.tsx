import { type Service } from "../servicesData";
import Modal from "./ui/Modal";
import GlassCard from "./ui/GlassCard";
import { motion } from "framer-motion";

interface ServiceDetailModalProps {
    service: Service | null;
    isOpen: boolean;
    onClose: () => void;
}

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

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
    if (!service) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-5xl bg-slate-50">
            <div className="p-8 md:p-12">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">How It Works</h3>
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

                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Key Metrics</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {service.metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 font-display">{metric.value}</div>
                                    <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Implementation Process</h3>
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
                            <h4 className="text-blue-800 text-lg font-bold mb-4 font-display">Implementation Considerations</h4>
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
        </Modal>
    );
}
