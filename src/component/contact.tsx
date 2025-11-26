"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, CheckCircle, Globe, Shield, Users, TrendingUp, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-slate-900/90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance font-display">
            Get Started Today
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your business with AI-powered solutions? Our team of experts is here to guide you through every step of implementation.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20 text-lg"
        >
          <a href="tel:+15551234567" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>+1 (555) 123-4567</span>
          </a>
          <a href="mailto:info@ai-business-intelligence.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <Mail className="w-5 h-5 text-blue-400" />
            <span>info@ai-business-intelligence.com</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a free discovery call</span>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* What Happens Next */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3 font-display"
            >
              <Clock className="w-7 h-7 text-blue-400" />
              What Happens Next?
            </motion.h3>
            <div className="space-y-6 relative">
              {/* Background Line (faint) */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-blue-900/30"></div>

              {/* Animated Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute left-[19px] top-4 w-0.5 bg-blue-500"
                style={{ maxHeight: "calc(100% - 2rem)" }}
              ></motion.div>

              {[
                { step: 1, title: "Discovery Call (30 minutes)", desc: "Understand your challenges and objectives" },
                { step: 2, title: "Assessment (1-2 weeks)", desc: "Evaluate your current operations and recommend solutions" },
                { step: 3, title: "Proposal (3-5 days)", desc: "Detailed plan with ROI projections and timeline" },
                { step: 4, title: "Pilot Program (4-8 weeks)", desc: "Proof-of-concept in controlled environment" },
                { step: 5, title: "Full Implementation", desc: "Scaled rollout with continuous support" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-6 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.5, duration: 0.3, type: "spring" }}
                    className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-900/20 border border-blue-500/50"
                  >
                    {item.step}
                  </motion.div>
                  <div className="pt-1">
                    <p className="font-bold text-lg mb-1">{item.title}</p>
                    <p className="text-blue-200/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm h-full"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-display">
                <Globe className="w-7 h-7 text-blue-400" />
                Industries We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  "Retail & E-commerce",
                  "Manufacturing & Industrial",
                  "Healthcare & Hospitals",
                  "Logistics & Distribution",
                  "Security & Surveillance",
                  "Hospitality & Entertainment",
                  "Education & Campuses",
                  "Government & Public Sector",
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-2 text-blue-100/80 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Partner With Us - Full Width Bottom */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-8"
          >
            <TrendingUp className="w-10 h-10 text-[#6b9bd1]" />
            <h3 className="text-4xl font-bold text-white font-display">Why Partner With Us?</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Proven Track Record", desc: "200+ successful implementations across 15 industries" },
              { icon: Users, title: "Expert Team", desc: "PhDs in computer vision, former Fortune 500 executives" },
              { icon: CheckCircle, title: "Technology Agnostic", desc: "We recommend best-fit solutions, not vendor lock-in" },
              { icon: Globe, title: "End-to-End Service", desc: "From strategy to implementation and ongoing support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, backgroundColor: "rgba(107, 155, 209, 0.1)" }}
                className="group relative flex items-start gap-4 p-8 rounded-2xl border border-[#6b9bd1]/20 bg-[#1e3a5f]/40 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 via-[#2d4a6f]/90 to-[#1e3a5f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6b9bd1]/20 border border-[#6b9bd1]/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#6b9bd1]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-[#b8c9e0] leading-relaxed text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "15", label: "Industries Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                className="relative p-8 rounded-2xl border border-[#6b9bd1]/20 bg-[#1e3a5f]/60 backdrop-blur-md text-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/60 via-[#4a90e2]/10 to-[#1e3a5f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[#6b9bd1] mb-2">{stat.value}</div>
                  <div className="text-base text-[#b8c9e0]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;