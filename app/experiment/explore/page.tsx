import ExploreHero from "@/app/experiment/explore/components/ExploreHero";
import ExploreNavigation from "@/app/experiment/explore/components/ExploreNavigation";
import SkillProgramsSection from "@/app/experiment/explore/components/SkillProgramsSection";
import PathsSection from "@/app/experiment/explore/components/PathsSection";
import InterviewSection from "@/app/experiment/explore/components/InterviewSection";
import HackathonsSection from "@/app/experiment/explore/components/HackathonsSection";
import Footer from "@/app/experiment/explore/components/Footer";

import '@/app/experiment/explore/style/explore.css';

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <ExploreHero />
            <ExploreNavigation />
            <SkillProgramsSection />
            <PathsSection />
            <InterviewSection />
            <HackathonsSection />
            <Footer />
        </div>
    );
};

export default Index;
