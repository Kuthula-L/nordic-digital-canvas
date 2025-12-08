import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectTravel from "@/assets/project-travel.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectFood from "@/assets/project-food.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  image: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "nordic-ecommerce",
    title: "Nordic E-Commerce",
    subtitle: "Minimalist Shopping Experience",
    description: "A Scandinavian-inspired e-commerce platform with seamless checkout and beautiful product displays.",
    year: "2024",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    image: projectEcommerce,
    overview: "Nordic E-Commerce reimagines online shopping with a focus on simplicity and user experience. The platform features a clean, minimal interface that puts products front and center.",
    problem: "Traditional e-commerce sites often overwhelm users with cluttered interfaces and complex navigation, leading to cart abandonment and poor user experience.",
    solution: "We designed a streamlined shopping experience with intuitive navigation, fast-loading product pages, and a frictionless checkout process that increased conversion rates by 40%.",
    techStack: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL", "Prisma"],
    gallery: [projectEcommerce, projectEcommerce, projectEcommerce],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "wellness-app",
    title: "Mindful Wellness",
    subtitle: "Mental Health Companion",
    description: "A meditation and wellness app helping users build mindful habits through guided sessions.",
    year: "2024",
    tags: ["React Native", "Node.js", "MongoDB"],
    image: projectWellness,
    overview: "Mindful Wellness is a mobile application designed to make meditation and mental wellness accessible to everyone through personalized guided sessions.",
    problem: "Many people struggle to maintain consistent meditation practices due to lack of guidance and personalization in existing apps.",
    solution: "We built an AI-powered recommendation system that adapts to user preferences and schedules, resulting in 65% higher retention rates.",
    techStack: ["React Native", "Expo", "Node.js", "MongoDB", "OpenAI API", "Firebase"],
    gallery: [projectWellness, projectWellness, projectWellness],
    liveUrl: "https://example.com"
  },
  {
    id: "fintech-dashboard",
    title: "Aurora Finance",
    subtitle: "Smart Financial Dashboard",
    description: "Real-time financial analytics platform with intuitive data visualization and insights.",
    year: "2023",
    tags: ["React", "D3.js", "Python", "AWS"],
    image: projectFinance,
    overview: "Aurora Finance provides businesses with powerful financial analytics tools wrapped in an elegant, easy-to-understand interface.",
    problem: "Financial data is often presented in complex, hard-to-interpret formats that make decision-making difficult for non-technical stakeholders.",
    solution: "We created interactive visualizations and AI-powered insights that transform raw financial data into actionable intelligence.",
    techStack: ["React", "D3.js", "Python", "FastAPI", "AWS", "PostgreSQL", "Redis"],
    gallery: [projectFinance, projectFinance, projectFinance],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "travel-platform",
    title: "Wanderlust",
    subtitle: "Travel Planning Reimagined",
    description: "An intelligent travel planning platform that creates personalized itineraries based on preferences.",
    year: "2023",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    image: projectTravel,
    overview: "Wanderlust transforms the travel planning experience by combining AI-powered recommendations with community-driven insights.",
    problem: "Planning travel is time-consuming and often results in generic itineraries that don't match personal interests.",
    solution: "Our intelligent algorithm learns from user preferences and travel history to suggest unique, personalized experiences.",
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Mapbox", "OpenAI", "Vercel"],
    gallery: [projectTravel, projectTravel, projectTravel],
    liveUrl: "https://example.com"
  },
  {
    id: "saas-analytics",
    title: "Metric Hub",
    subtitle: "SaaS Analytics Platform",
    description: "Comprehensive analytics solution for SaaS companies tracking key metrics and user behavior.",
    year: "2023",
    tags: ["React", "Node.js", "ClickHouse"],
    image: projectSaas,
    overview: "Metric Hub provides SaaS companies with the insights they need to understand user behavior and optimize their products.",
    problem: "SaaS companies often struggle to connect the dots between user actions and business outcomes.",
    solution: "We built a unified analytics platform that correlates user behavior with revenue metrics, providing actionable insights.",
    techStack: ["React", "Node.js", "ClickHouse", "Redis", "Docker", "Kubernetes"],
    gallery: [projectSaas, projectSaas, projectSaas],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "food-delivery",
    title: "Fresh Feast",
    subtitle: "Farm-to-Table Delivery",
    description: "A sustainable food delivery platform connecting local farms directly with consumers.",
    year: "2022",
    tags: ["React Native", "Firebase", "Stripe"],
    image: projectFood,
    overview: "Fresh Feast bridges the gap between local farms and urban consumers, promoting sustainable eating habits.",
    problem: "Consumers lack easy access to fresh, locally-sourced produce, while small farms struggle with distribution.",
    solution: "We created a marketplace that handles logistics, payments, and scheduling, making farm-fresh food accessible to everyone.",
    techStack: ["React Native", "Firebase", "Stripe", "Google Maps API", "Node.js"],
    gallery: [projectFood, projectFood, projectFood],
    liveUrl: "https://example.com"
  },
  {
    id: "education-platform",
    title: "LearnFlow",
    subtitle: "Interactive Learning Platform",
    description: "An adaptive learning platform that personalizes educational content for each student.",
    year: "2022",
    tags: ["Vue.js", "Python", "ML", "AWS"],
    image: projectEducation,
    overview: "LearnFlow uses machine learning to create personalized learning paths that adapt to each student's pace and style.",
    problem: "Traditional online courses offer one-size-fits-all content that doesn't account for individual learning differences.",
    solution: "Our adaptive algorithm continuously adjusts content difficulty and format based on student performance and engagement.",
    techStack: ["Vue.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
    gallery: [projectEducation, projectEducation, projectEducation],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "real-estate",
    title: "HomeVista",
    subtitle: "Virtual Property Tours",
    description: "An immersive real estate platform featuring 3D virtual tours and AI-powered property matching.",
    year: "2021",
    tags: ["React", "Three.js", "Node.js"],
    image: projectRealestate,
    overview: "HomeVista revolutionizes property searching with immersive 3D tours and intelligent matching algorithms.",
    problem: "House hunting is time-consuming and often requires multiple in-person visits to properties that may not be a good fit.",
    solution: "We developed photorealistic 3D tours and an AI matching system that pre-qualifies properties based on buyer preferences.",
    techStack: ["React", "Three.js", "Node.js", "MongoDB", "AWS", "WebGL"],
    gallery: [projectRealestate, projectRealestate, projectRealestate],
    liveUrl: "https://example.com"
  }
];
