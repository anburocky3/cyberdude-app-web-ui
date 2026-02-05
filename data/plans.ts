import {
    Check,
    X,
    Sparkles,
    Rocket,
    Building2,
    ArrowRight,
    Star,
    Shield,
    Users,
    Zap
} from "lucide-react";

export const plans = [
        {
            name: "Explorer",
            tagline: "Gateway to Skill",
            price: "₹0",
            period: "Forever Free",
            description: "Perfect for curious learners exploring tech careers",
            icon: Sparkles,
            gradient: "from-accent to-primary",
            features: [
                { text: "Access to all Free Courses", included: true },
                { text: "Community forums & discussions", included: true },
                { text: "Basic XP & progress tracking", included: true },
                { text: "Crash courses & skill samplers", included: true },
                { text: "Weekly community workshops", included: true },
                { text: "Premium career tracks", included: false },
                { text: "Verified certificates", included: false },
                { text: "1-on-1 mentorship", included: false },
                { text: "Project reviews", included: false },
            ],
            cta: "Start Free",
            variant: "outline" as const,
            popular: false
        },
        {
            name: "Pro",
            tagline: "Career Transformation",
            price: "₹999",
            period: "/month",
            description: "For serious learners ready to become job-ready developers",
            icon: Rocket,
            gradient: "from-cyber-orange to-cyber-pink",
            features: [
                { text: "Everything in Explorer", included: true },
                { text: "Full Premium Career Tracks", included: true },
                { text: "Verified digital certificates", included: true },
                { text: "Portfolio & project reviews", included: true },
                { text: "Weekly mentor sessions", included: true },
                { text: "Live expert AMAs", included: true },
                { text: "Priority doubt clearing", included: true },
                { text: "Resume building support", included: true },
                { text: "Interview preparation", included: true },
            ],
            cta: "Go Pro",
            variant: "premium" as const,
            popular: true
        },
        {
            name: "Recruiter",
            tagline: "Talent Pipeline",
            price: "Custom",
            period: "B2B Pricing",
            description: "Direct access to verified, job-ready tech talent",
            icon: Building2,
            gradient: "from-cyber-purple to-primary",
            features: [
                { text: "Verified talent dashboard", included: true },
                { text: "Skill-based candidate filtering", included: true },
                { text: "Direct messaging with learners", included: true },
                { text: "Custom training portals", included: true },
                { text: "Team onboarding programs", included: true },
                { text: "Hiring analytics & reports", included: true },
                { text: "Dedicated account manager", included: true },
                { text: "Priority support", included: true },
                { text: "Custom integrations", included: true },
            ],
            cta: "Contact Sales",
            variant: "outline" as const,
            popular: false
        },
    ];

        export const valueHighlights = [
        { value: "₹97,900", label: "Total course value", icon: Star },
        { value: "90%", label: "Cost savings vs offline", icon: Shield },
        { value: "24/7", label: "Learning access", icon: Zap },
        { value: "15+", label: "Projects included", icon: Users },
    ];