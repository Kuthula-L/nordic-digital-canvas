import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React", "React Native", "TypeScript", "Node.js", 
  "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB",
  "UI/UX Design", "Figma", "CMS", "REST APIs"
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-border" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-caption mb-4 block">02 — About</span>
          <h2 className="text-headline font-display">
            A developer with an eye
            <br />
            <span className="text-muted-foreground">for design</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent to-secondary overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-display font-light text-foreground/40">JD</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-border/50 rounded-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-foreground/5 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-body-large">
                I'm a full-stack developer passionate about creating digital experiences 
                that are both beautiful and functional. With over 5 years of experience, 
                I've worked with startups and established companies to bring their visions to life.
              </p>
              <p className="text-body text-muted-foreground">
                My approach combines clean code with thoughtful design. I believe that 
                great software should not only work flawlessly but also delight users 
                at every interaction. From concept to deployment, I focus on creating 
                products that make a real impact.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-caption">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "40+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-display font-light mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
