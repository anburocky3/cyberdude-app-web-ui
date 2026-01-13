import SiteHeader from "@/components/ui/site-header";
import AboutMentors from "@/components/ui/about-mentor";
import SiteSkills from "@/components/ui/site-skills";
import Testimonial from "@/components/ui/testimonial-section";
import SiteFooter from "@/components/ui/site-footer";
import FaqSection from "@/components/ui/faq-section";
import WhoIsItFor from "@/components/ui/whoisitfor-section";
import HowItWorks from "@/components/ui/how-works";
import HeroSection from "@/components/ui/hero-section";
import WhyChooseSection from "@/components/ui/why-choose-section";

export default function Home() {
  return (
    <div className="bg-black">
      <SiteHeader />

      <main className="bg-black mt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Section */}
        {/* <WhyChooseSection /> */}

        {/* who is it for section */}
        {/* <WhoIsItFor /> */}

        {/* How it works section */}
        {/* <HowItWorks /> */}

        {/* about mentors section */}
        {/* <AboutMentors /> */}

        {/* site skills */}
        <SiteSkills />

        {/* testimonial */}
        {/* <Testimonial /> */}

        {/* FAQ section */}
        {/* <FaqSection /> */}

        {/* sitefooter */}
        {/* <SiteFooter /> */}
      </main>
    </div>
  );
}
