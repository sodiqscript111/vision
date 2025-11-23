import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backLink?: string;
    backText?: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, backLink, backText, badge }: PageHeaderProps) {
    return (
        <div className="relative py-20 px-6 overflow-hidden bg-slate-900 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-slate-900/90" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {backLink && (
                    <Link
                        to={backLink}
                        className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">{backText || 'Back'}</span>
                    </Link>
                )}

                <div className="max-w-4xl">
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-xs font-semibold text-blue-100 uppercase tracking-wider">{badge}</span>
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance font-display">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-light text-balance">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
