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
    primary: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    accent: "text-red-400 bg-red-400/10 border-red-400/20",
    success: "text-green-400 bg-green-400/10 border-green-400/20",
};

const ProgramCard = ({ icon: Icon, title, description, features, href, color }: ProgramCardProps) => {
    return (
        <div>
            <Link
                href={href}
                className="block h-full group"
            >
                <div className="p-8 h-full flex flex-col bg-zinc-900/90 rounded-lg transition duration-300 hover:-translate-y-0.75 border border-border">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${colorClasses[color]} mb-6`}>
                        <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                        Explore Program
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProgramCard;
