import { Link, useLocation } from "react-router-dom";
import { Home, Layers, Zap, BookOpen, MessageSquare, Settings, User } from "lucide-react";

export default function Sidebar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { name: "Home", path: "/", icon: Home },
        { name: "Services", path: "/services", icon: Layers },
        { name: "Solutions", path: "/solutions", icon: Zap },
        { name: "Blog", path: "/blog", icon: BookOpen },
        { name: "Contact", path: "/contact", icon: MessageSquare },
    ];

    return (
        <aside className="h-screen w-[240px] bg-slate-50 border-r border-slate-200 flex flex-col fixed left-0 top-0 z-40">
            {/* Logo Area */}
            <div className="h-14 flex items-center px-4 border-b border-slate-200/50">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs">V</span>
                    </div>
                    <span className="font-display font-semibold text-slate-900 tracking-tight">VisionTech</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
                <div className="px-2 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Menu</div>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                            }`}
                    >
                        <item.icon size={16} className={isActive(item.path) ? "text-blue-600" : "text-slate-400"} />
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* User / Settings Area */}
            <div className="p-2 border-t border-slate-200">
                <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-colors text-left">
                    <Settings size={16} className="text-slate-400" />
                    Settings
                </button>
                <div className="mt-2 flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-100/50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <User size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">Demo User</p>
                        <p className="text-xs text-slate-500 truncate">user@visiontech.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
