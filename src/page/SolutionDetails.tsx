"use client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { solutions } from "../solutions";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SolutionDetails() {
    const { id } = useParams<{ id: string }>();
    const solution = solutions.find((s) => s.id === id);

    if (!solution) return <div>Solution not found</div>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="flex justify-between items-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900">{solution.title}</h2>
                    <Link
                        to="/solutions"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Back to Solutions
                    </Link>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-blue-600 text-2xl font-semibold mb-4">How It Works</h3>
                        <p className="text-gray-700 mb-4 leading-7">{solution.howItWorks.description}</p>
                        <ul className="space-y-2">
                            {solution.howItWorks.features.map((feature, index) => (
                                <li key={index} className="text-gray-700 leading-7">• {feature}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-blue-600 text-2xl font-semibold mb-4">Target Industries</h3>
                        <div className="flex flex-wrap gap-2">
                            {solution.targetIndustries.map((industry, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {industry}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-blue-600 text-2xl font-semibold mb-6">Key Metrics</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {solution.metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child} className="mb-12">
                        <h3 className="text-blue-600 text-2xl font-semibold mb-6">Implementation Process</h3>
                        <div className="space-y-6">
                            {solution.implementationSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">{step.title}</h4>
                                        <p className="text-gray-700 leading-7">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={child} className="p-6 bg-blue-50 border border-blue-100 rounded-lg">
                        <h4 className="text-blue-600 text-xl font-semibold mb-4">Implementation Considerations</h4>
                        <ul className="text-gray-700 space-y-2">
                            {solution.considerations.map((consideration, index) => (
                                <li key={index} className="leading-7">• {consideration}</li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
