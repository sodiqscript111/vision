"use client";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../blogPosts";
import { ChevronLeft } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const child = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Post not found</h2>
                    <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        <ChevronLeft size={18} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <motion.div
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{post.date}</span>
                </div>
            </motion.div>

            <div className="max-w-3xl mx-auto px-6 py-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={child} className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-balance">
                            {post.title}
                        </h1>
                    </motion.div>

                    <motion.div variants={child} className="mb-10 flex items-center gap-4 text-sm text-gray-500 pb-10 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{post.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{post.date}</span>
                    </motion.div>

                    <motion.div variants={child} className="mb-12">
                        <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full aspect-video object-cover rounded-lg bg-gray-100"
                        />
                    </motion.div>

                    <motion.div
                        variants={child}
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-4">')
                                .replace(/<h3>/g, '<h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-3">')
                                .replace(/<p>/g, '<p class="text-base mb-5 leading-relaxed">')
                                .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">'),
                        }}
                    />
                </motion.div>

                <motion.div
                    variants={child}
                    className="mt-16 pt-10 border-t border-gray-200"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to all posts</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
