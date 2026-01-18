import WhoForData from "@/data/whoForData";

const WhoIsItFor = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl text-center font-semibold text-white">
        Who is it
        <span
          className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
              bg-clip-text text-transparent px-2"
        >
          For
        </span>
        ?
      </h1>

      <div className="flex justify-center items-center mt-20 mx-5">
        <div className="flex flex-col gap-10 md:flex-row max-w-7xl">
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
