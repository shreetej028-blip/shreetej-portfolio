export const personalData = {
  name: "Shreetej Zade",

  title: "Android Developer • Full-Stack Developer • Cyber Forensics Enthusiast",

  headline: "Building Secure, High-Performance Digital Experiences",

  subtext:
    "Android and full-stack developer focused on building modern applications, secure systems, and clean digital experiences.",

  badge: "B.Tech Cyber Forensics & Information Security",

  aboutBio:
    "I am Shreetej Zade, a B.Tech Cyber Forensics & Information Security student at Ajeenkya DY Patil University, Pune, with a solid foundational diploma in Computer Engineering from Takshashila Polytechnic, Amravati. I specialize in Android app development, full-stack web technologies, relational & realtime databases, Firebase integration, and information security.",

  location: "Pune, Maharashtra, India",

  cvPath: "/Shreetej-Zade-CV.pdf",

  // Contact Details
  email: "shreetej028@gmail.com",

  github: "",

  linkedin: "https://www.linkedin.com/in/shreetej-zade-8a0328417/",
};

export const aboutHighlights = [
  {
    id: "cybersecurity",
    title: "Cyber Forensics & Security",
    description: "Deep interest in digital forensics, information security principles, threat analysis, and network defense strategies.",
    iconName: "ShieldCheck",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30"
  },
  {
    id: "android",
    title: "Android Development",
    description: "Building native Android apps with Java, Android Studio, XML UI design, SQLite, and Firebase integration.",
    iconName: "Smartphone",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30"
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Crafting modern web apps with React.js, Tailwind CSS, JavaScript, REST APIs, MySQL, and backend tools.",
    iconName: "Code2",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30"
  },
  {
    id: "cleancode",
    title: "Clean & Scalable Code",
    description: "Adhering to modern software architecture, version control with Git/GitHub, structured DB design, and clean code practices.",
    iconName: "Cpu",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30"
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "android", label: "Android" },
  { id: "web", label: "Web Development" },
  { id: "backend", label: "Backend & DB" },
  { id: "tools", label: "Tools" },
  { id: "cybersecurity", label: "Cybersecurity" },
];

export const skillsData = [
  // Programming
  { name: "Java", category: "programming", icon: "Coffee" },
  { name: "JavaScript", category: "programming", icon: "FileCode" },
  { name: "C", category: "programming", icon: "Code" },
  { name: "C++", category: "programming", icon: "Terminal" },

  // Android
  { name: "Android Studio", category: "android", icon: "Smartphone" },
  { name: "XML", category: "android", icon: "FileText" },
  { name: "Firebase", category: "android", icon: "Flame" },
  { name: "SQLite", category: "android", icon: "Database" },

  // Web
  { name: "React.js", category: "web", icon: "Atom" },
  { name: "HTML5", category: "web", icon: "Layout" },
  { name: "CSS3", category: "web", icon: "Palette" },
  { name: "Tailwind CSS", category: "web", icon: "Wind" },
  { name: "Framer Motion", category: "web", icon: "Sparkles" },

  // Backend & Database
  { name: "MySQL", category: "backend", icon: "Database" },
  { name: "XAMPP", category: "backend", icon: "Server" },
  { name: "Firebase Realtime DB", category: "backend", icon: "Zap" },
  { name: "REST APIs", category: "backend", icon: "Globe" },

  // Tools
  { name: "Git", category: "tools", icon: "GitBranch" },
  { name: "GitHub", category: "tools", icon: "Github" },
  { name: "VS Code", category: "tools", icon: "Box" },
  { name: "Android Studio", category: "tools", icon: "Layers" },

  // Cybersecurity
  { name: "Cyber Forensics", category: "cybersecurity", icon: "Fingerprint" },
  { name: "Information Security", category: "cybersecurity", icon: "Shield" },
  { name: "Network Security", category: "cybersecurity", icon: "Lock" },
];

export const projectsData = [
  {
    id: "attendance-system",
    title: "Android College Attendance System",
    type: "Android Application",
    description: "An Android-based college attendance management system designed to simplify attendance tracking using QR code scanning and biometric authentication.",
    technologies: [
      "Java",
      "Android Studio",
      "Firebase",
      "SQLite",
      "MySQL",
      "XAMPP",
      "XML",
      "QR Code",
      "Biometric Authentication"
    ],
    features: [
      "Automated student attendance recording via high-speed QR Code scanning",
      "Biometric authentication mechanism for secure teacher & student verification",
      "Dual database synchronization using local SQLite & remote MySQL via XAMPP",
      "Firebase integration for real-time authentication and data status tracking",
      "Role-based authorization for administrative access control"
    ],
    github: "", // Placeholder for real repository link when provided
    demo: "",   // Placeholder for real demo link when provided
    imageType: "phone",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    type: "Full-Stack Web App",
    description: "A modern responsive developer portfolio designed to showcase technical skills, projects, experience, certifications, and professional information.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Framer Motion"
    ],
    features: [
      "Futuristic dark-themed interface inspired by top-tier modern tech design standards",
      "Glassmorphism card layouts, subtle cyber grid accents, and fluid particle backdrop",
      "Filterable skills directory with smooth Framer Motion layout transitions",
      "Interactive technical terminal widget with live simulated status stream",
      "Accessible contact form architecture ready for Formspree / EmailJS API integration",
      "Direct CV PDF download integration"
    ],
    github: "", // Placeholder for real repository link when provided
    demo: "",   // Placeholder for real demo link when provided
    imageType: "browser",
  }
];

export const experienceData = [
  {
    id: "mountreach",
    company: "Mountreach Solution Pvt. Ltd.",
    role: "Full Stack Android Development Intern",
    period: "June 2025 – August 2025",
    type: "Internship",
    responsibilities: [
      "Developed Android applications using Java and Android Studio",
      "Designed Android interfaces using XML",
      "Integrated Firebase Authentication",
      "Worked with Firebase Realtime Database",
      "Used MySQL for backend database management",
      "Implemented authentication and CRUD operations",
      "Worked with REST APIs",
      "Used Git for version control"
    ],
    technologies: ["Java", "Android Studio", "XML", "Firebase", "MySQL", "REST APIs", "Git"]
  }
];

export const educationData = [
  {
    id: "btech",
    institution: "Ajeenkya DY Patil University, Pune",
    degree: "B.Tech — Cyber Forensics & Information Security",
    status: "Currently Pursuing",
    icon: "GraduationCap",
    details: "Focusing on digital forensics analysis, network security protocols, system hardening, and secure application development."
  },
  {
    id: "diploma",
    institution: "Takshashila Polytechnic, Amravati",
    degree: "Diploma — Computer Engineering",
    score: "83.47%",
    status: "Completed",
    icon: "Award",
    details: "Strong foundational grounding in object-oriented programming, data structures, software engineering, databases, and computer systems."
  }
];

export const certificationData = [
  {
    id: "ms-azure-management",
    title: "Microsoft Applied Skills: Get started with Azure management tasks",
    issuer: "Microsoft",
    issuedDate: "2026",
    badge: "Official Applied Skill",
    icon: "BadgeCheck",
    details:
      "Demonstrated practical skills for performing essential Azure management tasks and managing Azure resources.",
    certificateUrl: "/certificates/azure.pdf",
  },

  {
    id: "ms-csharp",
    title:
      "Microsoft Applied Skills: Get started with classes, properties, and methods in C#",
    issuer: "Microsoft",
    issuedDate: "2026",
    badge: "Official Applied Skill",
    icon: "BadgeCheck",
    details:
      "Demonstrated practical programming skills using classes, properties, and methods in C#.",
    certificateUrl: "/certificates/csharp.pdf",
  },

  {
    id: "linkedin-generative-ai",
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft + LinkedIn",
    issuedDate: "2026",
    badge: "Career Essentials",
    icon: "BadgeCheck",
    details:
      "Completed the Career Essentials in Generative AI program covering fundamental concepts and applications of generative AI.",
    certificateUrl: "/certificates/linkedin-ai.pdf",
  },

  {
    id: "ms-ai-research-agent",
    title:
      "Microsoft Applied Skills: Generate reports with AI research agent",
    issuer: "Microsoft",
    issuedDate: "July 2026",
    badge: "Official Applied Skill",
    icon: "BadgeCheck",
    details:
      "Demonstrated skills in creating AI-driven research workflows, report generation agents, and intelligent agent automation.",
    certificateUrl: "/certificates/ai-research.pdf",
  },

  {
    id: "ms-foundry-agents",
    title:
      "Microsoft Applied Skills: Get started developing agents in Microsoft Foundry",
    issuer: "Microsoft",
    issuedDate: "2026",
    badge: "Official Applied Skill",
    icon: "BadgeCheck",
    details:
      "Demonstrated foundational skills for developing AI agents using Microsoft Foundry.",
    certificateUrl: "/certificates/foundry.pdf",
  },

  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    issuedDate: "June 24, 2026",
    badge: "Certificate of Completion",
    icon: "BadgeCheck",
    details:
      "Successfully completed the Deloitte Data Analytics Job Simulation and practical data analytics tasks.",
    certificateUrl: "/certificates/deloitte.pdf",
  },

  {
    id: "professional-communication",
    title: "Professional Communication",
    issuer: "Professional Certification",
    issuedDate: "2026",
    badge: "Professional Skill",
    icon: "BadgeCheck",
    details:
      "Certificate demonstrating professional communication skills and effective workplace communication.",
    certificateUrl: "/certificates/professionalcom.pdf",
  },

  {
    id: "mountreach-android",
    title: "Industrial Training in Full Stack Android Development",
    issuer: "Mountreach Solution Pvt. Ltd.",
    issuedDate: "August 31, 2025",
    badge: "Industrial Training",
    icon: "BadgeCheck",
    details:
      "Successfully completed an Industrial Training Program in Full Stack Android Development.",
    certificateUrl: "/certificates/mountreach.pdf",
  },
];