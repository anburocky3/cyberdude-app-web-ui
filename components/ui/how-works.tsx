"use client";

import { useState } from "react";
import { HowItWorksStep } from "@/data/howItWorks";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const isDesktop = useIsDesktop();

  const currentStep = HowItWorksStep.find(
    (step) => step.id === activeStep
  );

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
    <section className="text-white py-24 px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-6">
          How it <span className="text-orange-500">Works</span>?
        </h2>

        {/* Top Reveal Panel */}
        <div className="relative text-center max-w-2xl mx-auto mb-20 min-h-35">
          <div
            key={activeStep}
            className="
              transition-all duration-500 ease-out
              opacity-0 translate-y-3
              animate-fadeSlideIn
            "
          >
            <h3 className="text-2xl font-medium text-gray-300 mb-4">
              {currentStep?.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {currentStep?.description}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {HowItWorksStep.map((step) => {
            const isActive = step.id === activeStep;

            return (
              <div
                key={step.id}
                onMouseEnter={() => handleHover(step.id)}
                onClick={() => handleInteraction(step.id)}
                className="relative cursor-pointer group flex justify-center"
              >
                {/* Vertical Connector Line */}
                <span
                  className="
                    absolute -top-24 h-20 w-px
                    bg-orange-500/20
                    transition-opacity duration-300
                    hidden lg:block
                  "
                  style={{
                    opacity: isActive ? 0.6 : 0.25,
                  }}
                />

                {/* Step Content */}
                <div className="text-center max-w-55">
                  <span
                    className={`block mb-3 text-lg font-semibold transition-colors duration-300 ${isActive
                      ? "text-orange-500"
                      : "text-white md:group-hover:text-orange-500"
                      }`}
                  >
                    Step {step.id}:
                  </span>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${isActive
                      ? "text-orange-400"
                      : "text-gray-300 md:group-hover:text-orange-400"
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
