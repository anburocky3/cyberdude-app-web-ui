"use client";

import Navbar from "@/app/experiment/pricing/Navbar";
import HeroSection from "@/app/experiment/pricing/Herosection";
import FreeCoursesSection from "@/app/experiment/pricing/Freecoursesection";
import PremiumCoursesSection from "@/app/experiment/pricing/premiumcoursesection";
import RewardsSection from "@/app/experiment/pricing/Rewardsection";
import PricingSection from "@/app/experiment/pricing/pricingsection";
import Footer from "@/app/experiment/pricing/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background scanline">
            {/* <Navbar /> */}
            <main>
                {/* <HeroSection /> */}
                {/* <FreeCoursesSection /> */}
                {/* <PremiumCoursesSection /> */}
                {/* <RewardsSection /> */}
                <PricingSection />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Index;
