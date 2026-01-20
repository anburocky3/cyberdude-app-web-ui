import whyChooseData from "@/data/whyChooseData";

export default function WhyChooseSection() {
  return (
    <section className=" relative  ">
      <div className="container mx-auto py-10 px-3">
        <h2 className="text-center text-4xl font-semibold mb-20 ">
          Why choose <span className="custom-gradient">Cyberdude</span>?
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-linear-to-b from-transparent via-orange-500 to-transparent shadow-[0_0_25px_#f97316]" />

          <div className="space-y-20">
            {whyChooseData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${
                    item.side === "left" ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1c1c1c] shadow-[0_0_20px_#f97316]">
                    <Icon className="h-5 w-5 text-orange-400" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-[45%] ${
                      item.side === "left"
                        ? "text-right pr-12"
                        : "text-left pl-12"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-orange-400">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
