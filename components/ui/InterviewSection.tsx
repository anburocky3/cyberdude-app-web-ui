import Link from 'next/link';
import { Users, MessageSquare, FileText, Brain, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const interviewPrograms = [
    {
        icon: Brain,
        title: "Technical Interview Prep",
        description: "Practice common technical questions and step-by-step explanations.",
        features: ["Problem breakdown", "Clear explanations", "Pattern recognition"],
        href: "/explore/interview/technical",
    },
    {
        icon: MessageSquare,
        title: "Mock Interviews",
        description: "Simulate real interview scenarios with time pressure.",
        features: ["Answering under pressure", "Handling follow-ups", "Building confidence"],
        href: "/explore/interview/mock",
    },
    {
        icon: FileText,
        title: "Resume & Projects",
        description: "Learn to present your work and justify your choices.",
        features: ["Project explanations", "Technical decisions", "Learning experiences"],
        href: "/explore/interview/resume",
    },
];

const InterviewSection = () => {
    return (
        <section id="interviews" className="pb-24 py-5 relative">

            <div className="container mx-auto relative z-10 px-4">
                <SectionHeader
                    icon={Users}
                    label="Get Interview Ready"
                    title="Interview Programs"
                    description="Prepare for real technical interviews with confidence. Focus on thinking, explanation, and communication."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {interviewPrograms.map((program) => (
                        <div
                            key={program.title}
                        >
                            <Link
                                href={program.href}
                                className="block h-full group"
                            >
                                <div className="p-8 h-full flex flex-col bg-zinc-900 rounded-lg border border-border transition duration-300 hover:-translate-y-0.75">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-400/10 border border-orange-400/20 text-orange-400 mb-6">
                                        <program.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-1">{program.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {program.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                                        Start Preparing
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        "Technical question breakdown",
                        "Mock interview-style tasks",
                        "Problem-solving under time limits",
                        "Clear and structured explanations",
                    ].map((item) => (
                        <div key={item} className="p-4 rounded-lg bg-zinc-900/80 border border-border text-center hover:-translate-y-0.75 transition duration-300">
                            <p className="text-sm text-foreground">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InterviewSection;
