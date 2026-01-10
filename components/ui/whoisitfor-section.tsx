import WhoForData from "@/data/whofor";

const WhoIsItFor = () => {
  return (
    <>
      <h2 className="text-3xl lg:text-5xl font-semibold text-white text-center  my-8">
        Who is it for
      </h2>

      <div className="flex mt-3 justify-center items-center">
        <div className="flex flex-col gap-6 md:flex-row max-w-5xl">
          {WhoForData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-cover"
              />

              <div className="flex flex-col gap-2 p-4 text-center">
                <h1 className="text-lg font-semibold text-orange-500">
                  {card.title}
                </h1>
                <p className="text-sm text-white/80">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WhoIsItFor;
