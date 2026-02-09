import { Compass, Sparkles } from "lucide-react";

const ExploreHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 section-pattern opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto relative z-10 px-4 py-20">
                <div
                    className="text-center max-w-4xl mx-auto"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-border mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-muted-foreground">Your Learning Journey Starts Here</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-foreground">Explore </span>
                        <span className="custom-gradient">CyberDude</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Discover what you can learn, how you&apos;ll progress, and how we prepare you for real opportunities.
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#skill-programs"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-full font-semibold"
                        >
                            <Compass className="w-5 h-5" />
                            Start Exploring
                        </a>
                        <a
                            href="#paths"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-foreground rounded-full font-semibold border border-border hover:bg-zinc-900/80 transition-all"
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
