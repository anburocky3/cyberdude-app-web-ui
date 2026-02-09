import Link from "next/link";
import { Zap, Rocket, Users2, Trophy, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const hackathonTypes = [
    {
        icon: Rocket,
        title: "Beginner Hackathons",
        description: "Simple problem statements with guidance. Perfect for first-timers.",
        color: "primary",
        href: "/experiment/explore/pages/hackathon/:beginner",
    },
    {
        icon: Users2,
        title: "Team Hackathons",
        description: "Collaborate, divide responsibilities, and communicate like real teams.",
        color: "accent",
        href: "/experiment/explore/pages/hackathon/:team",
    },
    {
        icon: Trophy,
        title: "Challenge Hackathons",
        description: "Solve real problems under time pressure. Push your limits.",
        color: "warning",
        href: "/experiment/explore/pages/hackathon/:challenge",
    },
];

const benefits = [
    "Apply concepts in real projects",
    "Work with others",
    "Think under pressure",
    "Learn from mistakes quickly",
];

const HackathonsSection = () => {
    return (
        <section id="hackathons" className="pb-24 py-5 relative">
            <div className="container mx-auto relative z-10 px-4">
                <SectionHeader
                    icon={Zap}
                    label="Build & Learn"
                    title="Hackathons"
                    description="Learning-focused build events where you apply your skills in real time. Not just competitions structured learning experiences."
                />

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {hackathonTypes.map((type) => (
                        <div
                            key={type.title}
                        >
                            <Link
                                href={type.href}
                                className="block h-full group"
                            >
                                <div className="p-8 h-full flex flex-col items-start justify-center bg-zinc-900 rounded-lg transition duration-300 hover:-translate-y-0.75 border border-border">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${type.color === "primary" ? "bg-blue-400/10 text-blue-400 border border-blue-400/20" :
                                        type.color === "accent" ? "bg-red-400/10 text-red-400 border border-red-400/20" :
                                            "bg-green-400/10 text-green-400 border border-green-400/20"
                                        }`}>
                                        <type.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                                    <p className="text-muted-foreground flex-1">{type.description}</p>

                                    <div className="flex items-center justify-center gap-2 text-orange-600 font-medium mt-6 group-hover:gap-3 transition-all">
                                        Explore Events
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    className="p-8 rounded-2xl bg-zinc-950/90 border border-border"
                >
                    <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Why Hackathons Matter</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="p-4 rounded-lg bg-zinc-900 border border-border text-center hover:-translate-y-0.75 transition duration-300"
                            >
                                <p className="text-foreground font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonsSection;
