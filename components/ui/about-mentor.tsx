export default function AboutMentor() {
  return (
    <section className="relative text-white">
      <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        {/* mentors content */}
        <div className="w-full h-full space-y-5">
          <h3 className="text-md md:text-xl text-mute font-semibold">
            About Our <span className="text-orange">Mentors</span> and
            <span className="text-orange"> Recruiters</span>
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            Your way to New <span className="custom-gradient">Horizons</span>
          </h1>
          <p className="text-md text-mute">
            Find mentors who will help your potential, achieve your professional
            and personal goals, and build the future you dream of today
          </p>

          <div className="flex gap-3 items-center justify-start mt-5 flex-wrap">
            <p className="content_chips">Frontend</p>
            <p className="content_chips">Backend</p>
            <p className="content_chips">Devops</p>
            <p className="content_chips">Cloud</p>
          </div>

          <div className="flex justify-start gap-5 items-center mt-10">
            <div className="container_card">
              <h4 className="text-sm font-semibold">
                Coaches and Mentors with Extensive Experience
              </h4>
              <p className="text-2xl text-mute font-bold">5+ Years</p>
            </div>

            <div className="container_card">
              <h4 className="text-sm font-semibold">
                Active users who can find ideal mentors on this site
              </h4>
              <p className="text-2xl text-mute font-bold">10k Users</p>
            </div>
          </div>
        </div>

        {/* mentors banner */}
        <div className="w-full sm:w-[75%] h-full sm:h-[60%]">
          <img src="/img/mentor/anbuselvan-tutor.png" alt="Mentor banner" />
        </div>
      </div>
    </section>
  );
}
