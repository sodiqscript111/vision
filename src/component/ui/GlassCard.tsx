import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GlassCardProps {
    title: string;
    description?: string;
    children?: ReactNode;
    to?: string;
    className?: string;
    accentColor?: string;
}

export default function GlassCard({ title, description, children, to, className = "", accentColor = "blue" }: GlassCardProps) {
    const CardContent = () => (
        <>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${accentColor}-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

            <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-${accentColor}-600 transition-colors relative z-10 font-display`}>
                {title}
            </h3>

            {description && (
                <p className="text-slate-600 mb-6 leading-relaxed relative z-10 text-sm">
                    {description}
                </p>
            )}

            <div className="relative z-10">
                {children}
            </div>

            {to && (
                <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center text-${accentColor}-600 font-medium text-sm group/link`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
            )}
        </>
    );

    const baseClasses = `group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-${accentColor}-900/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${className}`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                <CardContent />
            </Link>
        );
    }

    return (
        <div className={baseClasses}>
            <CardContent />
        </div>
    );
}
