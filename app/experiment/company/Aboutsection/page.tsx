import React from "react";
import AboutSectionData from "@/data/AboutSectionData";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const delays = ["[0.1s]", "[0.2s]", "[0.3s]", "[0.4s]", "[0.5s]", "[0.6s]"];

export default function AboutPage() {
  const { pillars, problems, audience } = AboutSectionData;

  return (
    <div>
      <SiteHeader />

      <section id="about" className="py-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          {/* Hero */}
          <div className="text-center mb-24">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">
              About CyberDude
            </span>
            <h1 className="text-5xl md:text-6xl font-bold custom-gradient leading-tight mb-5">
              Who We Are
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              CyberDude is a digital finishing school that transforms beginners
              into industry-ready professionals through accountable,
              performance-driven learning.
            </p>
          </div>

          {/* Mission + Highlights */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-5 mb-24">
            {/* Left */}
            <div className="glass rounded-2xl p-10 flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                Closing the{" "}
                <span className="text-gradient">Completion Gap</span> in
                Education
              </h2>
              <div className="flex items-center gap-4 pt-6 mt-10 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    Founded by
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    Anbuselvan Annamalai
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Championing{" "}
                    <strong className="text-foreground">
                      Natural Intelligence
                    </strong>{" "}
                    — discipline, consistency & performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="glass rounded-2xl p-8 border-l-4 border-primary flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground leading-snug mb-3">
                  Making Competence
                  <br />
                  the New Standard
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  CyberDude bridges the gap between learning and real-world
                  performance through accountability, execution, and measurable
                  outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-8">
                {["Accountability", "Execution", "Mastery", "Outcomes"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 text-center select-none">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Our Pillars
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-border/40 divide-x divide-y divide-border/40">
              {pillars.map((item, i) => (
                <div
                  key={i}
                  className="glass p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                  <span className="block text-6xl font-black leading-none tabular-nums select-none text-primary/20 mb-6">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-6 h-0.5 w-8 rounded-full bg-primary/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Problems */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-border" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                The Problems We Solve
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-6 flex items-start gap-5 border border-transparent hover:border-primary/25 hover:translate-x-1 transition-all duration-300">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Who It's For
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audience.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-7 flex flex-col gap-4 border border-transparent hover:border-primary/25 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
