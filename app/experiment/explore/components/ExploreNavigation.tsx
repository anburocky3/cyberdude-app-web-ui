'use client';

import { useState, useEffect } from "react";
import { BookOpen, Route, Users, Zap } from "lucide-react";

const navItems = [
    { id: "skill-programs", label: "Skill Programs", icon: BookOpen },
    { id: "paths", label: "Paths", icon: Route },
    { id: "interviews", label: "Interviews", icon: Users },
    { id: "hackathons", label: "Hackathons", icon: Zap },
];

const ExploreNavigation = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
        );

        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="sticky top-4 z-50 flex justify-center px-4 py-4"
        >
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-xl">
                {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === id
                                ? "text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {activeSection === id && (
                            <div
                                className="absolute inset-0 bg-primary rounded-full"
                            />
                        )}
                        <Icon className="w-4 h-4 relative z-10" />
                        <span className="relative z-10 hidden sm:inline">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default ExploreNavigation;
