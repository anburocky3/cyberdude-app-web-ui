import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 ">
            {/* Brand */}
            <div className="col-span-2">
              <div className="mb-5 w-44">
                <img src="/img/logo.svg" alt="CyberDude logo" />
              </div>
              <p className="">
                CyberDude Networks Pvt. Ltd. is Startup who crave to create
                creative product.
              </p>
              <p className="text-sm leading-relaxed">
                We stimulate creativity in each and everything that appears to
                our eye. We love doing it.
              </p>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                About
              </h3>
              <ul className="space-y-2 text-sm">
                {["Company", "Location", "Contact feedback"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Learners
              </h3>
              <ul className="space-y-2 text-sm">
                {["Courses", "Course Roadmaps", "Projects"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Recruiters
              </h3>
              <ul className="space-y-2 text-sm">
                {["People", "sessions", "Testimonials"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Social
              </h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social link"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 CyberDude Networks Pvt. Ltd. All Rights Reserved.</p>

            <div className="flex gap-6">
              {["Terms", "Privacy", "Compliances"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
