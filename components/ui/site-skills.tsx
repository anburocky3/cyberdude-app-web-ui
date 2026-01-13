const SiteSkills = () => {
  return (
    <section className=" min-h-screen mt-32 mb-30">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 lg:relative lg:flex-row lg:justify-center w-full">
          <div className="flex justify-center text-center relative">
            <h1 className="text-3xl  font-semibold text-white">
              Skills you can
              <span
                className="bg-linear-to-r from-orange-300 via-amber-400 to-orange-600
              bg-clip-text text-transparent px-2"
              >
                Earn
              </span>{" "}
            </h1>
          </div>

        <div className="lg:absolute right-0 top-1/2 -translate-y-1/2 text-white">
          <div className="flex items-center  ">
            <label
              htmlFor="toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative ">
                <input type="checkbox" id="toggle" className="sr-only peer" />
                <div className="w-12 h-6  sm:w-12 sm:h-6 bg-gray-300 rounded-full peer-checked:bg-amber-500 transition-colors duration-300 "></div>
                <div className="absolute left-1 top-1 w-4 h-4 sm:w-4 sm:h-4 bg-amber-700 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6 "></div>
              </div>
            </label>
            <span className="ml-3 text-white font-medium">Course Roadmap</span>
          </div>
          </div>
        </div>

        <div
          id="gridone"
          className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20 md-10"
        >
          <div className="bg-white w-full rounded-lg overflow-hidden  className border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500">
            <div className="relative  ">
              <img
                className=" w-full"
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHl0aG9ufGVufDB8fDB8fHww"
                alt="course-image"
              />
              <span className="absolute top-3 right-0  bg-green-600 rounded-tl-md rounded-bl-md p-1 flex  text-white font-medium text-md ">
                Most recommended
              </span>
            </div>
            <div className="p-4 bg-white">
              <h1 className="text-orange-400 font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
                Python Programming
              </h1>
              <p className="text-gray-700 leading-tight font-normal text-md">
                Learn the entire app building process from scratch.
              </p>
              <div className="flex items-center mt-3 gap-1  ">
                <div className="flex -space-x-6 ">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/awizp.png"
                    alt="Vishnu"
                  />

                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/sidhgeetha.png"
                    alt="Geetha"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/prakashmcodes.png"
                    alt="Prakash"
                  />
                </div>

                <span className="flex gap-1 ml-2 text-sm font-medium text-amber-600  ">
                  1000 Enrolled this course
                </span>
              </div>

              <div className="  mt-4 mb-0">
                <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                  Start learning
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white w-full rounded-lg overflow-hidden className border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500  ">
            <div className="relative ">
              <img
                className=""
                src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="course-image"
              />

              <span className="absolute top-3 right-0  bg-purple-600 rounded-tl-md rounded-bl-md p-1 flex  text-white font-medium text-md">
                Top rated
              </span>
            </div>

            <div className="p-4 bg-white ">
              <h1 className="text-orange-400  font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
                Javascript Fundamentals
              </h1>
              <p className="text-gray-700 leading-tight font-normal text-md">
                Learn the entire app building process from scratch.
              </p>
              <div className="flex items-center mt-3">
                <div className="flex -space-x-6 ">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/awizp.png"
                    alt="Vishnu"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/sidhgeetha.png"
                    alt="Geetha"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/prakashmcodes.png"
                    alt="Prakash"
                  />
                </div>

                <span className="ml-2  font-sm text-sm font-medium text-amber-600">
                  200+ Enrolled this course
                </span>
              </div>

              <div className="  mt-4 mb-0">
                <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                  Start learning
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white w-full rounded-lg overflow-hidden  className border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500">
            <div className="relative">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh0bWx8ZW58MHx8MHx8fDA%3D"
                alt="course-image"
              />
              <span className="absolute top-3 right-0  bg-yellow-600 rounded-tl-md rounded-bl-md p-1 flex  text-white font-medium text-md">
                New
              </span>
            </div>
            <div className="p-4 ">
              <h1 className="text-orange-400 font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
                React Framework
              </h1>
              <p className="text-gray-700 leading-tight font-normal text-md">
                Learn the entire app building process from scratch.
              </p>
              <div className="flex items-center mt-3">
                <div className="flex -space-x-6 ">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/awizp.png"
                    alt="Vishnu"
                  />

                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/sidhgeetha.png"
                    alt="Geetha"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://github.com/prakashmcodes.png"
                    alt="Prakash"
                  />
                </div>

                <span className="ml-2  font-sm text-sm font-medium text-amber-600">
                  1500 Enrolled this course
                </span>
              </div>

              <div className="  mt-4 mb-0">
                <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                  Start learning
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="gridtwo"
          className=" grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20"
        >
          <div className="bg-white w-full rounded-lg overflow-hidden className p-4 border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500 ">
            <h1 className="text-orange-400  font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
              Python programming Roadmap
            </h1>
            <p className="text-gray-700 leading-tight font-medium text-md">
              What you are going to cover in this course!
            </p>

            <div className="flex flex-col mt-4 gap-4">
              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center ">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.27 19.27q-.518 0-.894-.377T1 18h3.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H23q0 .517-.376.893t-.893.376zm9.73-.5q.252 0 .434-.183t.182-.433t-.182-.434t-.434-.18t-.434.181t-.182.434t.182.433t.434.182M4.616 17h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.769q0 .23.192.423t.423.192M4 17V5z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Learn fundamentals
                </h3>
              </div>

              <div className="flex gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.001 16.154q.328 0 .548-.222t.22-.549t-.221-.548t-.55-.22t-.547.222t-.22.549t.221.548t.55.22M6.5 13.23h1V7.846h-1zm4 1.269h7v-1h-7zm0-4h7v-1h-7zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Problem solving exercises
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Work on real world problems
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.071 13.462L12 12.298l1.929 1.164l-.523-2.196l1.711-1.475l-2.24-.187L12 7.539l-.877 2.065l-2.24.187l1.711 1.475zM6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Quizz & Grit & Persistence Score
                </h3>
              </div>
            </div>

            <div className="  mt-4 mb-0">
              <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                More details
              </button>
            </div>
          </div>

          <div className="bg-white w-full rounded-lg overflow-hidden  className p-4 border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500 ">
            <h1 className="text-orange-400  font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
              Python programming Roadmap
            </h1>
            <p className="text-gray-700 leading-tight font-medium text-md">
              What you are going to cover in this course!
            </p>

            <div className="flex flex-col mt-4 gap-4">
              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center ">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.27 19.27q-.518 0-.894-.377T1 18h3.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H23q0 .517-.376.893t-.893.376zm9.73-.5q.252 0 .434-.183t.182-.433t-.182-.434t-.434-.18t-.434.181t-.182.434t.182.433t.434.182M4.616 17h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.769q0 .23.192.423t.423.192M4 17V5z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Learn fundamentals
                </h3>
              </div>

              <div className="flex gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.001 16.154q.328 0 .548-.222t.22-.549t-.221-.548t-.55-.22t-.547.222t-.22.549t.221.548t.55.22M6.5 13.23h1V7.846h-1zm4 1.269h7v-1h-7zm0-4h7v-1h-7zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Problem solving exercises
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Work on real world problems
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.071 13.462L12 12.298l1.929 1.164l-.523-2.196l1.711-1.475l-2.24-.187L12 7.539l-.877 2.065l-2.24.187l1.711 1.475zM6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Quizz & Grit & Persistence Score
                </h3>
              </div>
            </div>

            <div className="  mt-4 mb-0">
              <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                More details
              </button>
            </div>
          </div>

          <div className="bg-white w-full rounded-lg overflow-hidden  className p-4 border transform   hover:scale-110  border-gray-700 transition-all duration-300 hover:border-orange-500 ">
            <h1 className="text-orange-400  font-bold text-xl lg:text-2xl md:text-xl sm:text-lg  mb-2 ">
              Python programming Roadmap
            </h1>
            <p className="text-gray-700 leading-tight font-medium text-md">
              What you are going to cover in this course!
            </p>

            <div className=" flex flex-col mt-4 gap-4">
              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center ">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.27 19.27q-.518 0-.894-.377T1 18h3.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H23q0 .517-.376.893t-.893.376zm9.73-.5q.252 0 .434-.183t.182-.433t-.182-.434t-.434-.18t-.434.181t-.182.434t.182.433t.434.182M4.616 17h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.769q0 .23.192.423t.423.192M4 17V5z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Learn fundamentals
                </h3>
              </div>

              <div className="flex gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.001 16.154q.328 0 .548-.222t.22-.549t-.221-.548t-.55-.22t-.547.222t-.22.549t.221.548t.55.22M6.5 13.23h1V7.846h-1zm4 1.269h7v-1h-7zm0-4h7v-1h-7zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Problem solving exercises
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Work on real world problems
                </h3>
              </div>

              <div className="flex  gap-4 bg-stone-100 border border-amber-200 rounded p-2 text-gray-800 text-center items-center">
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.071 13.462L12 12.298l1.929 1.164l-.523-2.196l1.711-1.475l-2.24-.187L12 7.539l-.877 2.065l-2.24.187l1.711 1.475zM6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"
                  />
                </svg>
                <h3 className="font-medium text-sm text-gray-900">
                  Quizz & Grit & Persistence Score
                </h3>
              </div>
            </div>

            <div className="  mt-4 mb-0">
              <button className="cta px-6 py-2 rounded-md bg-linear-to-r from-orange-300  to-orange-500 text-black lg:text-lg font-bold w-full  ">
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSkills;
