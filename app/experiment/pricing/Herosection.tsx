"use client";

import { ArrowRight, Play, Sparkles, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-pattern isolate">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(190_100%_50%/0.18),transparent_60%)]" />

        {/* Cyan glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[hsl(190_100%_50%/0.35)] rounded-full blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(280_100%_60%/0.35)] rounded-full blur-[140px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              India&apos;s Most Trusted Tech Learning Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Transform Your Future with{" "}
            <span className="gradient-text glow-text">CyberDude</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            From complete beginner to job-ready developer. Master MERN, LAMP,
            Cloud, and more with project-based learning, verified credentials,
            and direct mentorship from industry experts.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="group w-full sm:w-auto bg-gradient-to-r from-primary to-[hsl(280,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105 h-16 rounded-xl px-12 text-lg">
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] h-16 rounded-xl px-12 text-lg">
              <Play className="w-5 h-5" />
              Watch How It Works
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Users, value: "50,000+", label: "Active Learners" },
              { icon: BookOpen, value: "200+", label: "Free Courses" },
              { icon: Sparkles, value: "95%", label: "Completion Rate" },
              { icon: ArrowRight, value: "₹8L", label: "Avg. Salary Hike" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl backdrop-blur-sm card-hover"
                style={{
                  backgroundColor: "hsl(var(--background) / 0.5)",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "hsl(var(--foreground) / 0.7)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), transparent)",
        }}
      />{" "}
    </section>
  );
};

export default HeroSection;
