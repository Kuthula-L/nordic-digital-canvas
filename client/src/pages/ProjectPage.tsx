import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
            <Link to="/" className="btn-secondary">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <Layout>
      <article className="pt-32 pb-20">
        <div className="section-container">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-caption">{project.year}</span>
              <span className="w-8 h-px bg-border"></span>
              <span className="text-caption">{project.subtitle}</span>
            </div>
            <h1 className="text-display font-display mb-6">{project.title}</h1>
            <p className="text-body-large text-muted-foreground max-w-2xl">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Live Site
                  <ExternalLink size={16} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </motion.header>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <video
                  src={project.video}
                    autoPlay
                    muted
                    loop
                    // playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}

                  // alt={project.title}
                  // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-caption">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="space-y-2">
                <h3 className="text-caption">Year</h3>
                <p className="text-lg font-display">{project.year}</p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <h3 className="text-caption">Category</h3>
                <p className="text-lg font-display">{project.subtitle}</p>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8 space-y-12"
            >
              {/* Overview */}
              <section className="space-y-4">
                <h2 className="text-headline font-display">Overview</h2>
                <p className="text-body-large text-muted-foreground">
                  {project.overview}
                </p>
              </section>

              {/* Problem */}
              <section className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-caption text-highlight">The Challenge</h3>
                <p className="text-body text-foreground">{project.problem}</p>
              </section>

              {/* Solution */}
              <section className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-caption">The Solution</h3>
                <p className="text-body text-foreground">{project.solution}</p>
              </section>

              {/* Gallery */}
              <section className="space-y-6">
                <h2 className="text-headline font-display">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          </div>

          {/* Next Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-20 border-t border-border"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-caption">Next Project</span>
            </div>
            <Link to={`/project/${nextProject.id}`} className="group block">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-light group-hover:text-muted-foreground transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {nextProject.subtitle}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <span className="text-muted-foreground group-hover:text-background transition-colors">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectPage;
