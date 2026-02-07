import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Learning": [
      { name: "Free Courses", href: "#free-courses" },
      { name: "Premium Tracks", href: "#premium" },
      { name: "Crash Courses", href: "#" },
      { name: "Workshops", href: "#" },
      { name: "Community", href: "#" },
    ],
    "Career Tracks": [
      { name: "MERN Stack", href: "#" },
      { name: "LAMP Stack", href: "#" },
      { name: "Cloud & DevOps", href: "#" },
      { name: "Full-Stack", href: "#" },
      { name: "System Design", href: "#" },
    ],
    "Company": [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "For Recruiters", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    "Support": [
      { name: "Help Center", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/cdudenetworks", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/cyberdude-networks/posts/?feedView=all", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/cyberdudenetworks", label: "YouTube" },
    { icon: Github, href: "https://github.com/anburocky3", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">Get the latest courses, tips, and career resources delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
              />
              <button className="bg-linear-to-r from-primary to-[hsl(280,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105 h-11 px-6 py-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-cyber-purple flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                CYBER<span className="text-primary">DUDE</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              India&apos;s most trusted tech learning platform. From beginner to job-ready developer in months, not years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@cyberdude.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 CyberDude Networks Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
