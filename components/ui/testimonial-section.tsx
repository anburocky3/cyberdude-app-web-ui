import { QuoteIcon } from "lucide-react";

export default function TestimonialSection() {
  return (
    <>
      <section className="px-4 py-16 bg-black  bg-linear-to-b from-gray-900 via-black to-black py-5 mt-10">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold text-white ">
          What People Think
          <span
            className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
         bg-clip-text text-transparent"
          >
            {" "}
            About us
          </span>
          ?
        </h1>
        <QuoteIcon className="mx-auto mt-6 text-gray-600/50 w-12 h-12 rotate-180 absolute left-50 2xl:left-125" />
        <p className=" text-gray-300 text-center mt-10 max-w-3xl mx-auto">
          “A great course review highlights instructor engagement (clear
          explanations, real-world examples, energy), relevant & practical
          content (useful info, good mix of theory/practice), clear structure
          (well-defined goals, fair assessment), and positive outcomes
          (increased confidence, ability to apply knowledge)”
        </p>
        <div className="mt-10 text-center space-y-2">
          <p className="text-orange font-semibold text-2xl ">
            Suganthi Pattappan
          </p>
          <p className="text-sm">Full-Stack Developer</p>
          <p className="text-sm text-gray-500">Chennai, India</p>
        </div>
        <div className="flex mt-10 justify-center items-end ">
          <img
            src="https://github.com/anburocky3.png"
            alt="profileimg"
            className="w-12 h-12 rounded-full object-cover  opacity-30"
          />
          <img
            src="https://github.com/awizp.png"
            alt="profileimg"
            className="w-14 h-14 rounded-full object-cover   opacity-70"
          />
          <img
            src="https://github.com/pssuganthi11.png"
            alt="profileimg"
            className="w-18 h-18 rounded-full object-cover z-10 "
          />
          <img
            src="https://github.com/sidhgeetha.png"
            alt="profileimg"
            className="w-14 h-14 rounded-full object-cover  opacity-70"
          />

          <img
            src="https://github.com/prakashmcodes.png"
            alt="profileimg"
            className="w-12 h-12 rounded-full object-cover  opacity-30"
          />
        </div>
      </section>
    </>
  );
}
