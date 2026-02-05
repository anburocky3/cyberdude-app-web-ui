import { Compass, Sparkles } from "lucide-react";

const ExploreHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 section-pattern opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-100 h-100 bg-accent/10 rounded-full blur-3xl" />

            <div className="container relative z-10 px-4 py-20">
                <div
                    className="text-center max-w-4xl mx-auto"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Your Learning Journey Starts Here</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-foreground">Explore </span>
                        <span className="gradient-text">CyberDude</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Discover what you can learn, how you&apos;ll progress, and how we prepare you for real opportunities.
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#skill-programs"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all glow-primary"
                        >
                            <Compass className="w-5 h-5" />
                            Start Exploring
                        </a>
                        <a
                            href="#paths"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium border border-border hover:bg-secondary/80 transition-all"
                        >
                            View Learning Paths
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreHero;
