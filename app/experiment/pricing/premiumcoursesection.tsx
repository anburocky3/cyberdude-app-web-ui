import {
    Rocket,
    Shield,
    Award,
    Users,
    Code2,
    Database,
    Cloud,
    Briefcase,
    CheckCircle,
    ArrowRight,
    Star,
    Target,
    FileCheck
} from "lucide-react";

const PremiumCoursesSection = () => {
    const careerTracks = [
        {
            title: "MERN Stack Developer",
            subtitle: "MongoDB, Express, React, Node.js",
            duration: "6 months",
            projects: 12,
            salary: "₹6-12 LPA",
            icon: Code2,
            gradient: "from-primary to-cyber-purple"
        },
        {
            title: "LAMP Stack Developer",
            subtitle: "Linux, Apache, MySQL, PHP",
            duration: "5 months",
            projects: 10,
            salary: "₹5-10 LPA",
            icon: Database,
            gradient: "from-cyber-orange to-cyber-pink"
        },
        {
            title: "Cloud & DevOps Engineer",
            subtitle: "AWS, Docker, Kubernetes, CI/CD",
            duration: "6 months",
            projects: 8,
            salary: "₹8-15 LPA",
            icon: Cloud,
            gradient: "from-accent to-primary"
        },
        {
            title: "Full-Stack + System Design",
            subtitle: "Advanced architecture & scaling",
            duration: "8 months",
            projects: 15,
            salary: "₹12-25 LPA",
            icon: Briefcase,
            gradient: "from-cyber-purple to-cyber-pink"
        },
    ];

    const differentiators = [
        {
            icon: Award,
            title: "Verified Digital Credentials",
            description: "Not just completion certificates. Our credentials are backed by skill assessments, project reviews, and practical verification that recruiters trust.",
            highlights: ["Skill-verified badges", "Project assessments", "Industry recognition"]
        },
        {
            icon: Users,
            title: "Direct Mentorship & Guidance",
            description: "Weekly mentor touchpoints, live AMAs with industry experts, and structured doubt-clearing instead of scattered comments.",
            highlights: ["Weekly 1-on-1 sessions", "Expert AMAs", "Priority support"]
        },
        {
            icon: Briefcase,
            title: "Portfolio-Ready Projects",
            description: "Build resume-grade projects with GitHub-ready repositories. Case studies you can confidently explain in interviews.",
            highlights: ["GitHub portfolios", "Real client projects", "Interview prep"]
        },
    ];

    return (
        <section id="premium" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-cyber-orange/5 to-background" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyber-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-orange/10 border border-cyber-orange/30 mb-6">
                        <Rocket className="w-4 h-4 text-cyber-orange" />
                        <span className="text-sm font-medium text-cyber-orange">Career Transformation</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text-premium glow-text-orange">Premium Career Tracks</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Where learning turns into employability. Deep career tracks built for serious learners
                        who want results, not just videos.
                    </p>
                </div>

                {/* Career Tracks Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {careerTracks.map((track, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-card border border-border hover:border-cyber-orange/50 transition-all duration-300 card-hover relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${track.gradient} opacity-10 blur-2xl rounded-full`} />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${track.gradient} flex items-center justify-center`}>
                                        <track.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10">
                                        <Star className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-medium text-accent">{track.salary}</span>
                                    </div>
                                </div>

                                <h3 className="font-display text-xl font-semibold mb-1 text-foreground">{track.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{track.subtitle}</p>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Target className="w-4 h-4" />
                                        {track.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FileCheck className="w-4 h-4" />
                                        {track.projects} projects
                                    </span>
                                </div>

                                <button className="w-full group-hover:border-cyber-orange/50 group-hover:text-cyber-orange border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] h-11 px-6 py-2">
                                    Explore Track <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Differentiators */}
                <div className="mb-16">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                        What Makes Premium Different?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {differentiators.map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:border-cyber-orange/30 transition-all card-hover">
                                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyber-orange to-cyber-pink flex items-center justify-center mb-6 glow-box-orange">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                                <p className="text-muted-foreground mb-4">{item.description}</p>
                                <ul className="space-y-2">
                                    {item.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                            <span className="text-muted-foreground">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Learning Highlight */}
                <div className="p-8 md:p-12 rounded-2xl bg-linear-to-r from-cyber-orange/10 via-cyber-pink/10 to-cyber-purple/10 border border-cyber-orange/20 glow-box-orange">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                Project-First Learning
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Every module ends with real-world tasks that mirror industry expectations.
                                You won&apos;t just watch—you&apos;ll build, ship, and showcase.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyber-orange/20 flex items-center justify-center">
                                        <Code2 className="w-4 h-4 text-cyber-orange" />
                                    </div>
                                    <span className="text-foreground">Real client project simulations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyber-pink/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-cyber-pink" />
                                    </div>
                                    <span className="text-foreground">Code reviews by senior developers</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyber-purple/20 flex items-center justify-center">
                                        <Briefcase className="w-4 h-4 text-cyber-purple" />
                                    </div>
                                    <span className="text-foreground">Interview-ready case studies</span>
                                </li>
                            </ul>
                            <button className="bg-linear-to-r from-[hsl(25,100%,55%)] to-[hsl(330,100%,60%)] text-white hover:shadow-[0_0_30px_hsl(25,100%,55%,0.5)] hover:scale-105 h-14 rounded-lg px-10 text-base">
                                Start Premium Track <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl bg-linear-to-br from-cyber-orange/20 to-cyber-pink/20 border border-cyber-orange/30 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="font-display text-5xl font-bold gradient-text-premium mb-2">15+</div>
                                    <div className="text-muted-foreground">Industry-Grade Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumCoursesSection;
