const WhoIsItFor = () => {
  return (
    <>
        <h2 className="text-3xl lg:text-5xl font-medium text-white text-center my-8">
            Who is it for
          </h2>
      <div className="flex mt-3 justify-center items-center">
      <div className="flex flex-col gap-6 md:flex-row max-w-5xl">
        
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500">
          <img
            src="/img/forwho-images/img3.jpeg"
            alt="Working Professionals"
            className="w-full object-cover"
          />
          <div className="flex flex-col gap-2 p-4 text-center">
            <h1 className="text-lg font-semibold text-orange-500">
              Students & Job Seekers
            </h1>
            <p className="text-sm text-white/80">
              To improve or regain the skills, track the proceess, and learning
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500">
          <img
            src="/img/forwho-images/img1.jpeg"
            alt="Working Professionals"
            className="w-full object-cover"
          />
          <div className="flex flex-col gap-2 p-4 text-center">
            <h1 className="text-lg font-semibold text-orange-500">
              Working Professionals
            </h1>
            <p className="text-sm text-white/80">
              Upskill, reskill, and plan the new careers growth with structured ways of learning
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500">
          <img
            src="/img/forwho-images/img2.jpeg"
            alt="Working Professionals"
            className="w-full object-cover"
          />
          <div className="flex flex-col gap-2 p-4 text-center">
            <h1 className="text-lg font-semibold text-orange-500">
              Recruiters & Organizations
            </h1>
            <p className="text-sm text-white/80">
              For track skilled persons, hiring talent ones
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
export default WhoIsItFor