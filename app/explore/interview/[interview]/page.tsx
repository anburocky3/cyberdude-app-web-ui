import Link from "next/link";
import { ArrowLeft, Brain, MessageSquare, FileText, CheckCircle2, Target } from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const interviewData = {
    technical: {
        icon: Brain,
        title: "Technical Interview Preparation",
        description: "Practice common technical questions and learn to explain your thinking clearly.",
        sections: [
            {
                title: "Problem Breakdown",
                content: "Learn to analyze problems systematically before jumping into solutions.",
                items: ["Understand requirements", "Identify constraints", "Plan approach", "Consider edge cases"],
            },
            {
                title: "Step-by-Step Explanations",
                content: "Practice explaining your thought process clearly and concisely.",
                items: ["Verbalize your thinking", "Structure responses", "Handle clarifications", "Time management"],
            },
            {
                title: "Pattern Recognition",
                content: "Recognize common patterns in technical interview questions.",
                items: ["Array/string patterns", "Tree/graph traversal", "Dynamic programming", "System design basics"],
            },
        ],
    },
    mock: {
        icon: MessageSquare,
        title: "Mock Interviews",
        description: "Simulate real interview scenarios and build confidence through practice.",
        sections: [
            {
                title: "Answering Under Pressure",
                content: "Practice responding to questions in timed, realistic conditions.",
                items: ["Time-boxed problems", "Pressure management", "Thinking aloud", "Staying calm"],
            },
            {
                title: "Handling Follow-ups",
                content: "Learn to address interviewer questions and dig deeper into your solutions.",
                items: ["Anticipate questions", "Clarify decisions", "Alternative approaches", "Trade-off discussions"],
            },
            {
                title: "Building Confidence",
                content: "Reduce interview anxiety through repeated practice and feedback.",
                items: ["Regular practice", "Feedback loops", "Self-assessment", "Progressive difficulty"],
            },
        ],
    },
    resume: {
        icon: FileText,
        title: "Resume & Project Discussion",
        description: "Learn to present your work confidently and justify your technical decisions.",
        sections: [
            {
                title: "Project Explanations",
                content: "Communicate your project experiences clearly and effectively.",
                items: ["Project overview", "Your role & contributions", "Challenges faced", "Impact & results"],
            },
            {
                title: "Technical Decisions",
                content: "Justify the technical choices you made in your projects.",
                items: ["Technology selection", "Architecture decisions", "Trade-off reasoning", "What you'd do differently"],
            },
            {
                title: "Learning Experiences",
                content: "Share your growth and learnings authentically.",
                items: ["Failures & lessons", "Skill development", "Collaboration stories", "Future goals"],
            },
        ],
    },
};

const InterviewPage = async ({
    params,
}: {
    params: Promise<{ interview: string; }>;
}) => {

    const { interview } = await params;

    if (!interview || !interviewData[interview as keyof typeof interviewData]) {
        return <Link href="/"></Link>;
    }

    const interviewDatum = interviewData[interview as keyof typeof interviewData];
    const Icon = interviewDatum.icon;

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="relative overflow-hidden">
                    <div className="absolute top-0 left-1/3 w-125 h-125 bg-orange-400/5 rounded-full blur-3xl" />

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
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-orange-500/10 border border-orange-500/20 text-orange-500">
                                <Icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{interviewDatum.title}</h1>
                                <p className="text-xl text-muted-foreground">{interviewDatum.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {interviewDatum.sections.map((section) => (
                            <div
                                key={section.title}
                                className="p-8 rounded-2xl bg-zinc-950/90 border border-border transition duration-300 hover:-translate-y-0.75"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-500/10 text-orange-500 mb-6">
                                    <Target className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                                <p className="text-muted-foreground mb-6">{section.content}</p>

                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-16 p-8 rounded-2xl bg-linear-to-r from-orange-500/5 via-primary/5 to-orange-500/5 border border-border text-center"
                    >
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Practice?</h2>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            Start your interview preparation journey and build the confidence you need to succeed.
                        </p>
                        <button className="px-8 py-4 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-lg font-semibold">
                            Begin Practice
                        </button>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default InterviewPage;
