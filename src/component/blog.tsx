// src/BlogSection.tsx (or AIVisionBlog.tsx - the list view)
"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../blogPosts";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AIVisionBlog() {
  return (
      <section className="py-16 px-4 bg-white mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">AI Vision Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest developments and applications of computer vision technology across industries
            </p>
          </div>

          <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
                <motion.div
                    key={post.id}
                    variants={child}
                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
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
                      <Link
                          to={`/blog/${post.id}`}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 block text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
