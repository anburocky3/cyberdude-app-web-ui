import ExploreHero from "@/app/experiment/explore/components/ExploreHero";
import ExploreNavigation from "@/app/experiment/explore/components/ExploreNavigation";
import SkillProgramsSection from "@/app/experiment/explore/components/SkillProgramsSection";
import PathsSection from "@/app/experiment/explore/components/PathsSection";
import InterviewSection from "@/app/experiment/explore/components/InterviewSection";
import HackathonsSection from "@/app/experiment/explore/components/HackathonsSection";
import Footer from "@/app/experiment/explore/components/Footer";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

import "@/app/experiment/explore/style/explore.css";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <ExploreHero />
            <ExploreNavigation />
            <SkillProgramsSection />
            <PathsSection />
            <InterviewSection />
            <HackathonsSection />
            <Footer />
            <SiteFooter />
        </div>
    );
};

export default Index;
