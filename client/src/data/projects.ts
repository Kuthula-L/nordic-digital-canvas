// import projectSeren from "@/assets/project-seren.jpg";
// import projectModernFork from "@/assets/project-modernfork.jpg";
// import projectSmartComparer from "@/assets/project-smartcomparer.jpg";
// import projectSharecount from "@/assets/project-sharecount.jpg";
// import projectCalmera from "@/assets/project-calmera.jpg";

export interface Project {
  id: string;
  title: string;
  type:string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  video: string;
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
    id: "calmera",
    title: "Calmera",
    type:"mobile",
    subtitle: "Mental Wellness Companion",
    description:
      "A guided mental health app featuring breathing sessions, proximity chat, and an AI companion.",
    year: "2023",
    tags: ["React.js", "Frontend Only"],
    video: "/calmera/calmera.mp4",
    overview:
      "Calmera is a frontend-only mental wellness app designed for mindfulness and community. It includes breathing sessions, a safe-space proximity chat, AI conversation with 'Jeff,' and activity-based self-help tools.",
    problem:
      "Many mental health apps overwhelm users with complex flows or lock core features behind accounts and paywalls.",
    solution:
      "Calmera keeps things lightweight and accessible with purely client-side features and a clean, calming interface.",
    techStack: ["React.js", "Local Storage", "UI Animations"],
    gallery: ["", "", ""],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },  {
    id: "sharecount",
    title: "ShareCount",
    type:"desktop",
    subtitle: "Referral & Email Verification Platform",
    description:
      "A referral-driven platform with automated email verification and referral-code tracking.",
    year: "2024",
    tags: ["Django", "React.js", "Emailing", "Referral System"],
    video: "/Sharecount/sharecount.mp4",
    overview:
      "ShareCount helps brands grow with a powerful waitlist and referral system. Every user gets a unique referral code and receives emails for verification and usage updates.",
    problem:
      "Startups struggle to build reliable, automated waitlist systems with proper referral tracking.",
    solution:
      "ShareCount generates referral codes, verifies email ownership, tracks code usage, and notifies users automatically.",
    techStack: [
      "Django",
      "React.js",
      "Supabase",
      "AWS Lambda",
      "Netlify",
      "Email Automation"
    ],
    gallery: ["", "", ""],
    liveUrl: "https://sharecount.co.za",
    repoUrl: "https://github.com"
  },
  {
    id: "seren",
    title: "Seren",
    type:"mobile",
    subtitle: "Uber Driver Reporting Platform",
    description:
      "A sleek web platform where users can report or search for reported Uber drivers.",
    year: "2025",
    tags: ["Django", "React.js", "Supabase"],
    video: "/seren/seren.mp4",
    overview:
      "Seren provides a simple way for passengers to report concerns about Uber drivers or check if a driver has previous reports. Built with a clean UI and fast querying.",
    problem:
      "Riders often have no centralized way to verify complaints or report unsafe rides, leading to repeated incidents.",
    solution:
      "Seren offers two optimized forms for reporting and checking, backed by structured data storage and fast lookups to improve rider safety.",
    techStack: [
      "Django",
      "React.js",
      "Supabase (PostgreSQL)",
      "Netlify",
      "AWS Lambda"
    ],
    gallery: ["/seren/seren showcase 1.png", "/seren/seren showcase 2.png"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "modern-fork",
    type:"desktop",
    title: "Modern Fork",
    subtitle: "Restaurant Booking Website",
    description:
      "A modern restaurant site featuring a table reservation system with automated confirmation emails.",
    year: "2025",
    tags: ["Django", "React.js", "Email Automation"],
    video: "/modern fork/modern fork.mp4",
    overview:
      "Modern Fork streamlines restaurant bookings with a fast, intuitive reservation interface and automated confirmation emails.",
    problem:
      "Restaurants struggle with manual bookings, missed messages, and inconsistent confirmations.",
    solution:
      "Modern Fork automates reservations, sends confirmation emails instantly, and ensures smooth communication between customers and the restaurant.",
    techStack: [
      "Django",
      "React.js",
      "Supabase",
      "AWS Lambda",
      "Netlify",
      "EmailJS / SMTP"
    ],
    gallery: ["/modern fork/modern fork showcase.png", "/modern fork/modern fork showcase 2.png"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "smart-comparer",
    type:"mobile",
    title: "Smart Comparer",
    subtitle: "Grocery Price Comparison Platform",
    description:
      "A full-featured grocery comparison tool with authentication, guest baskets, and favorites.",
    year: "2025",
    tags: ["Django", "React.js", "Supabase", "Authentication"],
    video: "/smart-compare/smart-comparer.mp4",
    overview:
      "Smart Comparer allows users to compare grocery items across major supermarkets. It supports registered users, guest users with temporary baskets, and a favorites system.",
    problem:
      "Consumers waste time comparing grocery prices manually across stores, often overspending.",
    solution:
      "Smart Comparer automates price comparison, saves user preferences, and offers guest access to lower friction for first-time users.",
    techStack: [
      "Django",
      "React.js",
      "Supabase (PostgreSQL)",
      "AWS Lambda",
      "Netlify"
    ],
    gallery: ["/smart-compare/showcase-desktop.png","/smart-compare/showcase-mobile.png", "/smart-compare/home smartcompare.png", "/smart-compare/app showcase.png"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },


];
