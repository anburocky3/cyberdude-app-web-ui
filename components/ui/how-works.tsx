"use client";

import { useState } from "react";
import { HowItWorksStep } from "@/data/howItWorks";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const isDesktop = useIsDesktop();

  const handleInteraction = (id: number) => {
    if (!isDesktop) {
      setActiveStep(id); // click on mobile
    }
  };

  const handleHover = (id: number) => {
    if (isDesktop) {
      setActiveStep(id); // hover on desktop
    }
  };

  return (
    <section className="w-full text-white bg-linear-to-b from-gray-900 via-black to-black py-5 mt-10">
      <div className="container mx-auto py-15">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-3 relative">
          How it <span className="custom-gradient">Works</span>?
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-base">
            <div className="flex items-center justify-center ">
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative ">
                  <input type="checkbox" id="toggle" className="sr-only peer" />
                  <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-amber-500 transition-colors duration-300 "></div>
                  <div className="absolute left-1 top-1 w-6 h-6 bg-amber-700 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6 "></div>
                </div>
              </label>
              <span className="ml-3 text-white font-medium">Recruiter</span>
            </div>
          </div>
        </h2>

        <p className="text-sm text-mute text-center ">
          For those students how to use this platform
        </p>

        {/* Top revealing section */}
        <div className="h-55 p-3 flex justify-center items-center mb-10">
          {HowItWorksStep.map((step) => {
            return step.id === activeStep ? (
              <div
                key={step.id}
                className="transition-all duration-500 opacity-0 translate-y-2 ease-out animate-fadeSlideIn "
              >
                <h2 className="text-center text-2xl font-medium text-gray-100 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ) : (
              ""
            );
          })}
        </div>

        {/* Showing steps through data */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {HowItWorksStep.map((step) => {
            const isActive = step.id === activeStep;

            return (
              <div
                key={step.id}
                onMouseEnter={() => handleHover(step.id)}
                onClick={() => handleInteraction(step.id)}
                className="cursor-pointer flex justify-start"
              >
                {/* Step Content */}
                <div
                  className={`text-center p-5 rounded-xl transition-colors duration-300 border border-gray-500 ${
                    isActive ? "bg-orange border-none" : ""
                  }`}
                >
                  <span
                    className={"block mb-3 text-lg font-semibold text-white"}
                  >
                    Step {step.id}:
                  </span>

                  <p
                    className={`text-sm leading-relaxed ${
                      isActive ? "text-white" : "text-mute"
                    }`}
                  >
                    {step.label === "Login" &&
                      "Login to the site and pick your career path to learn"}

                    {step.label === "Learn" &&
                      "Learn through the modules and get points to unlock another career path"}

                    {step.label === "Mentorship" &&
                      "Get insights from our mentors to clarify your doubts"}

                    {step.label === "Career" &&
                      "Get your aspiring dream job by completing the career track"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
