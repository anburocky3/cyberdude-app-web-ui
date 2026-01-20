"use client";

import { MentorDetails } from "@/data/aboutMentors";

export default function WhoTeaches() {
  return (
    <section className="bg-black text-white py-10 pb-15 px-3">
      <div className="container mx-auto">

        {/* Content */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-center text-4xl font-semibold mb-6">
            Who Teaches <span className="custom-gradient">Our Students</span>?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            {MentorDetails.description}
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            {MentorDetails.subDescription}
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {MentorDetails.mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="relative overflow-hidden rounded-2xl bg-black opacity-0 translate-y-6 animate-fadeSlideIn transition-transform duration-500 hover:scale-[1.02] group"
            >
              {/* Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/50 to-transparent" />
              <div
                className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 hidden lg:block"
              >
                <p className="font-semibold custom-gradient">
                  {mentor.name}
                </p>
                <p className="text-sm text-semibold text-white">
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
