import Link from 'next/link';
import { LucideIcon, ArrowRight } from "lucide-react";

interface ProgramCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    href: string;
    color: "primary" | "accent" | "success";
}

const colorClasses = {
    primary: "text-primary bg-primary/10 border-primary/20",
    accent: "text-accent bg-accent/10 border-accent/20",
    success: "text-success bg-success/10 border-success/20",
};

const ProgramCard = ({ icon: Icon, title, description, features, href, color }: ProgramCardProps) => {
    return (
        <div>
            <Link
                href={href}
                className="block h-full gradient-border card-hover group"
            >
                <div className="p-8 h-full flex flex-col bg-card rounded-lg">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${colorClasses[color]} mb-6`}>
                        <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Explore Program
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProgramCard;
