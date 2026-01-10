import whyChooseData from "@/data/whychoosecyberdude";
import { Icon } from "@iconify/react";

export default function WhyChooseSection() {
  return (
    <>
      <div className="container max-w-max text-white mx-auto px-4 mt-10 py-10  ">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold text-white  ">
          Why choose
          <span
            className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
              bg-clip-text text-transparent px-2"
          >
            CyberDude
          </span>
          ?
        </h1>
        <div className=" grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mt-10 2xl:px-30  ">
          {whyChooseData.map((content, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f]  rounded-xl p-6 transition duration-200 ease-in-out border border-transparent hover:border-orange-500  hover:scale-105 group "
            >
              <div className="flex  mb-4">
                <div className="bg-orange-500/10 p-2 rounded-full  group-hover:bg-black">
                  <Icon
                    icon={content.icon}
                    className="text-orange-500 text-3xl "
                  />
                </div>
              </div>
              <span className="text-orange-500 text-xl font-semibold">
                {content.title}
              </span>
              <p className="text-gray-500 mt-3 text-sm">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
