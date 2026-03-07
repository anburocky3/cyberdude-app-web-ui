import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const pathsData = {
    fullstack: {
        title: "Full Stack Development Path",
        description: "See how frontend and backend skills grow together into complete application development mastery.",
        stages: [
            {
                title: "Foundation",
                description: "Build your core programming foundation",
                topics: ["HTML & CSS", "JavaScript fundamentals", "Git & version control", "Command line basics"],
                duration: "3-4 weeks",
            },
            {
                title: "Frontend Core",
                description: "Master client-side development",
                topics: ["React fundamentals", "Component architecture", "State management", "Styling solutions"],
                duration: "4-5 weeks",
            },
            {
                title: "Backend Core",
                description: "Learn server-side development",
                topics: ["Node.js & Express", "Database design", "REST API development", "Authentication"],
                duration: "4-5 weeks",
            },
            {
                title: "Integration",
                description: "Connect frontend with backend",
                topics: ["API integration", "Full-stack patterns", "Error handling", "Security basics"],
                duration: "2-3 weeks",
            },
            {
                title: "Full Application",
                description: "Build and deploy complete apps",
                topics: ["Project planning", "Deployment", "Performance", "Real-world projects"],
                duration: "3-4 weeks",
            },
        ],
    },
    frontend: {
        title: "Frontend Development Path",
        description: "From basic UI creation to structured interface development.",
        stages: [
            {
                title: "Layout Basics",
                description: "Master HTML structure and basic styling",
                topics: ["Semantic HTML", "CSS fundamentals", "Box model", "Document flow"],
                duration: "2-3 weeks",
            },
            {
                title: "Styling & Responsive",
                description: "Create beautiful, responsive designs",
                topics: ["Flexbox & Grid", "Responsive design", "CSS animations", "Design systems"],
                duration: "3-4 weeks",
            },
            {
                title: "Interactive Behavior",
                description: "Add interactivity with JavaScript",
                topics: ["DOM manipulation", "Event handling", "Async JavaScript", "Browser APIs"],
                duration: "3-4 weeks",
            },
            {
                title: "Component Thinking",
                description: "Build with modern frameworks",
                topics: ["React components", "Hooks & state", "Component patterns", "Testing"],
                duration: "4-5 weeks",
            },
        ],
    },
    backend: {
        title: "Backend Development Path",
        description: "Build reliable and scalable server-side systems.",
        stages: [
            {
                title: "Core Logic",
                description: "Master programming fundamentals",
                topics: ["Node.js basics", "Data structures", "Algorithms", "Problem solving"],
                duration: "3-4 weeks",
            },
            {
                title: "Data Handling",
                description: "Work with databases effectively",
                topics: ["SQL databases", "NoSQL options", "Data modeling", "Query optimization"],
                duration: "3-4 weeks",
            },
            {
                title: "APIs",
                description: "Build robust API services",
                topics: ["REST principles", "Express.js", "Validation", "Documentation"],
                duration: "3-4 weeks",
            },
            {
                title: "Performance",
                description: "Build production-ready systems",
                topics: ["Security", "Caching", "Scaling", "Monitoring"],
                duration: "2-3 weeks",
            },
        ],
    },
};

const SkillPathDetail = async ({
    params,
}: {
    params: Promise<{ path: string; }>;
}) => {

    const { path } = await params;

    if (!path || !pathsData[path as keyof typeof pathsData]) {
        return <Link href="/"></Link>;
    }

    const pathDatum = pathsData[path as keyof typeof pathsData];

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 section-pattern opacity-30" />
                    <div className="absolute top-0 right-1/4 w-125 h-125 bg-orange-400/5 rounded-full blur-3xl" />

                    <div className="container mx-auto relative z-10 px-4 py-12">
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Explore
                        </Link>

                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{pathDatum.title}</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">{pathDatum.description}</p>
                        </div>
                    </div>
                </div>

                {/* Path Timeline */}
                <div className="container mx-auto px-4 py-12">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 theme-gradient hidden md:block" />

                        <div className="space-y-8">
                            {pathDatum.stages.map((stage, index) => (
                                <div
                                    key={stage.title}
                                    className="relative md:pl-24"
                                >
                                    {/* Timeline node */}
                                    <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-white border-4 border-border hidden md:flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    </div>

                                    <div className="p-8 rounded-2xl bg-zinc-950/90 border border-border hover:-translate-y-0.75 transition duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                            <div className="lg:w-1/3">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-medium text-orange-500">Stage {index + 1}</span>
                                                    <span className="px-2 py-0.5 rounded text-xs bg-zinc-900 text-muted-foreground">
                                                        {stage.duration}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-semibold text-foreground mb-2">{stage.title}</h3>
                                                <p className="text-muted-foreground">{stage.description}</p>
                                            </div>

                                            <div className="lg:w-2/3">
                                                <h4 className="text-sm font-medium text-muted-foreground mb-4">Topics Covered</h4>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {stage.topics.map((topic) => (
                                                        <div key={topic} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                                                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                                            <span className="text-foreground">{topic}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-16 text-center"
                    >
                        <p className="text-lg text-muted-foreground mb-6 italic">
                            &quot;When you know the path, learning feels less overwhelming and more achievable.&quot;
                        </p>
                        <button className="px-8 py-4 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-lg font-semibold cursor-pointer">
                            Start This Path
                        </button>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default SkillPathDetail;