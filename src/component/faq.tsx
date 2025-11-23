// src/component/faq.tsx
"use client";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's the typical implementation timeline?",
    answer:
      "Depends on complexity. Simple computer vision deployment: 4-8 weeks. Full RFID rollout across 50 stores: 6-9 months. Enterprise transformation: 12-24 months. We always start with pilot programs to validate approach.",
  },
  {
    question: "What's the investment range?",
    answer:
      "Varies widely based on scope. Single-location pilot: $50K-150K. Multi-location rollout: $500K-5M+. We provide detailed ROI modeling so you know expected payback (typically 12-24 months).",
  },
  {
    question: "Do you work with existing systems or require replacement?",
    answer:
      "We integrate with existing systems wherever possible. Our platform has 200+ pre-built connectors. Legacy system replacement only if absolutely necessary for functionality.",
  },
  {
    question: "What about data security and privacy compliance?",
    answer:
      "We're SOC 2 Type II and ISO 27001 certified. GDPR and CCPA compliant. Data encrypted end-to-end. We can deploy on-premise for maximum data control if required.",
  },
  {
    question: "What happens if the technology doesn't deliver promised results?",
    answer:
      "We include pilot programs specifically to validate assumptions before full investment. Our contracts include performance guarantees. If we don't hit targets, we continue working at no additional cost until we do.",
  },
  {
    question: "Do we need to hire AI specialists to manage this?",
    answer:
      "No. Our platforms are designed for business users, not data scientists. We provide comprehensive training and ongoing support. Typical clients manage systems with existing IT/operations teams.",
  },
  {
    question: "How quickly can we see ROI?",
    answer:
      "Some benefits are immediate (labor savings from automation). Others take time (process optimization, cultural change). Typical payback: 12-24 months. Some clients achieve payback in 6 months (particularly loss prevention and inventory accuracy improvements).",
  },
  {
    question: "What if our industry is highly specialized?",
    answer:
      "We've worked across 15+ industries. Our approach: understand your specific domain, then apply proven AI techniques. We often find \"unique\" challenges have been solved in other industries. Cross-pollination of ideas drives innovation.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our process and technology.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-200"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-slate-900 text-lg">
                <span className="group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <span className="bg-slate-100 rounded-full p-2 group-hover:bg-blue-50 transition-colors">
                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-hover:text-blue-600" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}