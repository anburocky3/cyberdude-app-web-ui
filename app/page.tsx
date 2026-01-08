import SiteHeader from "@/components/ui/site-header";
import AboutMentors from "@/components/ui/about-mentor";
import SiteSkills from "@/components/ui/site-skills";
import Testimonial from "@/components/ui/testimonial-section";
import SiteFooter from "@/components/ui/site-footer";
import WhychooseSection from "@/components/ui/whychoosesection";
import FaqSection from "@/components/ui/faq-section";
import WhoIsItFor from "@/components/ui/whoisitfor-section";

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <main className="bg-black mt-20">
        {/* Hero Section */}
        <section className="hero-section  min-h-screen  flex flex-col text-center  text-white pt-32">
          <h1 className="font-medium lg:text-6xl font-sans mb-3">
            {" "}
            Transform into{" "}
            <span
              className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
         bg-clip-text text-transparent"
            >
              skilled professional
            </span>
          </h1>
          <p className=" text-gray-200 font-medium text-lg">
            evidence-based learning environment where completion actually means
            competence.
          </p>

          <div className="flex items-center justify-center mt-6">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://github.com/awizp.png"
                alt="Vishnu"
              />

              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://github.com/sidhgeetha.png"
                alt="Geetha"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://github.com/prakashmcodes.png"
                alt="Prakash"
              />
            </div>

            <span className="ml-4 font-sm text-sm">
              Getting skilled by 1M Learners
            </span>
          </div>

          <div className=" items-center text-center flex justify-center mt-8">
            <button className="cta flex flex-row text-center items-center justify-center bg-amber-600 text-white lg:text-xl font-bold w-50 h-14 rounded-4xl  ">
              Start journey
            </button>
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 mt-16 flex flex-row items-center justify-center gap-8">
            <div>
              <img
                className=" w-44 rounded-2xl object-fit"
                src="/img/site/heros/2.png"
                alt="Hero Image"
              />
            </div>

            <div>
              <img
                className="w-72 rounded-2xl object-fit"
                src="/img/site/heros/3.png"
                alt="Hero Image"
              />
            </div>

            <div>
              <img
                className="w-44 rounded-2xl object-fit"
                src="/img/site/heros/1.png"
                alt="Hero Image"
              />
            </div>
          </div>
        </section>

        {/* whychoose cyberdude */}
        <WhychooseSection />

        {/* who is it for section */}
        <WhoIsItFor />

        {/* about mentors section */}
        <AboutMentors />

        {/* site skills */}
        <SiteSkills />

        {/* testimonial */}
        <Testimonial />

        {/* FAQ section */}
        <FaqSection />

        <SiteFooter />
      </main>
    </div>
  );
}
