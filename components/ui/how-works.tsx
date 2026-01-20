"use client";

import { useState } from "react";
import { HowItWorksStudents, HowItWorksRecruiters } from "@/data/howItWorks";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { ToggleLeft, ToggleRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isRecruiterActive, setIsRecruiterActive] = useState(false);
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

  const handleRecruiterTab = () => {
    setIsRecruiterActive(prev => !prev); //recruiter tab toggle
  };

  return (
    <section className="w-full text-white bg-linear-to-b from-gray-900 via-black to-black py-5 mt-10">
      <div className="container mx-auto px-3 py-15 relative space-y-3">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-3">
          How it <span className="custom-gradient">Works</span>?
        </h2>

        {/* toggle menu */}
        <div className="flex gap-3 items-center justify-center absolute top-2 right-1 md:right-10 md:top-10"
          onClick={handleRecruiterTab}>
          {!isRecruiterActive ? <div className="text-orange-800 cursor-pointer">
            <ToggleLeft size={34} />
          </div> :
            <div className="text-orange-600 cursor-pointer">
              <ToggleRight size={34} />
            </div>}
          <p className="font-semibold text-sm cursor-default">For Recruiters</p>
        </div>

        {!isRecruiterActive ?
          <p className="text-sm text-mute text-center mb-5">
            For those students how to use this platform
          </p> :
          <p className="text-sm text-mute text-center mb-5">
            For those recruiters how to use this platform
          </p>}

        {/* Top revealing section */}
        <div className="w-fit mx-auto p-5 flex justify-center items-center mb-10 rounded-xl bg-zinc-900/20">
          {/* students tab */}
          {!isRecruiterActive && HowItWorksStudents.map((step) => {
            return step.id === activeStep ? (
              <div
                key={step.id}
                className="transition-all duration-500 opacity-0 translate-y-2 ease-out animate-fadeSlideIn flex flex-col md:flex-row justify-center items-center gap-10"
              >
                <div className="w-55 h-55">
                  <img src={step.illustration} alt={`${step.label} svg`} />
                </div>
                <div className="w-full md:w-80 flex flex-col items-start justify-center">
                  <h2 className="text-2xl font-medium text-gray-100 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ) : (
              ""
            );
          })}

          {/* recruiter tab */}
          {isRecruiterActive && HowItWorksRecruiters.map((step) => {
            return step.id === activeStep ? (
              <div
                key={step.id}
                className="transition-all duration-500 opacity-0 translate-y-2 ease-out animate-fadeSlideIn flex flex-col md:flex-row justify-center items-center gap-10"
              >
                <div className="w-55 h-55">
                  <img src={step.illustration} alt={`${step.label} svg`} />
                </div>
                <div className="w-full md:w-80 flex flex-col items-start justify-center">
                  <h2 className="text-2xl font-medium text-gray-100 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>

        {/* Showing steps through data */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* students tab */}
          {!isRecruiterActive && HowItWorksStudents.map((step) => {
            const isActive = step.id === activeStep;

            return (
              <div
                key={step.id}
                onMouseEnter={() => handleHover(step.id)}
                onClick={() => handleInteraction(step.id)}
                className="cursor-pointer flex justify-start"
              >
                <div
                  className={`w-full text-center p-5 rounded-xl transition-colors duration-300 border border-gray-500 ${isActive ? "bg-orange border-none" : ""
                    }`}
                >
                  <span
                    className={"block mb-3 text-lg font-semibold text-white"}
                  >
                    {step.label}:
                  </span>

                  <p
                    className={`text-sm leading-relaxed ${isActive ? "text-white" : "text-mute"
                      }`}
                  >
                    {step.id === 1 &&
                      "Login to the site and pick your career path to learn"}

                    {step.id === 2 &&
                      "Learn through the modules and get points to unlock another career path"}

                    {step.id === 3 &&
                      "Get insights from our mentors to clarify your doubts"}

                    {step.id === 4 &&
                      "Get your aspiring dream job by completing the career track"}
                  </p>
                </div>
              </div>
            );
          })}

          {/* recruiters tab */}
          {isRecruiterActive && HowItWorksRecruiters.map((step) => {
            const isActive = step.id === activeStep;

            return (
              <div
                key={step.id}
                onMouseEnter={() => handleHover(step.id)}
                onClick={() => handleInteraction(step.id)}
                className="cursor-pointer flex justify-start"
              >
                <div
                  className={`w-full text-center p-5 rounded-xl transition-colors duration-300 border border-gray-500 ${isActive ? "bg-orange border-none" : ""
                    }`}
                >
                  <span
                    className={"block mb-3 text-lg font-semibold text-white"}
                  >
                    {step.label}:
                  </span>

                  <p
                    className={`text-sm leading-relaxed ${isActive ? "text-white" : "text-mute"
                      }`}
                  >
                    {step.id === 1 &&
                      "Access students aligned with your hiring needs"}

                    {step.id === 2 &&
                      "Review progress based on verified learning data"}

                    {step.id === 3 &&
                      "Connect directly with shortlisted candidates"}

                    {step.id === 4 &&
                      "Finalize the students and hiring with confidence"}
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
