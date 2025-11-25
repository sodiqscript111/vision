// src/data/solutions.ts

export interface Solution {
    id: string;
    title: string;
    description: string;
    image: string;
    advantages: string[];
    considerations: string[];
    targetIndustries: string[];
    metrics: { value: string; label: string }[];
    howItWorks: {
        description: string;
        features: string[];
    };
    implementationSteps: {
        number: number;
        title: string;
        description: string;
    }[];
}

export const solutions: Solution[] = [
    {
        id: "healthcare-modal",
        title: "Healthcare - AI-Powered Medical Diagnostics",
        description:
            "Transform healthcare delivery with AI-assisted medical imaging, patient flow optimization, and administrative automation to improve outcomes and reduce costs.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
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
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2070",
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
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2070",
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
        image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&q=80&w=2080",
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
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974",
        advantages: [
            "97% accuracy in content classification",
            "6 hours → 30 seconds content review time",
            "80% reduction in moderation costs",
            "Harmful content removal time: 4.2 hours → 18 minutes",
        ],
        considerations: [
            "GDPR and CCPA compliance",
            "Ethical AI bias testing",
            "Privacy-compliant facial recognition",
        ],
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
];