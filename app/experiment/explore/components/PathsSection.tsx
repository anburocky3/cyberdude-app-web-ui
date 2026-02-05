import Link from 'next/link';
import { Route, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const paths = [
    {
        title: "Full Stack Path",
        description: "See how frontend and backend skills grow together",
        stages: ["Foundation", "Frontend Core", "Backend Core", "Integration", "Full Application"],
        href: "/experiment/explore/pages/path/fullstack",
        gradient: "from-primary to-accent",
    },
    {
        title: "Frontend Path",
        description: "From basic UI to structured interface development",
        stages: ["Layout Basics", "Styling & Responsive", "Interactive Behavior", "Component Thinking"],
        href: "/experiment/explore/pages/path/frontend",
        gradient: "from-accent to-primary",
    },
    {
        title: "Backend Path",
        description: "Build reliable and scalable server-side systems",
        stages: ["Core Logic", "Data Handling", "APIs", "Performance"],
        href: "/experiment/explore/pages/path/backend",
        gradient: "from-success to-primary",
    },
];

const PathsSection = () => {
    return (
        <section id="paths" className="py-24 relative">
            <div className="container relative z-10 px-4">
                <SectionHeader
                    icon={Route}
                    label="Know Your Journey"
                    title="Program Detailed Paths"
                    description="See the full learning journey upfront. Know what comes next and stay focused throughout."
                />

                <div className="space-y-8">
                    {paths.map((path) => (
                        <div
                            key={path.title}
                        >
                            <Link
                                href={path.href}
                                className="block gradient-border card-hover group"
                            >
                                <div className="p-8 bg-card rounded-lg">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                        <div className="lg:w-1/3">
                                            <h3 className="text-2xl font-semibold text-foreground mb-2">{path.title}</h3>
                                            <p className="text-muted-foreground mb-4">{path.description}</p>
                                            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                                View Full Path
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        <div className="lg:w-2/3">
                                            <div className="flex flex-wrap items-center gap-3">
                                                {path.stages.map((stage, i) => (
                                                    <div key={stage} className="flex items-center gap-3">
                                                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
                                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                                            <span className="text-sm text-foreground whitespace-nowrap">{stage}</span>
                                                        </div>
                                                        {i < path.stages.length - 1 && (
                                                            <div className={`w-8 h-0.5 bg-gradient-to-r ${path.gradient} hidden sm:block`} />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-muted-foreground italic">
                        &quot;When you know the path, learning feels less overwhelming and more achievable.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PathsSection;
