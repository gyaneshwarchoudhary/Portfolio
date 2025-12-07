// Data Configuration
export const portfolioData = {
  personal: {
    name: "Gyaneshwar Choudhary",
    title: "Software Engineer",
    tagline: "Building systems that survive real-world use",
    subtitle:
      "Built award-winning AI, real-time web platforms, and assistive hardware recognized at national hackathons.",
    email: "gyaneshwarchoudhary637@gmail.com",
    phone: "+91 9669567787",
    location: "Indore, India",
    profileImage: "profile.png",
    resumeUrl: "resume.pdf",
  },
  skills: [
    { name: "C", icon: "C.svg", category: "Languages" },
    { name: "C++", icon: "C++.svg", category: "Languages" },
    { name: "JavaScript", icon: "JavaScript.svg", category: "Languages" },
    { name: "TypeScript", icon: "Typescript.svg", category: "Languages" },
    { name: "Python", icon: "Python.svg", category: "Languages" },

    { name: "HTML5", icon: "html-5.svg", category: "Frontend" },
    { name: "CSS3", icon: "CSS3.svg", category: "Frontend" },
    { name: "React", icon: "react-1.svg", category: "Frontend" },
    { name: "Next.js", icon: "Next.js.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss.svg", category: "Frontend" },

    { name: "Node.js", icon: "Node.js.svg", category: "Backend" },
    { name: "Flask", icon: "Flask.svg", category: "Backend" },
    { name: "FastAPI", icon: "FastAPI.svg", category: "Backend" },

    { name: "MongoDB", icon: "MongoDB.svg", category: "Database" },
    { name: "Redis", icon: "Redis.svg", category: "Database" },
    { name: "MySQL", icon: "MySQL.svg", category: "Database" },
    { name: "PostgreSQL", icon: "PostgresSQL.svg", category: "Database" },

    { name: "Docker", icon: "Docker.svg", category: "DevOps & Cloud" },
    { name: "AWS", icon: "AWS.svg", category: "DevOps & Cloud" },

    { name: "Git", icon: "Git.svg", category: "Tools & Platforms" },
    { name: "GitHub", icon: "GitHub.svg", category: "Tools & Platforms" },
    {
      name: "Apache Kafka",
      icon: "Apache Kafka.svg",
      category: "Tools & Platforms",
    },
  ],
  social: {
    github: "https://github.com/gyaneshwarchoudhary",
    linkedin: "https://www.linkedin.com/in/gyaneshwar-choudhary-36619b238/",
    twitter: "https://x.com/gyaneshwar__",
  },
  projects: [
    {
      title: "CodePair: Pair Programming Platform ",
      description:
        "Codepair is a real-time collaborative coding platform where users join shared rooms to code, compile, and run programs together in C++, Java, JavaScript, or Python. All changes sync instantly for everyone, with inline comments and built-in chat for smooth collaboration.",
      image: "codepair.png",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "Socket.io",
        "Bootstrap",
        "Docker",
      ],
      link: "https://codepairv2.vercel.app/",
    },
    {
      title: "Voci: AI Powered Learning Companion",
      description:
        "Voci lets learners build AI tutoring companions and study through natural, low-latency voice conversations. It transforms any subject into an interactive, guided learning experience.",
      image: "voci.png",
      tech: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Clerk",
        "Vapi",
        "CI/CD",
        "Vercel",
      ],
      link: "https://voci-green.vercel.app/",
    },
    {
      title: "Certificate Launchpad",
      description:
        "Automated certificate creation and multi-provider email delivery with real-time progress, validation, and fail-safe security checks—eliminating hours of manual work with a single upload.",
      image: "certificate.png",
      tech: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "Docker",
        "AWS/SES",
        "Resend",
        "SMTP",
      ],
      link: "https://github.com/gyaneshwarchoudhary/Certificate-Launchpad",
    },
    {
      title: "Trello Backend",
      description:
        "A Trello-style real-time collaboration tool built with Node.js, Express, MongoDB, and Socket.IO, enabling teams to manage boards, columns, and tasks with live updates, PDF reports, and secure JWT authentication.",
      image: "trello.png",
      tech: ["Node.js", "Express.js", "Socket.io", "Mongodb"],
      link: "https://github.com/gyaneshwarchoudhary/Trello-Backend",
    },
  ],
};

// Restructured for scannable impact + technical depth on demand

export const achievementsData = [
  {
    id: "opinhacks-2023",
    title: "OpinHacks 2023 Winner",
    project: "Roshni: AI Smart Glasses for Visually Impaired",

    // CARD LAYER - Scannable in 3 seconds
    headline:
      "₹3K hardware delivering 98.6% cost advantage over ₹200K alternatives. 36-hour prototype.",

    metrics: [
      { label: "Cost Reduction", value: "98.6%" },
      { label: "Build Time", value: "36 hours" },
      { label: "Detection Accuracy", value: "94%" },
      { label: "Scale", value: "300+ participants" },
    ],

    tags: ["YOLOv5", "Google Cloud Vision", "Raspberry Pi", "Real-time AI"],

    badge: "🏆 Winner",
    event: "Central India's Largest Hackathon",

    image: "OpinHacks.jpeg",

    // DETAIL LAYER - Technical deep-dive
    technicalBreakdown: {
      context:
        "Won 1st place at OpinHacks 2023 competing against 50+ teams (300+ participants) with ROSHNI: AI-powered smart-companion glasses for the visually impaired.",

      implementation: [
        "Built end-to-end AI glasses prototype in 36 hours delivering 98.6% cost advantage over ₹200K+ commercial alternatives",
        "Integrated YOLOv5 object detection (94% accuracy), Google Cloud Vision OCR (<2s response), and face recognition (99.38% accuracy) on Raspberry Pi 3b",
        "Architected modular ₹3K hardware solution with real-time scene analysis",
      ],

      impact:
        "Operational cost ₹500/month versus competitors' ₹12K+/month subscriptions",

      stack: [
        "Python",
        "OpenAI API",
        "YOLOv5",
        "Raspberry Pi 3b",
        "Google Cloud Vision API",
        "Flask",
      ],
    },
  },

  {
    id: "hackcbs-6.0",
    title: "HackCBS 6.0 Winner",
    project: "Pratyaksh: AR Glasses for Hearing Impaired",

    headline:
      "90% cost reduction AR solution. Speech-to-text across 100+ languages with 98% accuracy.",

    metrics: [
      { label: "Cost Reduction", value: "90%" },
      { label: "Language Support", value: "100+" },
      { label: "STT Accuracy", value: "98%" },
      { label: "Scale", value: "500+ participants" },
    ],

    tags: ["AR", "Google Cloud STT", "Speaker Diarization", "Accessibility"],

    badge: "🏆 Winner",
    event: "India's Largest Student Hackathon",

    image: "hackCBS.jpeg",

    technicalBreakdown: {
      context:
        "Won 1st place at HackCBS 6.0 2023 competing against 150+ teams (500+ participants) with Pratyaksh AR: Smart Companion AR glasses for Hearing Impaired.",

      implementation: [
        "Built AR solution delivering speech-to-text transcription across 100+ language pairs using Google Cloud STT (98% accuracy)",
        "Implemented custom keyword alerting system for out-of-vision notifications and speaker diarization for group conversations",
        "Delivered ₹3K hardware solution—90% cost reduction versus existing market alternatives",
      ],

      impact:
        "Targeting users with presbycusis, sensorineural, and congenital hearing loss with affordable assistive technology",

      stack: [
        "Python",
        "Google Cloud STT",
        "Speaker Diarization",
        "Keyword Detection",
        "Raspberry Pi Zero 2 W & Audio CODEC",
      ],
    },
  },

  {
    id: "sih-2024",
    title: "SIH 2024 Hardware Finalist",
    project: "Vyanjak: Video Intercom for Deaf Individuals",

    headline:
      "Top 5 from 1000+ teams. Dual-interface system: haptic symbols + character matrix for 60-98% illiterate deaf population.",

    metrics: [
      { label: "Selection Rate", value: "Top 5/1000+" },
      { label: "Target Literacy", value: "60-98% illiterate" },
      { label: "Devices", value: "Pi 4B + ESP32" },
      { label: "Deployment", value: "Multi-venue" },
    ],

    tags: ["Raspberry Pi 4", "ESP32", "Random Forest", "Vosk STT", "P2P"],

    badge: "🏅 Finalist",
    event: "Smart India Hackathon Grand Finale",

    image: "Sih.jpeg",

    technicalBreakdown: {
      context:
        "Shortlisted among top 5 teams (from 1000+ applicants) at Smart India Hackathon 2024 Grand Finale with video intercom system for deaf individuals.",

      implementation: [
        "Built Raspberry Pi 4B intercom with video calling, role-based access, and video mail-drop alongside ESP32 handheld notification device",
        "Implemented customizable vibration patterns and multicolor alerts and Vosk speech-to-text",
        "Architected dual UI: symbol-based haptics + character matrix targeting 60-98% illiterate deaf population",
        "Socket-based P2P communication over local network and Wi-Fi for deployment in schools, hospitals, and offices",
      ],

      impact:
        "Accessibility solution for low-literacy deaf population across institutional settings",

      stack: [
        "Raspberry Pi 4B",
        "ESP32",
        "JavaScript",
        "React",
        "Vosk STT",
        "WebRTC",
        "Python",
      ],
    },
  },
];

// Type definitions for TypeScript safety
export interface AchievementMetric {
  label: string;
  value: string;
}

export interface TechnicalBreakdown {
  context: string;
  implementation: string[];
  impact: string;
  stack: string[];
}

export interface Achievement {
  id: string;
  title: string;
  project: string;
  headline: string;
  metrics: AchievementMetric[];
  tags: string[];
  badge: string;
  event: string;
  image: string;
  technicalBreakdown: TechnicalBreakdown;
}
