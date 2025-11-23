"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, CheckCircle, Globe, Shield, Users, TrendingUp, HeadphonesIcon, Clock } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-display">
              <Clock className="w-7 h-7 text-blue-400" />
              What Happens Next?
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-blue-900/50"></div>
              {[
                { step: 1, title: "Discovery Call (30 minutes)", desc: "Understand your challenges and objectives" },
                { step: 2, title: "Assessment (1-2 weeks)", desc: "Evaluate your current operations and recommend solutions" },
                { step: 3, title: "Proposal (3-5 days)", desc: "Detailed plan with ROI projections and timeline" },
                { step: 4, title: "Pilot Program (4-8 weeks)", desc: "Proof-of-concept in controlled environment" },
                { step: 5, title: "Full Implementation", desc: "Scaled rollout with continuous support" },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  whileHover={{ x: 8 }}
                  className="flex gap-6 relative z-10"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-900/20 border border-blue-500/50">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-lg mb-1">{item.title}</p>
                    <p className="text-blue-200/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries & Why Partner */}
          <div className="space-y-12">
            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-display">
                <Globe className="w-7 h-7 text-blue-400" />
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
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
                  <div key={industry} className="flex items-center gap-2 text-blue-100/80">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Partner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-display">
                <TrendingUp className="w-7 h-7 text-blue-400" />
                Why Partner With Us?
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  { icon: Shield, text: "Proven Track Record: 200+ successful implementations across 15 industries" },
                  { icon: Users, text: "Expert Team: PhDs in computer vision, former Fortune 500 executives, certified AI specialists" },
                  { icon: CheckCircle, text: "Technology Agnostic: We recommend best-fit solutions, not vendor lock-in" },
                  { icon: Globe, text: "End-to-End Service: From strategy to implementation to ongoing optimization" },
                  { icon: TrendingUp, text: "ROI Guarantee: If we don't deliver projected results, we'll work for free until we do" },
                  { icon: HeadphonesIcon, text: "24/7 Support: Global support team available around the clock" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100/80 leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;