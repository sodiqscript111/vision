// src/page/BlogDetails.tsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blogPosts";
import PageHeader from "../component/ui/PageHeader";

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">Post not found</h2>
                    <p className="text-slate-600 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title={post.title}
                subtitle={post.excerpt}
                backLink="/blog"
                backText="Back to Blog"
                badge="Blog Post"
            />

            <div className="max-w-4xl mx-auto px-6 py-16 -mt-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
                >
                    <div className="relative h-64 md:h-96 overflow-hidden">
                        <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-500" />
                                <span>{post.author}</span>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg prose-slate max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: post.content
                                    .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 font-display">')
                                    .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-slate-800 mt-8 mb-4 font-display">')
                                    .replace(/<p>/g, '<p class="text-slate-600 leading-relaxed mb-6">')
                                    .replace(/<strong>/g, '<strong class="font-semibold text-slate-900">')
                                    .replace(/<ul>/g, '<ul class="list-disc pl-6 space-y-2 text-slate-600 mb-8">')
                                    .replace(/<li>/g, '<li class="pl-2">')
                            }}
                        />

                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Articles
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
