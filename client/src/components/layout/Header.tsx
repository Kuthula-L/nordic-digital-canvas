import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Work" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-display font-semibold">KL</span>
            </div>
            <span className="font-display font-medium text-foreground">kuthula Langa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-muted-foreground">Available</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-card mt-2 mx-4 rounded-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg font-display py-2 border-b border-border last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm text-muted-foreground">Available for projects</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
