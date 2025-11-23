// src/SolutionsList.tsx
import { solutions } from '../solutions';
import PageHeader from '../component/ui/PageHeader';
import GlassCard from '../component/ui/GlassCard';

export default function SolutionsList() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="All Solutions"
                subtitle="Explore our complete range of AI-powered solutions designed to transform your business operations."
                badge="Our Portfolio"
            />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <GlassCard
                                key={solution.id}
                                title={solution.title.split(" - ")[1] || solution.title}
                                description={solution.description}
                                to={`/solutions/${solution.id}`}
                                accentColor="blue"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
