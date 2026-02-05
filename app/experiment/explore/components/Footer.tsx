const Footer = () => {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="container relative z-10 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                    Join CyberDude and transform the way you learn development.
                </p>
                <a
                    href="#skill-programs"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all glow-primary text-lg"
                >
                    Get Started Now
                </a>
            </div>
        </section>
    );
};

export default Footer;