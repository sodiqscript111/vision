"use client"

import { useState } from "react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  readTime: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Medical Imaging - How AI Vision is Revolutionizing Healthcare",
    excerpt:
        "The medical imaging field is experiencing a profound transformation driven by artificial intelligence and computer vision technologies. AI systems now match or exceed human accuracy while processing images in a fraction of the time.",
    content: `
<h2>The Medical Imaging Transformation</h2>
<p>The medical imaging field is experiencing a profound transformation driven by artificial intelligence and computer vision technologies. What once required hours of careful analysis by specialist radiologists can now be augmented—and in some cases performed—by AI systems that match or exceed human accuracy while processing images in a fraction of the time.</p>

<h3>Early Disease Detection: AI Sees What Humans Miss</h3>
<p>AI-powered systems are now capable of detecting diseases in X-rays and CT scans at stages so early they're imperceptible to human observers. The implications for patient outcomes are profound—early detection is the single most important factor in successful cancer treatment.</p>
<p><strong>Stanford Research Breakthrough:</strong> A Stanford University study demonstrated that deep learning models identified lung nodules suspicious for cancer with 94.4% accuracy. More remarkably, the AI detected nodules an average of 6 months earlier than traditional methods. Those additional months can be the difference between Stage I cancer (90%+ survival rate) and Stage III (50% survival rate).</p>

<h3>MRI and CT Scan Analysis: Speed Meets Precision</h3>
<p>Computer vision algorithms trained on millions of medical images can now analyze MRI scans in minutes rather than hours. These systems identify abnormalities such as tumors, hemorrhages, and structural abnormalities with unprecedented precision.</p>
<p><strong>Massachusetts General Hospital Implementation:</strong> An AI system reduced radiologist reading time by 40% while improving diagnostic accuracy by 12%. The system acts as a "pre-reader" that highlights areas of concern, allowing radiologists to focus their expertise where it matters most.</p>

<h3>Real-World Clinical Implementation</h3>
<p><strong>Breast Cancer Screening:</strong> AI mammogram analysis reduces false negatives by 28%, identifies 20% more cancers than traditional screening alone, and reduces unnecessary biopsies by 30%.</p>
<p><strong>Diabetic Retinopathy Detection:</strong> AI screening identifies early signs in retinal images with 94% sensitivity, enabling early intervention preventing blindness.</p>
<p><strong>Emergency Room Fracture Detection:</strong> AI identifies bone fractures in X-rays within 90 seconds, reducing patient wait time from 45 minutes to 4 minutes for diagnosis.</p>

<h3>The Human-AI Partnership</h3>
<p>It's crucial to understand that AI doesn't replace radiologists—it augments them. The most effective implementations use AI as a "second reader" that flags potential issues for human expert review. This collaboration combines AI's strengths (tireless consistency, pattern recognition, speed) with human strengths (clinical context, rare condition recognition, complex decision-making).</p>
    `,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
    readTime: "5 min read",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "Smart Retail - How Computer Vision is Reshaping the Shopping Experience",
    excerpt:
        "Computer vision is creating shopping experiences that are faster, more personalized, and more efficient than ever imagined. From cashierless stores to intelligent inventory management, AI vision is transforming retail.",
    content: `
<h2>The Retail Revolution</h2>
<p>The retail landscape is undergoing its most significant transformation since the invention of the barcode scanner in 1974. Computer vision technology is creating shopping experiences that are faster, more personalized, and more efficient than ever imagined. The future of retail isn't just online—it's the fusion of physical and digital through AI-powered vision.</p>

<h3>The Cashierless Revolution: Walk Out Shopping</h3>
<p>The most visible application of computer vision in retail is the cashierless store. Pioneered by Amazon Go in 2018 and now expanding globally, these stores use ceiling-mounted cameras and weight sensors to track what customers pick up. Overhead cameras identify products using shape, color, and packaging recognition, while weight sensors on shelves confirm items removed.</p>
<p><strong>Business Impact:</strong> Cashierless store operators report average shopping trip time reduced from 18 minutes to 9 minutes (50% reduction), with customer throughput increasing 2.3x during peak hours. Customer satisfaction reaches 94% approval rating, with "convenience" most cited benefit.</p>

<h3>Personalized Shopping: Physical Stores Learn from E-Commerce</h3>
<p>Computer vision enables physical stores to offer the personalization customers expect online. VIP customer recognition (with explicit opt-in consent) identifies returning customers as they enter, allowing staff to provide personalized recommendations and targeted promotions.</p>
<p><strong>Results:</strong> Luxury cosmetics retailers report average transaction value increasing from $83 to $117 (41% increase) for recognized customers, with conversion rates jumping from 34% to 52% for VIP customers.</p>

<h3>Inventory Management: The End of Stockouts</h3>
<p>Computer vision cameras mounted throughout stores continuously monitor inventory levels in real-time. Cameras scan shelves every 30-60 seconds, identify empty spots and low stock situations, and send staff mobile alerts for restocking needs.</p>
<p><strong>Business Impact:</strong> Grocery chains report out-of-stock incidents reduced from 8% to 0.7% (91% reduction), with captured previously lost sales reaching $4.2M annually across 50-store chains. Inventory carrying costs reduced 18% through confident replenishment.</p>

<h3>Loss Prevention: Smarter Security</h3>
<p>Modern computer vision enables sophisticated loss prevention that detects suspicious behaviors—excessive handling without purchase, concealment movements, tag removal—while respecting customer privacy through behavior-only analysis, not demographic profiling.</p>
<p><strong>Results:</strong> Shrinkage reduced 40-70% across implementations, false alarm reduction reaches 88%, and customer complaints about security interactions drop 95%.</p>

<h3>Queue Management: Eliminating Wait Time</h3>
<p>Computer vision monitors checkout lines and optimizes staffing in real-time. Cameras count customers in each line, measure wait times with millisecond precision, predict abandonment risk, and trigger alerts to open additional registers during surges.</p>
<p><strong>Results:</strong> Department stores report average wait time reduced from 8.5 minutes to 2.3 minutes (73% reduction), queue abandonment drops from 12% to 1.8%, and conversion rate improves 4.2%.</p>
    `,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=450&fit=crop",
    readTime: "4 min read",
    date: "March 12, 2024",
  },
  {
    id: 3,
    title: "Autonomous Vehicles - The Eyes of Self-Driving Cars",
    excerpt:
        "Self-driving vehicles represent the most demanding application of computer vision ever attempted. The system must interpret complex, dynamic environments in real-time with near-perfect accuracy.",
    content: `
<h2>Vision-Powered Transportation</h2>
<p>Self-driving vehicles represent perhaps the most demanding application of computer vision technology ever attempted. The system must interpret complex, dynamic environments in real-time with near-perfect accuracy—lives depend on it. Modern autonomous vehicles use 8-12 cameras providing complete 360-degree coverage, supplemented by LiDAR, radar, GPS, and ultrasonic sensors.</p>

<h3>Multi-Sensor Fusion for Robust Perception</h3>
<p>No single sensor is perfect. Cameras see details but struggle with distance. LiDAR provides accurate depth but limited range. Radar works in bad weather but has low resolution. Fusion combines strengths and compensates for weaknesses.</p>
<p><strong>LiDAR:</strong> Emits laser pulses creating precise 3D point clouds with ±2cm accuracy, up to 200+ meters range. <strong>Radar:</strong> Provides long-range detection and measures velocity directly, penetrating fog, rain, and snow effectively. <strong>GPS + IMU:</strong> Provides global position and precise vehicle motion state, essential for localization on high-definition maps.</p>

<h3>Computer Vision Algorithms: Teaching Cars to See</h3>
<p><strong>Object Detection & Classification:</strong> State-of-the-art performance achieves 99.8% vehicle detection at 50+ meters, 97.5% pedestrian detection, 99.2% traffic sign recognition, and 98.9% lane detection in good conditions.</p>
<p><strong>Traffic Sign & Signal Recognition:</strong> Deep learning approaches trained on millions of annotated sign images achieve 99.7% stop sign detection, 98.8% speed limit sign detection, and 99.3% traffic light detection.</p>
<p><strong>Lane Detection & Path Planning:</strong> AI systems identify painted lines in various conditions, understand road surface and drivable areas, and execute sophisticated path planning from global routing through local trajectory optimization to reactive obstacle avoidance.</p>

<h3>Pedestrian Detection & Intent Prediction</h3>
<p>Pedestrians are the hardest challenge due to appearance variation, unpredictable behavior, and occlusion. Advanced techniques include pose estimation to identify body keypoints, motion analysis to distinguish walking from standing, and intent prediction based on body orientation and head movements.</p>
<p><strong>Safety Strategies:</strong> Detection range reaches 50+ meters for adults, reaction time is less than 200ms from detection to braking, with false positive rates below 0.1% and miss rates under 2.5% in good conditions.</p>

<h3>Real-World Performance: How Safe Are They Really?</h3>
<p><strong>Waymo:</strong> 20+ million autonomous miles with 0.23 disengagements per 1,000 miles and zero fatal accidents in autonomous mode, compared to human drivers averaging 1 accident per 165,000 miles.</p>
<p><strong>Autonomous Delivery Vehicles:</strong> 500,000+ autonomous miles with zero injury accidents, demonstrating strong performance in controlled low-speed environments.</p>

<h3>Current Limitations & Active Research</h3>
<p><strong>Weather Challenges:</strong> Heavy rain reduces visibility, snow covers lane markings, fog scatters LiDAR beams. <strong>Edge Cases:</strong> Construction zones, hand signals from police, unusual vehicles, and animals. <strong>Urban Complexity:</strong> Dense pedestrian crowds, cyclists, double-parked delivery trucks, and aggressive drivers. Research continues on multi-wavelength sensors, map-free navigation, and multi-agent prediction.</p>

<h3>Business Applications Today</h3>
<p><strong>Last-Mile Delivery:</strong> Strongest use case with low speeds, defined routes, and 60-70% labor cost savings. <strong>Long-Haul Trucking:</strong> Highways simpler than urban streets, addressing critical driver shortage. <strong>Ride-Hailing:</strong> High vehicle utilization with projected cost per mile of $2.50 autonomous vs. $3.50 human driver. <strong>Campus Shuttles:</strong> Closed environments with fastest path to profitability.</p>
    `,
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=450&fit=crop",
    readTime: "6 min read",
    date: "March 10, 2024",
  },
]

export default function AIVisionBlog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">AI Vision Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest developments and applications of computer vision technology across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mt-2">{post.excerpt}</p>
                    <div className="mt-4">
                      <button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                          onClick={() => setSelectedPost(post)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {selectedPost && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
                  <div className="p-8 md:p-12">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold text-black leading-snug pr-4">{selectedPost.title}</h3>
                      <button
                          className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
                          onClick={() => setSelectedPost(null)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                      <span>{selectedPost.date}</span>
                      <span>•</span>
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <img
                        src={selectedPost.image || "/placeholder.svg"}
                        alt={selectedPost.title}
                        className="w-full h-64 object-cover rounded-lg mb-8"
                    />
                    <div
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: selectedPost.content
                              .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-black mt-8 mb-4">')
                              .replace(/<h3>/g, '<h3 class="text-2xl font-semibold text-black mt-6 mb-3">')
                              .replace(/<p>/g, '<p class="text-base mb-4 leading-7">')
                              .replace(/<strong>/g, '<strong class="font-semibold text-black">'),
                        }}
                    />
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  )
}
