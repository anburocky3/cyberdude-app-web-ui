import Link from "next/link";
import { ArrowLeft, Rocket, Users2, Trophy, Calendar, Clock, Award, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const hackathonData = {
    beginner: {
        icon: Rocket,
        title: "Beginner Hackathons",
        description: "Designed for learners who are new to development. Simple problem statements with guidance and collaboration.",
        color: "primary",
        features: [
            { icon: Award, title: "Simple Challenges", description: "Beginner-friendly problem statements" },
            { icon: Users2, title: "Guidance Available", description: "Mentors to help you along the way" },
            { icon: Clock, title: "Flexible Timeline", description: "More time to learn and build" },
        ],
        benefits: [
            "Overcome fear of building",
            "Learn by doing",
            "Collaborate with peers",
            "Get feedback on your work",
        ],
        upcomingEvents: [
            { title: "Build Your First Portfolio", date: "March 15, 2025", participants: 50 },
            { title: "HTML/CSS Challenge", date: "March 22, 2025", participants: 75 },
        ],
    },
    team: {
        icon: Users2,
        title: "Team Hackathons",
        description: "Focus on collaboration. Learn to work in teams, divide responsibilities, and communicate ideas clearly.",
        color: "accent",
        features: [
            { icon: Users2, title: "Team Formation", description: "Join or form teams of 2-4 members" },
            { icon: Calendar, title: "Sprint Style", description: "Simulate real project environments" },
            { icon: Award, title: "Role-Based", description: "Practice different team roles" },
        ],
        benefits: [
            "Practice teamwork skills",
            "Learn to divide work",
            "Improve communication",
            "Experience real workflows",
        ],
        upcomingEvents: [
            { title: "E-commerce Team Build", date: "March 18, 2025", participants: 40 },
            { title: "Social App Challenge", date: "March 25, 2025", participants: 60 },
        ],
    },
    challenge: {
        icon: Trophy,
        title: "Challenge-Based Hackathons",
        description: "Solve real problems under time pressure. Push your limits and improve your problem-solving skills.",
        color: "warning",
        features: [
            { icon: Trophy, title: "Competitive", description: "Compete for top positions" },
            { icon: Clock, title: "Time Pressure", description: "24-48 hour sprints" },
            { icon: Award, title: "Real Problems", description: "Industry-relevant challenges" },
        ],
        benefits: [
            "Think under pressure",
            "Solve real problems",
            "Push your limits",
            "Grow faster",
        ],
        upcomingEvents: [
            { title: "Algorithm Sprint", date: "March 20, 2025", participants: 100 },
            { title: "Full Stack Challenge", date: "March 28, 2025", participants: 80 },
        ],
    },
};

const HackathonPage = async ({
    params,
}: {
    params: Promise<{ hackathon: string; }>;
}) => {

    const { hackathon } = await params;

    if (!hackathon || !hackathonData[hackathon as keyof typeof hackathonData]) {
        return <Link href="/"></Link>;
    }

    const hackathonDatum = hackathonData[hackathon as keyof typeof hackathonData];
    const Icon = hackathonDatum.icon;

    const colorClasses = {
        primary: "bg-blue-400/10 text-blue-400 border-blue-400/20",
        accent: "bg-red-400/10 text-red-400 border-red-400/20",
        warning: "bg-green-400/10 text-green-400 border-green-400/20",
    };

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="relative overflow-hidden">

                    <div className="container mx-auto relative z-10 px-4 py-12">
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Explore
                        </Link>

                        <div
                            className="flex items-start gap-6"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${colorClasses[hackathonDatum.color as keyof typeof colorClasses]}`}>
                                <Icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{hackathonDatum.title}</h1>
                                <p className="text-xl text-muted-foreground max-w-2xl">{hackathonDatum.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12">
                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {hackathonDatum.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-8 rounded-2xl bg-zinc-950/90 border border-border text-center hover:-translate-y-0.75 transition duration-300"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border ${colorClasses[hackathonDatum.color as keyof typeof colorClasses]}`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Benefits */}
                        <div
                            className="p-8 rounded-2xl bg-zinc-950/90 border border-border"
                        >
                            <h2 className="text-2xl font-semibold text-foreground mb-6">What You&apos;ll Gain</h2>
                            <div className="space-y-4">
                                {hackathonDatum.benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-border">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        <span className="text-foreground">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div
                            className="p-8 rounded-2xl bg-zinc-950/90 border border-border"
                        >
                            <h2 className="text-2xl font-semibold text-foreground mb-6">Upcoming Events</h2>
                            <div className="space-y-4">
                                {hackathonDatum.upcomingEvents.map((event) => (
                                    <div key={event.title} className="p-6 rounded-xl bg-zinc-900/50 border border-border group hover:border-orange-500/50 transition-colors">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users2 className="w-4 h-4" />
                                                {event.participants} spots
                                            </span>
                                        </div>
                                        <button className="flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all cursor-pointer">
                                            Register Now
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-16 text-center"
                    >
                        <button className="px-8 py-4 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-lg cursor-pointer font-semibold">
                            View All Hackathons
                        </button>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default HackathonPage;
