export default function SiteHeader() {
  return (
    <header className="px-20 py-10 font-inter space-x-10 flex justify-between w-full mx-auto items-center text-center lg:px-12 md:px-8 fixed top-0 left-0 z-50 bg-black ">
      <div className="w-full max-w-7xl px-10 lg:px-6 sm:px-6 flex lg:justify-start sm:justify-start">
        <img
          src="/img/logo.svg"
          className="w-12 h-8 sm:w-20 sm:h-14 md:w-20 md:h-16 lg:w-20 lg:h-16"
          alt="CyberDude Logo"
        />
      </div>

      <div className="hidden text-white md:flex text-sm md:text-base lg:text-lg items-center justify-between space-x-6 ">
        {/* <!-- Nav Links --> */}
        <ul className="flex items-center space-x-12">
          <li className="flex items-center gap-1">
            <a
              href="#company"
              className="hover:underline hover:decoration-teal-400"
            >
              Company
            </a>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                />
              </svg>
            </span>{" "}
          </li>{" "}
          <li>
            <a
              href="#learners"
              className="hover:underline hover:decoration-teal-400"
            >
              Learners
            </a>
          </li>
          <li>
            <a
              href="#recruiters"
              className="hover:underline hover:decoration-teal-400"
            >
              Recruiters
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:underline hover:decoration-teal-400"
            >
              Pricing
            </a>
          </li>
        </ul>{" "}
      </div>
      <div className="md:hidden ">
        <input type="checkbox" id="menuToggle" className="peer hidden" />

        <label
          htmlFor="menuToggle"
          className=" cursor-pointer flex items-center justify-center relative z-50"
        >
          <svg
            className="block w-6 h-6 text-white peer-checked:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />{" "}
          </svg>{" "}
          <svg
            className="hidden peer-checked:block w-6 h-6 text-white "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />{" "}
          </svg>
        </label>

        {/* <!-- Mobile Menu --> */}
        <nav className="hidden peer-checked:flex flex-col absolute justify-center text-center top-full left-0 w-full bg-black text-white space-y-4 p-4 md:hidden">
          <a href="#">Company</a> <a href="#">Learners</a>{" "}
          <a href="#">Recruiters</a> <a href="#">Pricing</a>{" "}
          <a
            href="#"
            className="text-black bg-white px-4 py-2 rounded hover:bg-gray-200 font-medium mx-auto"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
