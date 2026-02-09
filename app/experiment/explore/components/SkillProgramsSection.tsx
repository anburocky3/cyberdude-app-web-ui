import { BookOpen, Code2, Server, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProgramCard from "./ProgramCard";

const programs = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Master both frontend and backend development. Build complete web applications from scratch.",
    features: [
      "Build complete web applications",
      "Connect frontend with backend logic",
      "Understand real-world application flow",
      "End-to-end development skills",
    ],
    href: "/experiment/explore/fullstack-development",
    color: "primary" as const,
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Build beautiful, responsive, and interactive user interfaces that users love.",
    features: [
      "Structure and style web pages",
      "Build interactive experiences",
      "Responsive design mastery",
      "Visual problem-solving skills",
    ],
    href: "/experiment/explore/frontend",
    color: "accent" as const,
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Master server-side logic, APIs, and the systems that power modern applications.",
    features: [
      "Handle data and server logic",
      "Build robust APIs",
      "Manage security and auth",
      "Database design & optimization",
    ],
    href: "/experiment/explore/backend",
    color: "success" as const,
  },
];

const SkillProgramsSection = () => {
  return (
    <section id="skill-programs" className="py-24 relative">
      <div className="container mx-auto relative z-10 px-4">
        <SectionHeader
          icon={BookOpen}
          label="Structured Learning"
          title="Skill Programs"
          description="Structured learning paths designed to help you master specific skills through guided practice and consistency."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-zinc-950 border border-border text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            What to Expect
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Structured Modules", desc: "Clear learning goals" },
              { label: "Practice-Focused", desc: "Learn by doing" },
              { label: "Progress Tracking", desc: "Based on completion" },
              { label: "Strong Fundamentals", desc: "Build confidence" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-zinc-900 border border-border"
              >
                <div className="text-foreground font-medium mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillProgramsSection;
