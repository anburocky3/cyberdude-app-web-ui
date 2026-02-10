// import Navbar from "@/app/experiment/pricing/Navbar";
import PricingSection from "@/components/ui/pricing-section";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background ">
      <SiteHeader />
      <PricingSection />
      <SiteFooter />
    </div>
  );
};

export default PricingPage;
