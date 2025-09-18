
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AniComponent from "../component/animationforheader.tsx";
import { HoverBorderGradient } from "../component/ui/hover-border-gradient.tsx";
import Contact from "../component/contact.tsx";
import AIBusinessCarousel from "../component/servicesCourasel.tsx";
import AIVisionBlog from "../component/blog.tsx";
import ServicesPage from "../component/services.tsx";

function Home() {
    const Counter: React.FC<{ endValue: number | string; duration?: number; isPercentage?: boolean; isVisible: boolean }> = ({ endValue, duration = 2000, isPercentage = false, isVisible }) => {
        const [count, setCount] = useState<number | string>(typeof endValue === "number" ? 0 : endValue);

        useEffect(() => {
            if (!isVisible) return;

            if (typeof endValue !== "number") {
                setCount(endValue);
                return;
            }

            const startTime = performance.now();
            const animate = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const value = Math.floor(progress * endValue);
                setCount(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(isPercentage ? `${endValue}%` : endValue);
                }
            };

            requestAnimationFrame(animate);
        }, [endValue, duration, isPercentage, isVisible]);

        return <span>{count}</span>;
    };

    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 30% of section is visible
        triggerOnce: true, // Only trigger once
    });

    return (
        <main className="relative font-inter">
            <div className="relative h-screen bg-blue-900">
                <AniComponent />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/60 to-blue-900/40 z-10"></div>
                    <div className="relative text-center text-white max-w-4xl px-6 z-30">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-2xl">
                            AI-Powered Business Intelligence
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed text-pretty drop-shadow-lg">
                            Transform your business with cutting-edge computer vision, analytics, and smart automation solutions
                        </p>
                        <HoverBorderGradient
                            containerClassName="bg-white text-blue-900 font-semibold px-8 py-3 text-lg shadow-xl"
                        >
                            Explore Solutions
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>

            <ServicesPage/>

            <section ref={ref} className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Why Businesses Choose Us
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Proven results that drive real business value and competitive advantage
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {[
                            { endValue: 40, isPercentage: true, title: "Cost Reduction", desc: "Save up to 40% on operational costs through automation and efficiency improvements" },
                            { endValue: 80, isPercentage: true, title: "Time Savings", desc: "Reduce manual tasks by 80% with automated systems and real-time data processing" },
                            { endValue: "✓", title: "Reduced Manpower", desc: "Optimize workforce allocation and reduce dependency on manual monitoring" },
                            { endValue: 25, isPercentage: true, title: "Increased Revenue", desc: "Boost sales by 25% through data-driven insights and optimized operations" },
                            { endValue: 99, isPercentage: true, title: "Improved Accuracy", desc: "Achieve 99% accuracy in inventory management and data collection" },
                            { endValue: "∞", title: "Scalable Solutions", desc: "Easily expand across multiple locations with cloud-based infrastructure" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-8">
                                <div className="flex items-center justify-center text-6xl font-extrabold text-gray-900 mb-4">
                                    <Counter
                                        endValue={item.endValue}
                                        isPercentage={item.isPercentage}
                                        isVisible={inView}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <AIBusinessCarousel/>
            <AIVisionBlog/>
            <Contact />
        </main>
    );
}

export default Home;

