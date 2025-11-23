import type { ReactNode } from "react";
import Sidebar from "../component/Sidebar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Sidebar />
            <main className="pl-[240px] min-h-screen">
                {children}
            </main>
        </div>
    );
}
