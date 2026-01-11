export default function SiteFooter() {
  return (
    <>
      <section className="text-white bg-stone-900  flex flex-col gap-12 ">
        <div className="flex flex-col md:flex-row items-center  gap-32 px-24 mt-12 ">
          <div className="">
            <h3 className="font-bold text-3xl md:text-xl mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-light text-lg  md:text-sm ">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="font-light text-lg  md:text-sm">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="font-light text-lg  md:text-sm  ">
                  Contact feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-3xl md:text-xl mb-4">Learners</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-light text-lg  md:text-sm ">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="font-light text-lg  md:text-sm  ">
                  Course roadmaps
                </a>
              </li>

              <li>
                <a href="#" className="font-light text-lg  md:text-sm ">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-3xl md:text-xl mb-4">Recruiters</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-light text-lg md:text-sm">
                  People
                </a>
              </li>
              <li>
                <a href="#" className="font-light text-lg md:text-sm">
                  Sessions
                </a>
              </li>
              <li>
                <a href="#" className="font-light text-lg md:text-sm ">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="">
              <img className=" h-20  " src="/img/logo.svg" alt="company-logo" />
            </div>

            <div className="flex flex-row py-8 px-10 space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 15"
                className="hover:text-amber-600"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M4.5 6v5m6 0V8.5a2 2 0 1 0-4 0V11V6M4 4.5h1M1.5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="hover:text-amber-600"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 14 14"
                className="hover:text-amber-600"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="13" height="10" x=".5" y="2" rx="2" />
                  <path d="M5.31 9.32v-4.2a.39.39 0 0 1 .6-.34l3.6 2.1a.4.4 0 0 1 0 .69l-3.6 2.1a.4.4 0 0 1-.6-.35Z" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className="hover:text-amber-600"
              >
                <g fill="none" stroke="currentColor" strokeWidth="3">
                  <path
                    strokeLinejoin="round"
                    d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"
                  />
                  <path
                    strokeLinejoin="round"
                    d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"
                  />
                  <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="grow border-t border-gray-400/20"></div>

        <p className="font-light px-24 text-sm text-center py-5">
          © {new Date().getFullYear()} Copyright{" "}
          <span className="text-amber-400 text-sm">
            CyberDude Networks Pvt. Ltd. All Rights Reserved.
          </span>{" "}
        </p>
      </section>
    </>
  );
}
