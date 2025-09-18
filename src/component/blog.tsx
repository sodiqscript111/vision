
"use client"

import { useState } from "react"
import healthcareImage from "../assets/medical-ai-technology-with-stethoscope-and-digital.jpg"
import retailImage from "../assets/futuristic-retail-store-with-ai-powered-smart-chec.jpg"
import vehiclesImage from "../assets/self-driving-car-with-ai-sensors-and-computer-visi.jpg"

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
    title: "The Future of Medical Imaging: How AI Vision is Revolutionizing Healthcare",
    excerpt:
      "Discover how computer vision technology is transforming medical diagnostics, from detecting cancer in X-rays to analyzing MRI scans with unprecedented accuracy.",
    content: `
<h2>Transforming Medical Diagnostics</h2>
<p>Artificial Intelligence in medical imaging represents one of the most promising applications of computer vision technology. Healthcare professionals are now leveraging AI-powered systems to detect diseases earlier, analyze medical scans more accurately, and provide better patient outcomes.</p>

<h3>Early Disease Detection</h3>
<p>AI vision systems can identify subtle patterns in medical images that might be missed by the human eye. In radiology, these systems are particularly effective at detecting early-stage cancers, analyzing mammograms, and identifying abnormalities in CT scans and MRIs.</p>

<h3>Enhanced Accuracy and Speed</h3>
<p>Studies have shown that AI-assisted diagnosis can improve accuracy rates by up to 30% while reducing analysis time from hours to minutes. This efficiency allows healthcare providers to treat more patients and make faster, more informed decisions.</p>

<h3>The Road Ahead</h3>
<p>As AI vision technology continues to evolve, we can expect to see even more sophisticated applications in healthcare, including real-time surgical guidance, personalized treatment planning, and predictive health analytics.</p>
    `,
    image: healthcareImage,
    readTime: "5 min read",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "Smart Retail: How Computer Vision is Reshaping the Shopping Experience",
    excerpt:
      "Explore the cutting-edge applications of AI vision in retail, from automated checkout systems to personalized shopping recommendations and inventory management.",
    content: `
<h2>The Retail Revolution</h2>
<p>Computer vision is fundamentally changing how we shop and how retailers operate. From Amazon Go's cashier-less stores to smart fitting rooms, AI vision technology is creating more efficient, personalized, and convenient shopping experiences.</p>

<h3>Automated Checkout Systems</h3>
<p>Smart checkout systems use computer vision to identify products automatically, eliminating the need for traditional scanning. Customers can simply walk out with their items, and the system handles payment processing seamlessly.</p>

<h3>Inventory Management</h3>
<p>AI vision systems can monitor shelf stock levels in real-time, automatically detecting when products need restocking. This technology reduces out-of-stock situations and optimizes inventory turnover.</p>

<h3>Personalized Shopping</h3>
<p>Computer vision enables retailers to analyze customer behavior, preferences, and shopping patterns to provide personalized product recommendations and targeted marketing campaigns.</p>

<h3>Loss Prevention</h3>
<p>Advanced surveillance systems powered by AI can detect suspicious behavior and prevent theft more effectively than traditional security measures, while respecting customer privacy.</p>
    `,
    image: retailImage,
    readTime: "4 min read",
    date: "March 12, 2024",
  },
  {
    id: 3,
    title: "Autonomous Vehicles: The Eyes of Self-Driving Cars",
    excerpt:
      "Learn how computer vision enables autonomous vehicles to navigate safely, recognize traffic signs, detect pedestrians, and make split-second decisions on the road.",
    content: `
<h2>Vision-Powered Transportation</h2>
<p>Computer vision is the cornerstone technology that enables autonomous vehicles to perceive and understand their environment. These sophisticated systems process visual data from multiple cameras and sensors to make real-time driving decisions.</p>

<h3>Object Detection and Recognition</h3>
<p>Self-driving cars use advanced computer vision algorithms to identify and classify objects in their environment, including other vehicles, pedestrians, cyclists, traffic signs, and road markings. This capability is essential for safe navigation.</p>

<h3>Depth Perception and Distance Estimation</h3>
<p>AI vision systems calculate distances to objects and create detailed 3D maps of the vehicle's surroundings. This spatial awareness is crucial for maintaining safe following distances and executing maneuvers like lane changes and parking.</p>

<h3>Weather and Lighting Adaptation</h3>
<p>Modern computer vision systems can adapt to various weather conditions and lighting scenarios, from bright sunlight to heavy rain or nighttime driving. Advanced algorithms compensate for reduced visibility and maintain reliable object detection.</p>

<h3>Predictive Behavior Analysis</h3>
<p>AI systems can predict the likely behavior of other road users by analyzing their movement patterns, helping autonomous vehicles anticipate and react to potential hazards before they occur.</p>
    `,
    image: vehiclesImage,
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
                  src={post.image}
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
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-black">{selectedPost.title}</h3>
                  <button
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => setSelectedPost(null)}
                  >
                    &times;
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div
                  className="prose prose-lg max-w-none text-black"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
