import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Kuthula-L", icon: "GH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kuthula-langa-187605170", icon: "LI" },
    // { label: "Twitter", href: "https://twitter.com", icon: "TW" },
  ];

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-caption mb-4 block">04 — Contact</span>
              <h2 className="text-headline font-display mb-4">
                Let's create
                <br />
                <span className="text-muted-foreground">something great</span>
              </h2>
              <p className="text-body text-muted-foreground max-w-md">
                Have a project in mind or just want to chat? I'd love to hear from you. 
                Let's discuss how we can work together.
              </p>
            </div>

            {/* Direct Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-caption">Direct Email</h3>
              <a
                href="mailto:hello@portfolio.dev"
                className="flex items-center gap-3 text-lg font-display hover:text-muted-foreground transition-colors"
              >
                <Mail size={20} />
                kuthula144@gmail.com
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-caption">Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300 group"
                  >
                    <span className="text-xs font-semibold">{link.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-border bg-card"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
