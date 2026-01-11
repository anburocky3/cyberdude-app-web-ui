"use client";

import { useState } from "react";
import FAQData from "@/data/faq";

const FaqSection = () => {
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});

  const toggleAnswer = (index: number) => {
    setShowAnswer((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className=" border-t border-gray-700/80 border-dotted pt-10 pb-20">
      <div className="mx-auto mt-8 pb-4 max-w-2xl px-4">
        <div className="mb-12">
          <h1 className="text-6xl sm:text-3xl text-center font-semibold text-white">
            Frequently Asked
            <span
              className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
              bg-clip-text text-transparent px-2"
            >
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center mt-3">
            Here&apos;s everything you need to know about our platform
          </p>
        </div>

        <div className="space-y-2">
          {FAQData.map((faq, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 text-left">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl cursor-pointer text-indigo-600 font-bold transition-transform duration-300 shrink-0 ${
                    showAnswer[index] ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {showAnswer[index] && (
                <div className="px-6 pb-3 pt-2 bg-white border-t rounded-xl border-indigo-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
