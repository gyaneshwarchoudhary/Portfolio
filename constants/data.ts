// Data Configuration
export const portfolioData = {
  personal: {
    name: "Gyaneshwar Choudhary",
    title: "Software Engineer",
    tagline: "Building the digital future, one line of code at a time.",
    subtitle:
      "Software Engineer passionate about Full Stack Development and Scalable Solution & Architecture.",
    email: "gyaneshwarchoudhary637@gmail.com",
    phone: "+91 9669567787",
    location: "Indore, India",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    resumeUrl: "/resume.pdf",
  },
  skills: [
    { name: "C", icon: "C.svg", catagory: "Languages" },
    { name: "C++", icon: "C++.svg", catagory: "Languages" },
    { name: "JavaScript", icon: "JavaScript.svg", category: "Languages" },
    { name: "TypeScript", icon: "Typescript.svg", category: "Languages" },
    { name: "Python", icon: "Python.svg", category: "Languages" },
    { name: "Node.js", icon: "Node.js.svg", category: "Backend" },
    { name: "Flask", icon: "Flask.svg", catagory: "Backend" },
    { name: "FastAPI", icon: "FastAPI.svg", catagory: "Backend" },
    { name: "MongoDB", icon: "MongoDB.svg", category: "Database" },
    { name: "MySQL", icon: "MySQL.svg", category: "Database" },
    { name: "PostgresSQL", icon: "PostgresSQL.svg", category: "Database" },
    { name: "HTML5", icon: "html-5.svg", category: "Frontend" },
    { name: "CSS3", icon: "CSS3.svg", category: "Frontend" },
    { name: "React", icon: "react-1.svg", category: "Frontend" },
    { name: "Next.js", icon: "Next.js.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss.svg", category: "Frontend" },
    { name: "Docker", icon: "Docker.svg", catagory: "Tools" },
    { name: "AWS", icon: "AWS.svg", catagory: "Tools" },
    { name: "Git", icon: "Git.svg", category: "Tools" },
  ],
  social: {
    github: "https://github.com/gyaneshwarchoudhary",
    linkedin: "",
    twitter: "",
  },
  achievements: {
    featured: {
      title: "HackTech 2024 Winner",
      project: "EcoTrack",
      description:
        "Secured 1st place by building EcoTrack, a carbon footprint tracking solution that helps users reduce their environmental impact through AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      badge: "🏆 Winner",
    },
  },
  projects: [
    {
      title: "TaskFlow Pro",
      description:
        "A collaborative project management tool with real-time updates and AI-powered task prioritization.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      link: "#",
    },
    {
      title: "DevBlog Platform",
      description:
        "A markdown-based blogging platform built for developers with syntax highlighting and code playground integration.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
      link: "#",
    },
    {
      title: "WeatherViz",
      description:
        "Real-time weather visualization dashboard with interactive maps and 7-day forecasts using OpenWeather API.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Express", "Redis"],
      link: "#",
    },
    {
      title: "CodeSnippet Manager",
      description:
        "A personal code snippet organizer with tagging, search, and GitHub Gist integration for developers.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind", "GitHub API"],
      link: "#",
    },
  ],
};
