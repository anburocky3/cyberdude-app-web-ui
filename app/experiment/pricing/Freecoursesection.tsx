import { 
  Code, 
  GitBranch, 
  Palette, 
  Cloud, 
  Brain, 
  Server,
  ArrowRight,
  CheckCircle,
  Users,
  Video,
  Sparkles
} from "lucide-react";

const FreeCoursesSection = () => {
  const courses = [
    {
      icon: Code,
      title: "Web Development 101",
      description: "HTML, CSS & JavaScript fundamentals for absolute beginners",
      lessons: 45,
      duration: "8 hours",
      color: "primary"
    },
    {
      icon: GitBranch,
      title: "Git & GitHub Fundamentals",
      description: "Version control essentials every developer needs to know",
      lessons: 20,
      duration: "3 hours",
      color: "accent"
    },
    {
      icon: Palette,
      title: "UI/UX Design Basics",
      description: "Design principles, Figma basics, and creating user-friendly interfaces",
      lessons: 30,
      duration: "5 hours",
      color: "cyber-purple"
    },
    {
      icon: Server,
      title: "Programming Fundamentals",
      description: "Logic, algorithms, and problem-solving with Python & JavaScript",
      lessons: 50,
      duration: "10 hours",
      color: "cyber-orange"
    },
    {
      icon: Cloud,
      title: "Cloud Computing Intro",
      description: "AWS, Azure basics and understanding cloud infrastructure",
      lessons: 25,
      duration: "4 hours",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI & ML Basics",
      description: "Introduction to artificial intelligence and machine learning concepts",
      lessons: 35,
      duration: "6 hours",
      color: "cyber-pink"
    },
  ];

  const crashCourses = [
    { name: "MERN Stack Preview", duration: "2 hours" },
    { name: "PHP & MySQL Starter", duration: "1.5 hours" },
    { name: "React Fundamentals", duration: "3 hours" },
    { name: "Node.js Quickstart", duration: "2 hours" },
    { name: "DevOps Overview", duration: "1 hour" },
    { name: "Mobile App Basics", duration: "2 hours" },
  ];

  const benefits = [
    { icon: CheckCircle, text: "No ads or distractions" },
    { icon: CheckCircle, text: "High-quality, structured content" },
    { icon: CheckCircle, text: "Progress tracking & XP system" },
    { icon: CheckCircle, text: "Community access" },
  ];

  return (
    <section id="free-courses" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Gateway to Skill</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-reward glow-text-green">Free Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your first step into tech. Zero cost, zero confusion. Explore freely, learn deeply, 
            and find your path in technology without any financial commitment.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-${course.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <course.icon className={`w-7 h-7 text-${course.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{course.lessons} lessons</span>
                <span className="text-primary font-medium">{course.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Crash Courses & Samplers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyber-orange/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-cyber-orange" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">Crash Courses & Skill Samplers</h3>
                <p className="text-sm text-muted-foreground">Try before you commit to a career path</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {crashCourses.map((course, index) => (
                <div key={index} className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group">
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{course.name}</div>
                  <div className="text-sm text-muted-foreground">{course.duration}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">Community-Powered Workshops</h3>
                <p className="text-sm text-muted-foreground">Learn from peers, guided by mentors</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Weekly live coding sessions</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Peer-led study groups</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Recorded workshop library</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Mentor-verified content quality</span>
              </li>
            </ul>
            <button className="w-full border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] h-11 px-6 py-2">
              Join Community <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 glow-box-green">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Why Free?</h3>
              <p className="text-muted-foreground max-w-xl">
                We believe quality education should be accessible. Free courses help you build confidence, 
                explore options, and start your journey without risk.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <benefit.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCoursesSection;
