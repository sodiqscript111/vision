export interface Service {
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

export const services: Service[] = [
    {
        id: "computer-vision",
        title: "Computer Vision Analytics",
        description:
            "Leverage deep learning neural networks and convolutional neural networks (CNNs) to extract meaningful insights from visual data in real-time. Process video feeds and images through advanced AI models to transform raw visual data into actionable business intelligence.",
        advantages: [
            "95% accuracy in detection (validated across 1M+ test samples)",
            "Real-time data insights with <50ms latency",
            "Process and analyze visual data from multiple locations simultaneously",
            "Automated reporting and scalable across unlimited camera feeds",
        ],
        considerations: [
            "High-resolution camera infrastructure required",
            "Network bandwidth for video streaming",
            "Storage requirements for video footage",
        ],
        targetIndustries: ["Retail", "Manufacturing", "Sports Analytics", "Security", "Logistics", "Healthcare"],
        metrics: [
            { value: "95%", label: "Detection Accuracy" },
            { value: "<50ms", label: "Processing Latency" },
            { value: "1M+", label: "Test Samples" },
            { value: "99.2%", label: "True Positive Rate" },
        ],
        howItWorks: {
            description:
                "Computer vision systems work by mimicking human visual perception through layered artificial neural networks. High-resolution cameras capture visual data at 30-60 frames per second, which undergoes preprocessing, feature extraction through convolutional neural networks, analysis and classification, and real-time reporting with <100ms dashboard updates.",
            features: [
                "Image acquisition at 30-60 FPS with industrial-grade cameras",
                "Preprocessing with noise reduction and normalization",
                "Feature extraction through CNN layers (edges, textures, complex patterns)",
                "Real-time object detection with YOLO and R-CNN algorithms",
                "Multi-object tracking across frames with SORT/DeepSORT",
                "Automated alerting and historical trend analysis",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Use Case Selection",
                description:
                    "Identify specific computer vision applications (occupancy monitoring, quality control, analytics)",
            },
            {
                number: 2,
                title: "Infrastructure Setup",
                description: "Install cameras, edge computing devices, and networking infrastructure",
            },
            {
                number: 3,
                title: "Model Training",
                description: "Train custom computer vision models on your specific use cases and environment",
            },
            {
                number: 4,
                title: "Deployment & Optimization",
                description: "Deploy models to edge devices or cloud, optimize for accuracy and latency",
            },
        ],
    },
    {
        id: "facial-recognition",
        title: "Facial Recognition Systems",
        description:
            "Utilize deep convolutional neural networks trained on millions of diverse facial images to provide secure, contactless identification with 99.7% accuracy. Process faces in under 200 milliseconds while maintaining strict privacy compliance through encrypted biometric templates.",
        advantages: [
            "99.7% accuracy under optimal conditions",
            "Impossible to duplicate, share, or steal like cards/passwords",
            "Contactless authentication (hygienic and convenient)",
            "Instant recognition enables tailored service and personalization",
        ],
        considerations: [
            "GDPR Article 9 compliance (biometric data as special category)",
            "CCPA and BIPA (Illinois Biometric Information Privacy Act) requirements",
            "Bias testing across demographics required",
            "Human review required for high-stakes decisions",
        ],
        targetIndustries: [
            "Banking & Finance",
            "Corporate Security",
            "Hospitality",
            "Retail",
            "Airports",
            "Government Facilities",
        ],
        metrics: [
            { value: "99.7%", label: "Accuracy Rate" },
            { value: "200ms", label: "Processing Time" },
            { value: "512D", label: "Embedding Dimensions" },
            { value: "AES-256", label: "Encryption Standard" },
        ],
        howItWorks: {
            description:
                "Facial recognition works by detecting faces in images, aligning them to standard pose and size, extracting unique facial characteristics into mathematical representations (embeddings), comparing against enrolled templates using cosine similarity, and detecting liveness to prevent spoofing attacks.",
            features: [
                "Multi-face detection (up to 50 faces per frame) with MTCNN",
                "Facial landmark detection (68-194 key points)",
                "Deep neural networks (FaceNet, ArcFace) for embeddings",
                "Anti-spoofing with texture analysis and 3D depth sensing",
                "Challenge-response liveness detection",
                "Encrypted template storage with AES-256",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Enrollment Setup",
                description: "Capture multiple facial angles (front, left/right, up/down) totaling 5-10 images per person",
            },
            {
                number: 2,
                title: "Infrastructure Deployment",
                description: "Install industrial-grade cameras with NIR illuminators at entry points",
            },
            {
                number: 3,
                title: "System Configuration",
                description: "Configure matching thresholds, liveness detection, and multi-factor authentication options",
            },
            {
                number: 4,
                title: "Integration & Training",
                description: "Integrate with access control, CRM systems, and train staff on operation",
            },
        ],
    },
    {
        id: "operations-consultancy",
        title: "Operations Consultancy",
        description:
            "Combine AI expertise with deep industry knowledge to transform business processes through data-driven insights, automation, and strategic technology implementation. Analyze operations end-to-end and design custom AI solutions that deliver measurable ROI with 6-18 month payback periods.",
        advantages: [
            "Average client ROI of 340% within 18 months",
            "Customized solutions for your specific industry",
            "Proven 5-phase methodology from discovery to optimization",
            "Long-term partnership with ongoing support and evolution",
        ],
        considerations: [
            "Implementation scope varies by business size",
            "Organizational change management required",
            "Staff training and adoption critical to success",
            "Continuous optimization needed for sustained benefits",
        ],
        targetIndustries: ["Manufacturing", "Retail", "Healthcare", "Logistics", "Finance", "Technology"],
        metrics: [
            { value: "340%", label: "Average ROI in 18 Months" },
            { value: "5", label: "Implementation Phases" },
            { value: "6-18", label: "Months to Payback" },
            { value: "90%", label: "Client Satisfaction" },
        ],
        howItWorks: {
            description:
                "Our proven methodology includes Discovery & Assessment (2-4 weeks), Strategic Planning (2-3 weeks), Pilot Implementation (4-8 weeks), Full Deployment (3-12 months), and ongoing Optimization. We identify quick wins, model ROI, implement proofs-of-concept, and scale with comprehensive support.",
            features: [
                "Comprehensive operational audits and pain point analysis",
                "Stakeholder interviews across all departments",
                "Process mapping and data maturity assessment",
                "Custom AI strategy aligned with business objectives",
                "Pilot programs in controlled environments",
                "Phased rollout with change management and training",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Discovery & Assessment",
                description: "Audit current operations, document workflows, interview stakeholders, assess data maturity",
            },
            {
                number: 2,
                title: "Strategic Planning",
                description: "Create custom AI strategy, recommend technology stack, model ROI projections",
            },
            {
                number: 3,
                title: "Pilot Implementation",
                description: "Proof-of-concept in controlled environment, test with real employees, refine approach",
            },
            {
                number: 4,
                title: "Full Deployment & Optimization",
                description: "Scaled rollout with training, ongoing monitoring, continuous improvement and expansion",
            },
        ],
    },
    {
        id: "rfid-systems",
        title: "RFID & Barcode Systems",
        description:
            "Automated, accurate tracking of inventory, assets, and products throughout your supply chain with 99.8% accuracy. Combine passive RFID tags, active beacons, and advanced barcode scanning with AI-powered analytics to eliminate stock discrepancies and phantom inventory.",
        advantages: [
            "99.8% inventory accuracy (eliminates stock discrepancies)",
            "Automated stock management reducing manual counts",
            "67% average shrinkage reduction through automated loss prevention",
            "Real-time tracking with <5 minute data latency",
        ],
        considerations: [
            "Initial technology infrastructure investment ($300K-900K typical)",
            "Integration with existing POS and ERP systems",
            "Staff training on new systems and processes",
            "Vendor tagging programs can reduce implementation costs 70%",
        ],
        targetIndustries: ["Retail Chains", "Grocery Stores", "Pharmacies", "Hospitals", "Manufacturing", "Logistics"],
        metrics: [
            { value: "99.8%", label: "Inventory Accuracy" },
            { value: "67%", label: "Shrinkage Reduction" },
            { value: "9-14", label: "Month Payback Period" },
            { value: "$3.2M-8.7M", label: "5-Year NPV" },
        ],
        howItWorks: {
            description:
                "RFID uses electromagnetic fields to automatically identify and track tags. Passive tags (powered by reader's radio waves) range up to 12 meters and cost $0.05-0.20 per tag. Active tags (battery-powered) reach up to 100 meters. Readers emit RF signals, receive tag responses, and middleware filters duplicate reads while applying business logic before sending to enterprise systems.",
            features: [
                "Passive RFID tags with 20+ year lifespan",
                "Active and semi-passive tag options for long-range tracking",
                "Portal readers at receiving docks (automatic shipment logging)",
                "Handheld readers for 60-second department cycle counts",
                "Fixed overhead readers tracking item movements in real-time",
                "AI algorithms flagging discrepancies and predicting stockouts",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Assessment & Planning",
                description: "Analyze current inventory accuracy, design tag placement, plan reader infrastructure",
            },
            {
                number: 2,
                title: "Pilot Program",
                description: "Single location implementation, validate accuracy and workflow improvements",
            },
            {
                number: 3,
                title: "Scaled Rollout",
                description: "Phased expansion across locations with vendor tagging integration",
            },
            {
                number: 4,
                title: "Optimization",
                description: "System integration with automation, continuous monitoring and refinement",
            },
        ],
    },
    {
        id: "esl-systems",
        title: "Electronic Shelf Edge Labels (ESL)",
        description:
            "Replace traditional paper price tags with digital e-ink displays that update wirelessly in real-time. Enable dynamic pricing, instant promotions, and perfect price accuracy across all locations simultaneously with low-energy radio frequency technology.",
        advantages: [
            "Instant wireless price updates (thousands in 8 minutes vs. 40+ hours manual)",
            "Eliminate paper waste and printing costs ($20K+ annually)",
            "70% labor cost reduction from price change tasks",
            "100% price accuracy guarantee (zero discrepancies)",
        ],
        considerations: [
            "Hardware cost: $2-4 per label",
            "Infrastructure: $15K-25K per store",
            "Software subscription: $500-1,500 per store monthly",
            "Initial implementation 18-24 month payback period",
        ],
        targetIndustries: [
            "Grocery Stores",
            "Retail Chains",
            "Pharmacies",
            "Electronics Retailers",
            "Department Stores",
            "Specialty Retail",
        ],
        metrics: [
            { value: "8", label: "Minutes to Update 10K Labels" },
            { value: "7", label: "Year Battery Life" },
            { value: "100%", label: "Price Accuracy" },
            { value: "18-24", label: "Month Payback" },
        ],
        howItWorks: {
            description:
                'Electronic Shelf Labels use e-paper display technology (same as Kindle) providing paper-like readability at 170-degree viewing angles. Sizes range from 1.54" to 7.5" with 5-7 year battery life on single coin cell. Wireless mesh network (2.4GHz or sub-GHz) enables mass updates in 8-12 minutes. Cloud-based management platform handles pricing, promotions, and compliance.',
            features: [
                "E-ink displays with ultra-low power consumption",
                "Mesh network infrastructure for reliable coverage",
                "NFC capability for customer smartphone interaction",
                "LED indicators (3-color) for staff location assistance",
                "Dynamic QR codes linking to product pages",
                "Real-time POS synchronization ensuring price accuracy",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Planning",
                description: "Site surveys for RF propagation, label count analysis, integration design",
            },
            {
                number: 2,
                title: "Pilot Store",
                description: "Single store deployment, validate approach, test integrations, staff training",
            },
            {
                number: 3,
                title: "Rollout",
                description: "2-4 stores per week deployment pace with standardized installation procedures",
            },
            {
                number: 4,
                title: "Optimization",
                description: "Progressive feature activation starting with basic pricing, adding dynamic pricing",
            },
        ],
    },
    {
        id: "centralized-control",
        title: "Centralized Control Platform",
        description:
            "Unified, cloud-based dashboard aggregating data from all your smart systems into a single pane of glass. With real-time monitoring, AI-powered analytics, and automated alerting, gain complete visibility and control over operations across all locations.",
        advantages: [
            "Single dashboard eliminating need to log into 15+ different systems",
            "Real-time monitoring knowing what's happening now, not yesterday",
            "Intelligent alerts preventing 85% false positives through AI",
            "Multi-location management scaling from one to hundreds of locations",
        ],
        considerations: [
            "API integrations required with existing systems",
            "Data warehouse setup for historical analysis",
            "Custom dashboard configuration for different roles",
            "Ongoing optimization as new data patterns emerge",
        ],
        targetIndustries: ["Retail Chains", "Manufacturing", "Healthcare", "Logistics", "Distribution", "Enterprise"],
        metrics: [
            { value: "1", label: "Unified Dashboard" },
            { value: "200+", label: "System Integrations" },
            { value: "85%", label: "False Alert Reduction" },
            { value: "99.99%", label: "Uptime SLA" },
        ],
        howItWorks: {
            description:
                "Microservices architecture ingests data from 200+ systems via APIs, normalizes diverse formats, processes through AI analytics engines, applies business rules for automated actions, and visualizes insights through customizable dashboards. Real-time streaming handles 10M+ events/second with <1 second ML model latency. Role-based access control ensures data security while enabling hierarchical management.",
            features: [
                "Real-time data ingestion from POS, ERP, WMS, security systems",
                "AI anomaly detection learning normal patterns",
                "Predictive analytics for demand forecasting and maintenance",
                "Unified alerts with intelligent routing and escalation",
                "Geographic map visualization of multi-location operations",
                "Automated reporting with role-based customization",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "System Assessment",
                description: "Audit existing systems, identify data sources, plan integration architecture",
            },
            {
                number: 2,
                title: "Platform Configuration",
                description: "Set up cloud infrastructure, configure data pipelines, build custom dashboards",
            },
            {
                number: 3,
                title: "Integration Rollout",
                description: "Connect systems one-by-one, validate data accuracy, test automated rules",
            },
            {
                number: 4,
                title: "Training & Optimization",
                description: "Train users on dashboards, optimize performance, continuously add new data sources",
            },
        ],
    },
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
