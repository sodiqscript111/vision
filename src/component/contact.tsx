"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, CheckCircle, Globe, Shield, Users, TrendingUp, HeadphonesIcon, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI-powered solutions? Our team of experts is here to guide you through every step of implementation.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 text-lg"
        >
          <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-blue-300 transition-colors">
            <Phone className="w-5 h-5" />
            <span>Phone: +1 (555) 123-4567</span>
          </a>
          <span className="hidden md:block text-blue-400">●</span>
          <a href="mailto:info@ai-business-intelligence.com" className="flex items-center gap-3 hover:text-blue-300 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email: info@ai-business-intelligence.com</span>
          </a>
          <span className="hidden md:block text-blue-400">●</span>
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a free 30-minute discovery call</span>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Clock className="w-7 h-7 text-blue-300" />
              What Happens Next?
            </h3>
            <ol className="space-y-6">
              {[
                { step: 1, title: "Discovery Call (30 minutes)", desc: "Understand your challenges and objectives" },
                { step: 2, title: "Assessment (1-2 weeks)", desc: "Evaluate your current operations and recommend solutions" },
                { step: 3, title: "Proposal (3-5 days)", desc: "Detailed plan with ROI projections and timeline" },
                { step: 4, title: "Pilot Program (4-8 weeks)", desc: "Proof-of-concept in controlled environment" },
                { step: 5, title: "Full Implementation", desc: "Scaled rollout with continuous support" },
              ].map((item) => (
                <motion.li
                  key={item.step}
                  whileHover={{ x: 8 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Industries & Why Partner */}
          <div className="space-y-12">
            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="w-7 h-7 text-blue-300" />
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
                  <div key={industry} className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-blue-300" />
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
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-blue-300" />
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
                    className="flex gap-3 items-start"
                  >
                    <item.icon className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
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