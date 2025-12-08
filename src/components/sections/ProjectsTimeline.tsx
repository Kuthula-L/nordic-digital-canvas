import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

interface TimelineItemProps {
  project: typeof projects[0];
  index: number;
  isLeft: boolean;
}

const TimelineItem = ({ project, index, isLeft }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 py-8 md:py-12">
      {/* Date - Left side on desktop */}
      <div className={`flex items-start ${isLeft ? "md:justify-end md:order-1" : "md:order-3 md:justify-start"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden mb-2"
        >
          <span className="text-caption">{project.year}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <span className="text-4xl font-display font-light text-muted-foreground">{project.year}</span>
        </motion.div>
      </div>

      {/* Timeline Center */}
      <div className="hidden md:flex flex-col items-center order-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="timeline-dot z-10"
        />
      </div>

      {/* Project Card */}
      <div className={`${isLeft ? "md:order-3" : "md:order-1"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to={`/project/${project.id}`} className="group block">
            <div className="project-card">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display font-medium text-xl mb-1 group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                </div>

                <p className="text-body text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="section-padding border-t border-border" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-caption mb-4 block">03 — Work</span>
          <h2 className="text-headline font-display mb-4">
            Selected Projects
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            A curated collection of projects that showcase my expertise in building 
            thoughtful digital experiences.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-timeline-line -translate-x-1/2">
            {/* Progress indicator */}
            <motion.div
              style={{ height: progressHeight }}
              className="w-full bg-timeline-progress origin-top"
            />
          </div>

          {/* Project Items */}
          <div className="relative">
            {projects.map((project, index) => (
              <TimelineItem
                key={project.id}
                project={project}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
