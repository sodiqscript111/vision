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
    // --- 1. CORE SERVICE: COMPUTER VISION ---
    {
        id: "computer-vision",
        title: "Computer Vision Analytics",
        description:
            "Leverage deep learning neural networks and convolutional neural networks (CNNs) to extract meaningful insights from visual data in real-time. By processing video feeds and images through advanced AI models, we transform raw visual data into actionable business intelligence[cite: 7, 8].",
        advantages: [
            "Real-time Data Insights with <50ms latency [cite: 48]",
            "95% Accuracy in Detection validated across 1M+ test samples [cite: 48]",
            "Automated Reporting delivered daily, weekly, or via custom triggers [cite: 49]",
            "Scalable Cloud-based architecture supporting unlimited camera feeds [cite: 51]",
        ],
        considerations: [
            "High-resolution camera infrastructure required (1080p to 4K) [cite: 1253]",
            "Network bandwidth for video streaming",
            "Edge vs. Cloud processing balance",
        ],
        targetIndustries: ["Retail", "Manufacturing", "Sports Analytics", "Security", "Transportation"],
        metrics: [
            { value: "95%", label: "Detection Accuracy" },
            { value: "<50ms", label: "Processing Latency" },
            { value: "1M+", label: "Test Samples" },
            { value: "99.2%", label: "Defect Detection Rate" },
        ],
        howItWorks: {
            description:
                "Computer vision systems work by mimicking human visual perception through layered artificial neural networks. Images are acquired, preprocessed for normalization, and passed through Deep Learning models to identify patterns and generate real-time insights [cite: 1250-1266].",
            features: [
                "Image Acquisition: Capture at 30-60 frames per second [cite: 10]",
                "Preprocessing: Images normalized, resized, and enhanced [cite: 11]",
                "Feature Extraction: CNNs identify edges, textures, and shapes [cite: 1259]",
                "Analysis & Classification: AI algorithms process features to generate insights [cite: 13]",
                "Real-time Reporting: Data visualized on dashboards with alerts [cite: 14]",
                "Core Tech: YOLOv8, EfficientDet, OpenCV, TensorFlow [cite: 16]",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Image Acquisition",
                description: "High-resolution cameras capture visual data at 30-60 frames per second [cite: 10]",
            },
            {
                number: 2,
                title: "Preprocessing",
                description: "Images are normalized, resized, and enhanced for optimal analysis [cite: 11]",
            },
            {
                number: 3,
                title: "Feature Extraction",
                description: "Deep learning models identify key patterns, objects, and behaviors [cite: 12]",
            },
            {
                number: 4,
                title: "Analysis & Classification",
                description: "AI algorithms process extracted features to generate insights [cite: 13]",
            },
            {
                number: 5,
                title: "Real-time Reporting",
                description: "Data is instantly visualized on dashboards with automated alerts [cite: 14]",
            },
        ],
    },

    // --- 2. CORE SERVICE: FACIAL RECOGNITION ---
    {
        id: "facial-recognition",
        title: "Facial Recognition Systems",
        description:
            "Utilize deep convolutional neural networks trained on millions of facial images to provide secure, contactless identification with 99.7% accuracy. The system works in real-time, processing faces in under 200 milliseconds[cite: 54, 55].",
        advantages: [
            "Enhanced Security: Impossible to duplicate or share unlike cards [cite: 89]",
            "Personalized Experience: Instant recognition enables tailored service [cite: 90]",
            "Contactless Authentication: Hygienic and convenient [cite: 92]",
            "Integration: APIs connect to access control, CRM, and POS platforms [cite: 93]",
        ],
        considerations: [
            "GDPR/CCPA Compliance required",
            "Opt-in consent policies",
            "Liveness detection configuration",
            "Encrypted template storage",
        ],
        targetIndustries: [
            "Corporate Offices",
            "Banking & Finance",
            "Hospitality",
            "Theme Parks",
            "Retail",
        ],
        metrics: [
            { value: "99.7%", label: "Accuracy Rate" },
            { value: "<200ms", label: "Processing Time" },
            { value: "AES-256", label: "Encryption" },
            { value: "128-512", label: "Vector Dimensions" },
        ],
        howItWorks: {
            description:
                "The system converts facial features into mathematical representations called 'embeddings'. These unique vectors are compared against encrypted databases to verify identity, utilizing liveness detection to prevent spoofing[cite: 59, 63].",
            features: [
                "Face Detection using Haar Cascades or MTCNN [cite: 57]",
                "Face Alignment identifying landmarks (eyes, nose, mouth) [cite: 58]",
                "Deep Neural Network Feature Extraction [cite: 59]",
                "Template Matching using cosine similarity [cite: 60]",
                "Liveness Detection against photo/video attacks [cite: 63]",
                "3D Depth Sensing capabilities [cite: 63]",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Face Detection",
                description: "Algorithms locate and isolate faces within camera frames [cite: 57]",
            },
            {
                number: 2,
                title: "Face Alignment",
                description: "Facial landmarks are identified and normalized [cite: 58]",
            },
            {
                number: 3,
                title: "Feature Extraction",
                description: "Neural networks convert faces into 128-512 dimensional vector embeddings [cite: 59]",
            },
            {
                number: 4,
                title: "Template Matching",
                description: "New embeddings are compared against database using cosine similarity [cite: 60]",
            },
            {
                number: 5,
                title: "Authentication Decision",
                description: "Match scores above threshold (typically 0.85) trigger identification [cite: 61]",
            },
        ],
    },

    // --- 3. CORE SERVICE: OPERATIONS CONSULTANCY ---
    {
        id: "operations-consultancy",
        title: "Operations Consultancy",
        description:
            "Combine AI expertise with deep industry knowledge to transform business processes. We analyze your operations end-to-end and design custom AI solutions that deliver measurable ROI, typically achieving payback within 6-18 months[cite: 96, 1447].",
        advantages: [
            "Customized Solutions tailored to specific industry needs [cite: 124]",
            "Expert Industry Knowledge from former executives [cite: 126]",
            "ROI-Focused Strategies (Avg client ROI of 340%) [cite: 127]",
            "Long-term Partnership for ongoing support [cite: 128]",
        ],
        considerations: [
            "Change management is critical",
            "Data maturity assessment required",
            "Legacy system integration",
        ],
        targetIndustries: ["Manufacturing", "Retail", "Healthcare", "Logistics", "Finance"],
        metrics: [
            { value: "340%", label: "Average ROI (18 Mo)" },
            { value: "40%", label: "Admin Time Saved" },
            { value: "6", label: "Phases of Delivery" },
            { value: "15x", label: "Inspection Speed" },
        ],
        howItWorks: {
            description:
                "Our methodology moves from comprehensive audit to full deployment. We identify repetitive manual tasks suitable for automation and design dashboards that transform raw data into strategic insights [cite: 99-104, 107, 112].",
            features: [
                "Process Automation (Invoice processing, OCR) [cite: 109]",
                "Operational Analytics (Supply chain visibility) [cite: 115]",
                "Workforce Optimization (AI scheduling) [cite: 116]",
                "Predictive Maintenance [cite: 116]",
                "Digital Transformation Strategy [cite: 117]",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Discovery Phase",
                description: "Comprehensive audit of current operations, pain points, and opportunities [cite: 99]",
            },
            {
                number: 2,
                title: "Data Assessment",
                description: "Evaluate existing data infrastructure and collection methods [cite: 100]",
            },
            {
                number: 3,
                title: "Solution Design",
                description: "Custom AI strategy aligned with business objectives [cite: 101]",
            },
            {
                number: 4,
                title: "Pilot Implementation",
                description: "Proof-of-concept in controlled environment [cite: 102]",
            },
            {
                number: 5,
                title: "Full Deployment & Optimization",
                description: "Scaled rollout with training followed by continuous optimization [cite: 103, 104]",
            },
        ],
    },

    // --- 4. CORE SERVICE: RFID SYSTEMS ---
    {
        id: "rfid-systems",
        title: "RFID & Barcode Systems",
        description:
            "Provide automated, accurate tracking of inventory, assets, and products throughout your supply chain. By combining passive RFID tags, active beacons, and advanced barcode scanning with AI analytics, we deliver 99.8% inventory accuracy[cite: 131, 132].",
        advantages: [
            "99% Inventory Accuracy: Eliminate stock discrepancies [cite: 178]",
            "Automated Stock Management: Reduce manual counts [cite: 179]",
            "Reduced Shrinkage: Decrease theft and loss by 67% [cite: 180]",
            "Real-time Tracking: Know location/status with <5 min latency [cite: 1801]",
        ],
        considerations: [
            "Physical tag application workflow",
            "Reader infrastructure placement",
            "Metal/Liquid interference mitigation",
        ],
        targetIndustries: ["Retail", "Warehousing", "Hospitals", "Construction", "Logistics"],
        metrics: [
            { value: "99.8%", label: "Inventory Accuracy" },
            { value: "67%", label: "Shrinkage Reduction" },
            { value: "200+", label: "Items Scanned / Sec" },
            { value: "12m", label: "Read Range (UHF)" },
        ],
        howItWorks: {
            description:
                "RFID uses electromagnetic fields to automatically identify tags. Readers emit radio waves to power passive tags or communicate with active tags, capturing unique identifiers. Middleware filters this raw data and integrates it into ERP or WMS systems [cite: 134-139].",
            features: [
                "UHF RFID (865-928 MHz) for long range [cite: 147]",
                "NFC for secure authentication [cite: 148]",
                "Bluetooth Beacons for asset tracking [cite: 150]",
                "AI-Powered Analytics for anomaly detection [cite: 151]",
                "Handheld and Fixed Portal Readers [cite: 158]",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Tag Application",
                description: "RFID tags (passive or active) attached to items, pallets, or assets [cite: 135]",
            },
            {
                number: 2,
                title: "Radio Frequency Reading",
                description: "Readers emit radio waves that power passive tags or communicate with active tags [cite: 136]",
            },
            {
                number: 3,
                title: "Data Capture",
                description: "Tags transmit unique identifiers and optional data (temperature, location) [cite: 137]",
            },
            {
                number: 4,
                title: "Processing",
                description: "Middleware filters and processes raw RFID data [cite: 138]",
            },
            {
                number: 5,
                title: "System Integration",
                description: "Clean data flows to ERP, WMS, or inventory management systems [cite: 139]",
            },
        ],
    },

    // --- 5. CORE SERVICE: ESL SYSTEMS ---
    {
        id: "esl-systems",
        title: "Electronic Shelf Edge Labels (ESL)",
        description:
            "Replace traditional paper price tags with digital e-ink displays that update wirelessly in real-time. Managed through a centralized platform, ESL enables dynamic pricing, instant promotions, and perfect price accuracy across all locations[cite: 184, 185].",
        advantages: [
            "Instant Wireless Updates: Change thousands of prices in 8 minutes [cite: 224]",
            "Eliminate Paper Waste: Save $0.40 per label change [cite: 225]",
            "Reduced Labor Costs by 70% [cite: 226]",
            "100% Price Accuracy Guarantee [cite: 227]",
        ],
        considerations: [
            "Base station coverage planning",
            "Integration with POS pricing database",
            "Label size selection (1.54\" to 7.5\")",
        ],
        targetIndustries: ["Grocery", "Electronics Retail", "Pharmacies", "Department Stores"],
        metrics: [
            { value: "8 min", label: "Store-wide Update" },
            { value: "5-7 yr", label: "Battery Life" },
            { value: "100%", label: "Price Accuracy" },
            { value: "70%", label: "Labor Reduction" },
        ],
        howItWorks: {
            description:
                "E-paper displays mounted on shelves communicate wirelessly with base stations. A cloud platform synchronizes prices with the POS and pushes updates to thousands of labels in minutes. Labels also feature NFC and LED indicators for staff picking [cite: 187-193].",
            features: [
                "E-Ink/E-Paper Displays (Ultra-low power) [cite: 192]",
                "Sub-GHz or 2.4GHz Wireless Communication [cite: 188]",
                "NFC Capability for customer interaction [cite: 193]",
                "Multi-Color Options (Red/Black/White/Yellow) [cite: 193]",
                "LED Flashing for picking/restocking [cite: 193]",
            ],
        },
        implementationSteps: [
            {
                number: 1,
                title: "Hardware Installation",
                description: "Mount E-paper displays on shelf edges and install wireless base stations [cite: 187, 188]",
            },
            {
                number: 2,
                title: "Gateway Infrastructure",
                description: "Receivers throughout store relay signals to labels [cite: 189]",
            },
            {
                number: 3,
                title: "Central Management",
                description: "Cloud platform controls all labels across all stores [cite: 189]",
            },
            {
                number: 4,
                title: "Price Synchronization",
                description: "POS and online prices automatically sync to shelf labels [cite: 189]",
            },
            {
                number: 5,
                title: "Update Propagation",
                description: "Price changes pushed to thousands of labels in minutes [cite: 190]",
            },
        ],
    },
]