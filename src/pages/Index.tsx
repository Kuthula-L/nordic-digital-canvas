import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsTimeline from "@/components/sections/ProjectsTimeline";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsTimeline />
      <ContactSection />
    </Layout>
  );
};

export default Index;
