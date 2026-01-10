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
    <section className="w-full text-white">
      <div className="container mx-auto py-15">

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-6">
          How it <span className="custom-gradient">Works</span>?
        </h2>

        <p className="text-sm text-mute text-center font-semibold">For those students how to use this platform</p>

        {/* Top revealing section */}
        <div className="h-55 p-3 flex justify-center items-center mb-10">
          {HowItWorksStep.map((step) => {
            return (
              step.id === activeStep ?
                (
                  <div key={step.id} className="transition-all duration-500 opacity-0 translate-y-2 ease-out animate-fadeSlideIn">
                    <h2 className="text-center text-2xl font-medium text-gray-100 mb-4">{step.title}</h2>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                ) : ""
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
                <div className={`text-center p-5 rounded-xl transition-colors duration-300 ${isActive ? "bg-orange" : ""}`}>
                  <span
                    className={"block mb-3 text-lg font-semibold text-white"}
                  >
                    Step {step.id}:
                  </span>

                  <p
                    className={`text-sm leading-relaxed ${isActive ? "text-white" : "text-mute"}`}
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
