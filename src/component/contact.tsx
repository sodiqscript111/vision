import React from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
    return (
        <section className="bg-blue-700 py-16 px-6">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Contact Us
                </motion.h2>

                <motion.form
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {/* Row: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-white mb-2"
                            >
                                Full Name
                            </label>
                            <motion.input
                                whileFocus={{ borderColor: "#fff", scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-blue-600 border border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white rounded-none transition-all"
                                placeholder="Enter your full name"
                            />
                        </motion.div>

                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-white mb-2"
                            >
                                Email Address
                            </label>
                            <motion.input
                                whileFocus={{ borderColor: "#fff", scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-blue-600 border border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white rounded-none transition-all"
                                placeholder="Enter your email address"
                            />
                        </motion.div>
                    </div>

                    {/* Company */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <label
                            htmlFor="company"
                            className="block text-sm font-semibold text-white mb-2"
                        >
                            Company Name
                        </label>
                        <motion.input
                            whileFocus={{ borderColor: "#fff", scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 bg-blue-600 border border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white rounded-none transition-all"
                            placeholder="Enter your company name"
                        />
                    </motion.div>

                    {/* Requirements */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <label
                            htmlFor="requirements"
                            className="block text-sm font-semibold text-white mb-2"
                        >
                            Requirements
                        </label>
                        <motion.textarea
                            whileFocus={{ borderColor: "#fff", scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            id="requirements"
                            name="requirements"
                            rows={4}
                            className="w-full px-4 py-3 bg-blue-600 border border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white rounded-none resize-none transition-all"
                            placeholder="Tell us about your specific requirements..."
                        ></motion.textarea>
                    </motion.div>

                    {/* Submit */}
                    <div className="text-center pt-4">
                        <motion.button
                            type="submit"
                            className="bg-white text-blue-700 font-bold py-4 px-12 rounded-none shadow hover:shadow-lg text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            Request Consultation
                        </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
