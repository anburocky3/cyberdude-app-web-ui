const Footer = () => {
  return (
    <section className="pb-24 py-5 relative">
      <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent" />
      <div className="container mx-auto relative z-10 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Join CyberDude and transform the way you learn development.
        </p>
        <a
          href="#skill-programs"
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-300  to-orange-500 text-black hover:from-orange-400 hover:to-orange-500 transition-all duration-300 rounded-full font-semibold"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default Footer;
