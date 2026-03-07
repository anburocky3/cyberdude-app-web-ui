import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    icon: LucideIcon;
    label: string;
    title: string;
    description: string;
}

const SectionHeader = ({ icon: Icon, label, title, description }: SectionHeaderProps) => {
    return (
        <div
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-border mb-6">
                <Icon className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-muted-foreground">{label}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>
    );
};

export default SectionHeader;
