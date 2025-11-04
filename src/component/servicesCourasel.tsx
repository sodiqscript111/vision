"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
    }
  }

  const openModal = (service: Service) => {
    setSelectedService(service)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen ">
      <section className="bg-white py-6 px-6">
        <div className="max-w-7xl h-[350px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions to transform your business operations
            </p>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              ref={carouselRef}
              className="overflow-hidden rounded-2xl shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              <div
                className="flex transition-transform duration-700 ease-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * 33.33}%)`,
                }}
              >
                {[...services, ...services].map((service, index) => (
                  <div key={`${service.id}-${index}`} className="w-1/3 flex-shrink-0 px-3">
                    <div
                      className="relative h-80 overflow-hidden group/card cursor-pointer bg-blue-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                      onClick={() => openModal(service)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-700 to-blue-600 group-hover/card:from-blue-800 group-hover/card:via-blue-600 group-hover/card:to-blue-500 transition-all duration-500" />

                      <div className="relative h-full flex flex-col justify-end p-8 text-white z-10 transform transition-transform duration-500 group-hover/card:translate-y-[-8px]">
                        <h3 className="text-2xl font-bold mb-3 text-balance drop-shadow-2xl leading-tight">
                          {service.title.split(" - ")[1] || service.title}
                        </h3>
                        <p className="text-sm font-medium opacity-90 drop-shadow-lg mb-4">{service.description}</p>
                        <div className="w-16 h-1 bg-blue-300 rounded-full transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 shadow-2xl border-2 border-blue-100">
            <div className="bg-white border-b-2 border-blue-100 text-gray-900 p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-blue-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 text-gray-900 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-blue-600 text-xl font-semibold mb-4">How It Works</h3>
                  <p className="text-gray-700 mb-4">{selectedService.howItWorks.description}</p>
                  <ul className="space-y-2">
                    {selectedService.howItWorks.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 text-xl font-semibold mb-4">Target Industries</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedService.targetIndustries.map((industry, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Perfect for businesses needing advanced technology solutions and operational optimization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {selectedService.metrics.map((metric, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-blue-600 text-xl font-semibold mb-6">Implementation Process</h3>
                <div className="space-y-4">
                  {selectedService.implementationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <h4 className="text-blue-600 font-semibold mb-2">Implementation Considerations</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {selectedService.considerations.map((consideration, index) => (
                    <li key={index}>• {consideration}</li>
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
