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
        id: "cv-modal",
        title: "Computer Vision Analytics",
        description:
            "Advanced football analytics, occupancy monitoring, dwell time analysis, and object detection using state-of-the-art AI technology.",
        advantages: [
            "Real-time data insights",
            "95% accuracy in detection",
            "Automated reporting",
            "Scalable across multiple locations",
        ],
        considerations: ["Initial setup investment required", "Requires quality camera infrastructure"],
        targetIndustries: [
            "Sports Analytics",
            "Retail Stores",
            "Shopping Malls",
            "Restaurants",
            "Airports",
            "Hotels",
            "Banks",
        ],
        metrics: [
            { value: "95%", label: "Detection Accuracy" },
            { value: "24/7", label: "Continuous Monitoring" },
            { value: "50ms", label: "Processing Latency" },
            { value: "1000+", label: "Objects Tracked" },
        ],
        howItWorks: {
            description:
                "Our AI-powered computer vision system uses advanced neural networks to analyze video feeds in real-time. The system processes visual data through multiple layers of deep learning algorithms to extract meaningful insights.",
            features: [
                "Real-time video stream processing",
                "Object detection and classification",
                "Behavioral pattern analysis",
                "Automated report generation",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Site Assessment",
                description: "Evaluate existing camera infrastructure and network capabilities",
            },
            {
                number: 2,
                title: "System Design",
                description: "Custom AI model training based on your specific requirements",
            },
            {
                number: 3,
                title: "Installation & Setup",
                description: "Deploy hardware and configure software systems",
            },
            {
                number: 4,
                title: "Training & Go-Live",
                description: "Staff training and system optimization for production use",
            },
        ],
    },
    {
        id: "fr-modal",
        title: "Facial Recognition Systems",
        description:
            "Secure access control, customer identification, and personalized service delivery through advanced facial recognition technology.",
        advantages: [
            "Enhanced security measures",
            "Personalized customer experience",
            "Contactless authentication",
            "Integration with existing systems",
        ],
        considerations: ["Privacy compliance requirements", "Lighting conditions affect accuracy"],
        targetIndustries: ["Corporate Offices", "Retail Stores", "Hotels", "Banks", "Government Buildings", "Healthcare"],
        metrics: [
            { value: "99.7%", label: "Recognition Accuracy" },
            { value: "<1s", label: "Authentication Time" },
            { value: "10,000+", label: "Face Database" },
            { value: "24/7", label: "Security Monitoring" },
        ],
        howItWorks: {
            description:
                "Advanced facial recognition technology that captures, analyzes, and matches facial features against authorized databases for secure access control and personalized experiences.",
            features: [
                "Live face detection and tracking",
                "Anti-spoofing protection",
                "Multi-angle recognition",
                "Privacy-compliant data handling",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Security Assessment",
                description: "Evaluate current security infrastructure and compliance requirements",
            },
            {
                number: 2,
                title: "System Integration",
                description: "Integrate with existing access control and security systems",
            },
            {
                number: 3,
                title: "Database Setup",
                description: "Configure secure facial recognition database and permissions",
            },
            {
                number: 4,
                title: "Testing & Deployment",
                description: "Comprehensive testing and staff training for secure operation",
            },
        ],
    },
    {
        id: "ops-modal",
        title: "Operations Consultancy",
        description:
            "Strategic consulting to optimize your business operations through data-driven insights and process automation.",
        advantages: [
            "Customized solutions",
            "Expert industry knowledge",
            "ROI-focused strategies",
            "Long-term partnership",
        ],
        considerations: ["Implementation timeline varies", "Requires organizational change"],
        targetIndustries: ["Manufacturing", "Retail", "Healthcare", "Logistics", "Financial Services", "Technology"],
        metrics: [
            { value: "40%", label: "Average Cost Reduction" },
            { value: "60%", label: "Process Efficiency Gain" },
            { value: "90%", label: "Client Satisfaction" },
            { value: "6-12", label: "Months ROI Timeline" },
        ],
        howItWorks: {
            description:
                "Comprehensive operational analysis using data analytics, process mapping, and industry best practices to identify optimization opportunities and implement sustainable improvements.",
            features: [
                "Process analysis and mapping",
                "Data-driven recommendations",
                "Change management support",
                "Performance monitoring",
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
    {
        id: "rfid-modal",
        title: "RFID & Barcode Systems",
        description:
            "Advanced inventory management, asset tracking, and supply chain optimization using RFID tags and barcode technology.",
        advantages: ["99% inventory accuracy", "Automated stock management", "Reduced shrinkage", "Real-time tracking"],
        considerations: ["Tag costs for large inventories", "Staff training required"],
        targetIndustries: ["Retail", "Warehousing", "Manufacturing", "Healthcare", "Logistics", "Libraries"],
        metrics: [
            { value: "99%", label: "Inventory Accuracy" },
            { value: "75%", label: "Time Savings" },
            { value: "50%", label: "Shrinkage Reduction" },
            { value: "100+", label: "Items/Second Scan" },
        ],
        howItWorks: {
            description:
                "RFID and barcode systems provide automated identification and tracking of inventory items, assets, and products throughout the supply chain using radio frequency and optical scanning technologies.",
            features: [
                "Automated inventory counting",
                "Real-time location tracking",
                "Batch processing capabilities",
                "Integration with ERP systems",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Inventory Assessment",
                description: "Analyze current inventory processes and system requirements",
            },
            {
                number: 2,
                title: "Technology Selection",
                description: "Choose optimal RFID/barcode solution for your environment",
            },
            {
                number: 3,
                title: "System Installation",
                description: "Deploy readers, tags, and software infrastructure",
            },
            {
                number: 4,
                title: "Training & Optimization",
                description: "Staff training and system fine-tuning for maximum efficiency",
            },
        ],
    },
    {
        id: "pricing-modal",
        title: "Electronic Shelf Edge Labels",
        description:
            "Advanced ESL systems for retail chains with wireless connectivity, real-time price synchronization, and centralized management platform.",
        advantages: [
            "Instant wireless price updates",
            "Eliminate paper waste & printing costs",
            "Reduced labor costs by 70%",
            "100% price accuracy guarantee",
        ],
        considerations: [
            "Initial ESL hardware investment",
            "E-ink display battery lifecycle management",
            "Staff training on ESL platform",
        ],
        targetIndustries: ["Retail Chains", "Supermarkets", "Pharmacies", "Electronics Stores", "Department Stores"],
        metrics: [
            { value: "70%", label: "Labor Cost Reduction" },
            { value: "100%", label: "Price Accuracy" },
            { value: "5 years", label: "Battery Life" },
            { value: "<30s", label: "Update Time" },
        ],
        howItWorks: {
            description:
                "Electronic Shelf Labels use e-ink technology and wireless communication to display real-time pricing and product information, managed through a centralized platform for instant updates across all locations.",
            features: [
                "Wireless price synchronization",
                "E-ink display technology",
                "Centralized management system",
                "Multi-location support",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Store Layout Analysis",
                description: "Map store layout and determine ESL placement requirements",
            },
            {
                number: 2,
                title: "Infrastructure Setup",
                description: "Install wireless network and management servers",
            },
            {
                number: 3,
                title: "ESL Deployment",
                description: "Install electronic shelf labels and configure product mapping",
            },
            {
                number: 4,
                title: "System Integration",
                description: "Connect with POS and inventory management systems",
            },
        ],
    },
    {
        id: "control-modal",
        title: "Centralized Control Platform",
        description:
            "Unified dashboard to manage all your smart systems, from pricing to analytics, with real-time monitoring and control.",
        advantages: ["Single point of control", "Real-time monitoring", "Automated alerts", "Multi-location management"],
        considerations: ["Internet dependency", "Staff training requirements"],
        targetIndustries: [
            "Multi-location Retail",
            "Chain Restaurants",
            "Corporate Offices",
            "Healthcare Networks",
            "Educational Institutions",
        ],
        metrics: [
            { value: "99.9%", label: "System Uptime" },
            { value: "50+", label: "Locations Managed" },
            { value: "<5min", label: "Alert Response Time" },
            { value: "24/7", label: "Monitoring Coverage" },
        ],
        howItWorks: {
            description:
                "Centralized control platform aggregates data from all connected systems, providing unified management, real-time monitoring, and automated control across multiple locations and technologies.",
            features: [
                "Unified dashboard interface",
                "Real-time system monitoring",
                "Automated alert system",
                "Remote configuration management",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "System Integration Planning",
                description: "Identify all systems and plan integration architecture",
            },
            {
                number: 2,
                title: "Platform Configuration",
                description: "Set up centralized platform and configure connections",
            },
            {
                number: 3,
                title: "Dashboard Customization",
                description: "Create custom dashboards for different user roles",
            },
            {
                number: 4,
                title: "Training & Go-Live",
                description: "Comprehensive training and phased rollout across locations",
            },
        ],
    },
]

export default function ServicesPage() {
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
        <div className="min-h-screen bg-gray-50">
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive AI-powered solutions to transform your business operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(service)}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-blue-700">Advantages</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {service.advantages.map((advantage, index) => (
                                            <li key={index}>• {advantage}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 shadow-2xl border-2 border-blue-100">
                        <div className="bg-white border-b-2 border-blue-100 text-gray-900 p-6 rounded-t-2xl flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                            <button onClick={closeModal} className="text-gray-600 hover:text-blue-600 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 text-gray-900 bg-white">
                            {/* Service Details Grid */}
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

                            {/* Implementation Steps */}
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
