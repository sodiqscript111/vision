"use client"
import { useState } from "react"
import { X } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  advantages: string[]
  considerations: string[]
  targetIndustries: string[]
  metrics: { value: string; label: string }[]
  howItWorks: {
    description: string
    features: string[]
  }
  implementationSteps: {
    number: number
    title: string
    description: string
  }[]
}

const services: Service[] = [
  {
    id: "healthcare-modal",
    title: "Healthcare - AI-Powered Medical Diagnostics",
    description:
        "Transform healthcare delivery with AI-assisted medical imaging, patient flow optimization, and administrative automation to improve outcomes and reduce costs.",
    advantages: [
      "94%+ accuracy matching specialist radiologists",
      "32-40% reduction in diagnostic reading time",
      "28 minutes average reduction in patient wait times",
      "35% reduction in administrative costs",
    ],
    considerations: [
      "HIPAA compliance requirements",
      "FDA guidance for AI/ML medical devices",
      "Staff training on new systems",
    ],
    targetIndustries: [
      "Hospitals",
      "Diagnostic Centers",
      "Clinics",
      "Medical Networks",
      "Emergency Departments",
      "Surgical Suites",
    ],
    metrics: [
      { value: "94%+", label: "Diagnostic Accuracy" },
      { value: "34%", label: "Faster Imaging Analysis" },
      { value: "$8.7M", label: "Annual Recurring Benefit" },
      { value: "14%", label: "Readmission Rate Decrease" },
    ],
    howItWorks: {
      description:
          "AI-powered medical diagnostics system combines computer vision for imaging analysis, patient flow optimization using real-time sensors, equipment tracking via RFID, and administrative automation to streamline operations and improve patient outcomes.",
      features: [
        "Medical imaging analysis (X-rays, CT scans, MRIs)",
        "Real-time bed management and occupancy monitoring",
        "RFID equipment tracking and utilization analytics",
        "Predictive staffing models and scheduling automation",
        "Robotic Process Automation for billing and insurance verification",
        "NLP-powered clinical note transcription",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "System Assessment",
        description: "Evaluate current infrastructure, imaging systems, and workflow patterns",
      },
      {
        number: 2,
        title: "AI Model Training",
        description: "Customize AI models based on your facility's specific case types and patient demographics",
      },
      {
        number: 3,
        title: "Infrastructure Setup",
        description: "Install sensors, RFID systems, and network infrastructure for real-time monitoring",
      },
      {
        number: 4,
        title: "Training & Integration",
        description: "Staff training and integration with existing EHR and management systems",
      },
    ],
  },
  {
    id: "retail-modal",
    title: "Retail - Smart Checkout & Inventory Automation",
    description:
        "Revolutionize retail operations with cashierless checkout, electronic shelf labels, real-time inventory management, and advanced loss prevention.",
    advantages: [
      "99.7% accuracy in item identification",
      "30-second checkout time vs. 8 minutes traditional",
      "70% labor cost reduction for price management",
      "60-70% shrinkage reduction",
    ],
    considerations: [
      "Initial technology infrastructure investment",
      "Staff retraining requirements",
      "Integration with existing POS systems",
    ],
    targetIndustries: [
      "Supermarkets",
      "Retail Chains",
      "Pharmacies",
      "Electronics Stores",
      "Department Stores",
      "Convenience Stores",
    ],
    metrics: [
      { value: "12.7%", label: "Same-Store Sales Increase" },
      { value: "1.9% → 0.7%", label: "Shrinkage Reduction" },
      { value: "$27.4M", label: "Annual Projected Benefit" },
      { value: "67%", label: "ROI Year One" },
    ],
    howItWorks: {
      description:
          "Smart retail system combines computer vision for cashierless checkout and customer analytics, electronic shelf labels for dynamic pricing, RFID for real-time inventory, and AI-powered loss prevention to optimize operations and customer experience.",
      features: [
        "Computer vision-based cashierless checkout system",
        "Electronic shelf labels with real-time price updates",
        "RFID inventory management with 95-99% accuracy",
        "Customer journey analytics and occupancy monitoring",
        "Dynamic pricing based on demand and competition",
        "AI-powered loss prevention and theft detection",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "Store Assessment",
        description: "Map store layout and identify optimal placement for cameras, sensors, and shelf labels",
      },
      {
        number: 2,
        title: "Technology Deployment",
        description: "Install computer vision systems, RFID infrastructure, and ESL units",
      },
      {
        number: 3,
        title: "System Integration",
        description: "Connect to POS, inventory management, and pricing systems",
      },
      {
        number: 4,
        title: "Pilot & Rollout",
        description: "Pilot program in selected stores, then scale to full chain with staff training",
      },
    ],
  },
  {
    id: "security-modal",
    title: "Security - Intelligent Surveillance Systems",
    description:
        "Enhance security with AI-powered video analytics, facial recognition, license plate recognition, and integrated access control for comprehensive threat detection and prevention.",
    advantages: [
      "88% reduction in false alarms",
      "73% reduction in security incidents",
      "90-second response time vs. 12 minutes traditional",
      "2 operators can monitor what previously required 8",
    ],
    considerations: [
      "Privacy compliance regulations",
      "Ethical AI implementation requirements",
      "Regular algorithm auditing",
    ],
    targetIndustries: [
      "Corporate Offices",
      "Airports",
      "Government Buildings",
      "Retail Stores",
      "Event Venues",
      "Banks",
    ],
    metrics: [
      { value: "99.7%", label: "Recognition Accuracy" },
      { value: "88%", label: "False Alarm Reduction" },
      { value: "$420K", label: "Annual Labor Savings" },
      { value: "8 months", label: "Payback Period" },
    ],
    howItWorks: {
      description:
          "Intelligent surveillance platform uses advanced computer vision for real-time threat detection, facial recognition for access control and watchlist monitoring, license plate recognition for vehicle tracking, and unified access control integration for comprehensive security.",
      features: [
        "Real-time threat detection (weapons, suspicious packages, behaviors)",
        "Perimeter intrusion detection with virtual fencing",
        "Facial recognition for watchlist alerting and access control",
        "License plate recognition and vehicle tracking",
        "Crowd analysis for event security and capacity management",
        "Automated incident response and video clip alerting",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "Security Audit",
        description: "Assess current security infrastructure and identify coverage gaps",
      },
      {
        number: 2,
        title: "AI System Configuration",
        description: "Configure threat detection models, watchlists, and alert thresholds",
      },
      {
        number: 3,
        title: "Integration Setup",
        description: "Integrate with existing alarms, access control, and incident response systems",
      },
      {
        number: 4,
        title: "Training & Deployment",
        description: "Train security personnel on new system and monitor effectiveness",
      },
    ],
  },
  {
    id: "autonomous-modal",
    title: "Autonomous Vehicles - Vision-Powered Navigation",
    description:
        "Enable autonomous vehicle operation with comprehensive computer vision systems, sensor fusion, and AI-powered navigation for safe and reliable autonomous delivery.",
    advantages: [
      "99.97% successful route navigation",
      "Zero at-fault incidents in 500K miles",
      "65% cost reduction vs. human drivers",
      "24/7 operation capability",
    ],
    considerations: [
      "NHTSA regulatory compliance",
      "Insurance and liability framework",
      "Extensive simulation testing required",
    ],
    targetIndustries: [
      "Logistics Companies",
      "Delivery Services",
      "Food Delivery",
      "Last-Mile Delivery",
      "Fleet Management",
      "Transportation",
    ],
    metrics: [
      { value: "500K", label: "Safe Operating Miles" },
      { value: "0.2", label: "Disengagements per 1000 Miles" },
      { value: "$48K", label: "Annual Savings per Vehicle" },
      { value: "1.8 years", label: "Payback Period" },
    ],
    howItWorks: {
      description:
          "Autonomous vehicle system combines 360-degree computer vision, LiDAR point cloud mapping, radar sensing, GPS positioning, and advanced sensor fusion algorithms to enable real-time environmental perception and intelligent navigation in complex driving conditions.",
      features: [
        "360-degree camera coverage with real-time object detection",
        "Traffic sign and signal recognition at distance",
        "Pedestrian and cyclist detection with trajectory prediction",
        "Advanced lane detection and path planning",
        "Multi-sensor fusion (camera, LiDAR, radar, GPS)",
        "Emergency braking and collision avoidance systems",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "Route Planning",
        description: "Define geo-fenced delivery areas and establish operational parameters",
      },
      {
        number: 2,
        title: "Vehicle Preparation",
        description: "Install vision systems, sensors, and autonomous driving hardware",
      },
      {
        number: 3,
        title: "Software Integration",
        description: "Deploy autonomy stack and conduct extensive simulation testing",
      },
      {
        number: 4,
        title: "Field Testing & Deployment",
        description: "Controlled field testing followed by full operational deployment",
      },
    ],
  },
  {
    id: "social-modal",
    title: "Social Media - Content Intelligence Platform",
    description:
        "Automate content moderation, brand safety, copyright protection, and user verification at scale with AI-powered computer vision and deep learning.",
    advantages: [
      "97% accuracy in content classification",
      "6 hours → 30 seconds content review time",
      "80% reduction in moderation costs",
      "Harmful content removal time: 4.2 hours → 18 minutes",
    ],
    considerations: ["GDPR and CCPA compliance", "Ethical AI bias testing", "Privacy-compliant facial recognition"],
    targetIndustries: [
      "Social Media Platforms",
      "UGC Platforms",
      "Video Streaming",
      "Photo Sharing",
      "Marketplace Platforms",
      "Community Forums",
    ],
    metrics: [
      { value: "97%", label: "Classification Accuracy" },
      { value: "$2.1M", label: "Annual Cost Reduction" },
      { value: "99%", label: "Response Time Improvement" },
      { value: "133%", label: "First-Year ROI" },
    ],
    howItWorks: {
      description:
          "Content intelligence platform uses multi-stage computer vision pipeline for automated moderation, facial recognition for privacy and user verification, logo detection for brand safety, and visual similarity search for copyright protection and duplicate detection.",
      features: [
        "Automated content moderation with prohibited content detection",
        "Face detection and privacy-compliant blurring",
        "Deepfake detection for manipulated media identification",
        "Brand safety and logo detection for trademark tracking",
        "Visual similarity search for copyright protection",
        "Age verification and liveness detection for account security",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "Content Analysis",
        description: "Assess current moderation workflows and policy requirements",
      },
      {
        number: 2,
        title: "Model Training",
        description: "Train custom vision models on platform-specific content and policies",
      },
      {
        number: 3,
        title: "System Integration",
        description: "Integrate with content management and user verification systems",
      },
      {
        number: 4,
        title: "Deployment & Monitoring",
        description: "Phased rollout with continuous monitoring and algorithm improvements",
      },
    ],
  },
  {
    id: "operations-modal",
    title: "Operations Consultancy - Business Optimization",
    description:
        "Leverage data analytics and process automation to optimize operations, reduce costs, and improve efficiency across your entire organization.",
    advantages: [
      "Customized industry-specific solutions",
      "40% average cost reduction",
      "60% process efficiency gains",
      "6-12 month ROI timeline",
    ],
    considerations: ["Implementation timeline varies by scope", "Requires organizational change management"],
    targetIndustries: ["Manufacturing", "Healthcare", "Retail", "Logistics", "Financial Services", "Technology"],
    metrics: [
      { value: "40%", label: "Average Cost Reduction" },
      { value: "60%", label: "Efficiency Improvement" },
      { value: "90%", label: "Client Satisfaction" },
      { value: "6-12", label: "Months to ROI" },
    ],
    howItWorks: {
      description:
          "Comprehensive operational consulting combines process analysis, data-driven insights, automation implementation, and change management to identify and execute sustainable improvements across your organization.",
      features: [
        "Process mapping and bottleneck identification",
        "Data analytics for performance insights",
        "Automation implementation strategies",
        "Change management and staff training",
        "Performance monitoring and continuous improvement",
        "Industry best practices integration",
      ],
    },
    implementationSteps: [
      {
        number: 1,
        title: "Current State Analysis",
        description: "Comprehensive assessment of existing operations and processes",
      },
      {
        number: 2,
        title: "Strategy Development",
        description: "Create customized optimization strategy based on findings",
      },
      {
        number: 3,
        title: "Implementation Planning",
        description: "Detailed roadmap with timelines and resource allocation",
      },
      {
        number: 4,
        title: "Execution & Monitoring",
        description: "Implement changes with continuous monitoring and adjustment",
      },
    ],
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const openModal = (service: Service) => {
    setSelectedService(service)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "auto"
  }

  return (
      <div className="w-full">
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
                Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                  <div
                      key={service.id}
                      className="bg-white border-2 border-blue-200 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Card Title */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 leading-tight">
                        {service.title.split(" - ")[1] || service.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Read More Button */}
                    <button
                        onClick={() => openModal(service)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                    >
                      Read More
                    </button>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for detailed view */}
        {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl w-full max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-blue-200 my-4">
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-200 p-6 md:p-8 sticky top-0 flex justify-between items-start gap-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 flex-1 text-balance leading-tight">
                    {selectedService.title}
                  </h2>
                  <button
                      onClick={closeModal}
                      className="flex-shrink-0 p-1 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* How It Works & Target Industries */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-blue-600 text-xl md:text-2xl font-bold mb-4">How It Works</h3>
                      <p className="text-gray-700 mb-4 text-base">{selectedService.howItWorks.description}</p>
                      <ul className="space-y-2">
                        {selectedService.howItWorks.features.map((feature, index) => (
                            <li key={index} className="text-gray-700 text-base flex items-start gap-2">
                              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                              <span>{feature}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-blue-600 text-xl md:text-2xl font-bold mb-4">Target Industries</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.targetIndustries.map((industry, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm md:text-base border border-blue-200 font-medium"
                            >
                        {industry}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {selectedService.metrics.map((metric, index) => (
                        <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-5 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{metric.value}</div>
                          <div className="text-xs md:text-sm text-gray-600 font-medium">{metric.label}</div>
                        </div>
                    ))}
                  </div>

                  {/* Implementation Steps */}
                  <div>
                    <h3 className="text-blue-600 text-xl md:text-2xl font-bold mb-6">Implementation Process</h3>
                    <div className="space-y-4 md:space-y-5">
                      {selectedService.implementationSteps.map((step, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="bg-blue-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                              {step.number}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h4>
                              <p className="text-gray-700 text-base">{step.description}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Considerations */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                    <h4 className="text-blue-900 font-bold text-lg mb-3">Implementation Considerations</h4>
                    <ul className="space-y-2">
                      {selectedService.considerations.map((consideration, index) => (
                          <li key={index} className="text-gray-700 text-base flex items-start gap-2">
                            <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                            <span>{consideration}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  )
}
