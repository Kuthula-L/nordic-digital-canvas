import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background text-xs font-display font-semibold">JD</span>
              </div>
              <span className="font-display font-medium">Portfolio</span>
            </div>
            <p className="text-body text-muted-foreground max-w-xs">
              Crafting digital experiences with precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-caption">Navigation</h4>
            <div className="flex flex-col gap-2">
              <a href="/#about" className="nav-link inline-block">About</a>
              <a href="/#projects" className="nav-link inline-block">Work</a>
              <a href="/#contact" className="nav-link inline-block">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-caption">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with care in Scandinavia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
