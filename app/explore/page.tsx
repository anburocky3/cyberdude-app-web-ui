import ExploreHero from "@/components/ui/ExploreHero";
import ExploreNavigation from "@/components/ui/ExploreNavigation";
import SkillProgramsSection from "@/components/ui/SkillProgramsSection";
import PathsSection from "@/components/ui/PathsSection";
import InterviewSection from "@/components/ui/InterviewSection";
import HackathonsSection from "@/components/ui/HackathonsSection";
import CTASection from "@/components/ui/cta-section";

import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ExploreHero />
      <ExploreNavigation />
      <SkillProgramsSection />
      <PathsSection />
      <InterviewSection />
      <HackathonsSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
};

export default Index;
