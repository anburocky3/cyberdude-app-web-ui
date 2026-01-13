export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center text-white pt-0">
      <h1 className="font-medium lg:text-6xl font-sans mb-3">
        {" "}
        Tranform into{" "}
        <span
          className="bg-gradient-to-r from-orange-300 via-amber-400 to-orange-600
         bg-clip-text text-transparent"
        >
          skilled professional
        </span>
      </h1>
      <p className=" text-gray-200 font-medium text-lg">
        evidence-based learning environment where completion actually means
        competence.
      </p>

      <div className="flex items-center justify-center mt-6 gap-2">
        <div className="flex -space-x-3">
          <img
            className="w-10 h-10 rounded-full border-2 border-theme-gradient"
            src="https://github.com/awizp.png"
            alt="Vishnu"
          />

          <img
            className="w-10 h-10 rounded-full border-2 border-theme-gradient"
            src="https://github.com/sidhgeetha.png"
            alt="Geetha"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-theme-gradient"
            src="https://github.com/prakashmcodes.png"
            alt="Prakash"
          />
        </div>

        <span className=" font-sm text-sm text-gray-300">
          Getting skilled by{" "}
          <strong className="text-white tracking-wide">1M+ Learners</strong>
        </span>
      </div>

      <div className=" flex flex-col  lg:flex-row gap-4 items-center text-center justify-center mt-8 px-4">
        <button className="flex flex-row text-center items-center justify-center bg-linear-to-r from-orange-300 to-orange-500 text-black lg:text-xl font-semibold w-50 h-14 rounded-4xl hover:from-orange-400 hover:to-orange-600 cursor-pointer">
          Start Journey
        </button>
        <button className="flex flex-row text-center items-center justify-center border border-white lg:text-lg w-50 h-14 rounded-4xl text-white hover:bg-linear-to-r hover:theme-gradient hover:from-blue-50 hover:to-indigo-100 hover:text-black font-semibold hover:border-none  cursor-pointer">
          For Recruiters
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 mt-6 flex flex-row items-center justify-center gap-8">
        <div>
          <img
            className=" w-44 rounded-2xl object-fit"
            src="/img/site/heros/2.png"
            alt="Hero Image"
          />
        </div>

        <div>
          <img
            className="w-72 rounded-2xl object-fit"
            src="/img/site/heros/3.png"
            alt="Hero Image"
          />
        </div>

        <div>
          <img
            className="w-44 rounded-2xl object-fit"
            src="/img/site/heros/5.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
