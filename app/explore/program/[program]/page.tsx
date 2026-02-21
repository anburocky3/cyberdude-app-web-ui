import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import { ArrowLeft, Layers, Code2, Server, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const programsData = {
  fullstack: {
    icon: Layers,
    title: "Full Stack Development",
    subtitle: "Master end-to-end web development",
    color: "primary",
    description: "This program is designed for learners who want to understand both frontend and backend development and how they work together.",
    skills: [
      "Build complete web applications",
      "Connect frontend interfaces with backend logic",
      "Understand real-world application flow",
    ],
    modules: [
      { title: "Web Fundamentals", topics: ["HTML & CSS", "JavaScript basics", "Version control"] },
      { title: "Frontend Development", topics: ["React fundamentals", "State management", "Responsive design"] },
      { title: "Backend Development", topics: ["Node.js", "Databases", "REST APIs"] },
      { title: "Full Stack Integration", topics: ["Authentication", "Deployment", "Full app projects"] },
    ],
    ideal: "Learners aiming for end-to-end development roles.",
  },
  frontend: {
    icon: Code2,
    title: "Frontend Development",
    subtitle: "Build beautiful user interfaces",
    color: "accent",
    description: "The Frontend Development program focuses on building user interfaces that are clean, responsive, and usable.",
    skills: [
      "Structure and style web pages",
      "Build interactive user experiences",
      "Understand how users interact with interfaces",
    ],
    modules: [
      { title: "HTML & CSS Mastery", topics: ["Semantic HTML", "CSS layouts", "Flexbox & Grid"] },
      { title: "JavaScript Essentials", topics: ["DOM manipulation", "Events", "ES6+"] },
      { title: "React Development", topics: ["Components", "Hooks", "State management"] },
      { title: "Advanced UI", topics: ["Animations", "Accessibility", "Performance"] },
    ],
    ideal: "Learners who enjoy design, UI logic, and visual problem-solving.",
  },
  backend: {
    icon: Server,
    title: "Backend Development",
    subtitle: "Power applications from behind",
    color: "success",
    description: "The Backend Development program focuses on the logic that powers applications behind the scenes.",
    skills: [
      "Handle data and server logic",
      "Build APIs",
      "Manage application flow and security",
    ],
    modules: [
      { title: "Programming Foundations", topics: ["Node.js basics", "Data structures", "Algorithms"] },
      { title: "Database Design", topics: ["SQL", "NoSQL", "Data modeling"] },
      { title: "API Development", topics: ["REST", "Authentication", "Validation"] },
      { title: "Production Systems", topics: ["Security", "Scaling", "Monitoring"] },
    ],
    ideal: "Learners interested in logic, data handling, and system behavior.",
  },
};

const SkillProgramDetail = async ({
  params,
}: {
  params: Promise<{ program: string; }>;
}) => {
  const { program } = await params;

  if (!program || !programsData[program as keyof typeof programsData]) {
    return <Link href="/"></Link>;
  }

  const programDatum = programsData[program as keyof typeof programsData];
  const Icon = programDatum.icon;

  const colorClasses = {
    primary: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    accent: "text-red-400 bg-red-400/10 border-red-400/20",
    success: "text-green-400 bg-green-400/10 border-green-400/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-30" />
          <div className="absolute top-0 left-1/4 w-125 h-125 bg-orange-400/5 rounded-full blur-3xl" />

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
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${colorClasses[programDatum.color as keyof typeof colorClasses]}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{programDatum.title}</h1>
                <p className="text-xl text-muted-foreground">{programDatum.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Program</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{programDatum.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">What You&apos;ll Learn</h2>
                <div className="space-y-4">
                  {programDatum.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-zinc-950/90 border border-border">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Program Modules</h2>
                <div className="space-y-6">
                  {programDatum.modules.map((module, index) => (
                    <div key={index} className="p-6 rounded-xl bg-zinc-950/90 border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-primary font-semibold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <span key={topic} className="px-3 py-1 rounded-full text-sm bg-zinc-900 text-muted-foreground border border-border">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-zinc-950/90 border border-border sticky top-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ideal For</h3>
                <p className="text-muted-foreground mb-6">{programDatum.ideal}</p>

                <button className="w-full py-3 px-6 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-lg font-semibold">
                  Start Learning
                </button>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Duration</span>
                      <span className="text-foreground">12-16 weeks</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Level</span>
                      <span className="text-foreground">Beginner to Intermediate</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Projects</span>
                      <span className="text-foreground">4+ hands-on</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default SkillProgramDetail;
