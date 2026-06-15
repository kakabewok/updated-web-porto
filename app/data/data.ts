import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const profileData = {
  name: "Noprizal",
  role: "Programmer",
  tagline: "Crafting high-impact digital experiences that help people and businesses grow.",
  photo:
    "https://res.cloudinary.com/dk16ng09n/image/upload/v1765988672/personal/web-porto/WhatsApp_Image_2025-12-17_at_11.17.56_PM_isskwf.jpg",
  intro:
    "Experienced Software Developer with a strong background in Spring Boot, Laravel, React, TypeScript, and Next.js. Passionate about building scalable and efficient web applications through clean code and analytical problem-solving. Experienced in developing high-performance systems and seamless user experiences across backend and frontend technologies. Continuously learning and adapting to new technologies to deliver innovative and reliable solutions.",
  socials: {
    instagram: "https://www.instagram.com/_kkbwk/",
    linkedin: "https://www.linkedin.com/in/noprizal/",
    github: "https://github.com/KakaBewok",
    email: "rizalnov667@gmail.com",
  },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring", "Node.js", "PHP", "Laravel"],
  },
  {
    title: "Database & Tools",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Docker", "Git"],
  },
];

const educationData = [
  {
    institution: "Djuanda University",
    degree: "Bachelor of Economics",
    field: "Islamic Economics",
    period: "2018 – 2022",
    location: "Bogor, Indonesia",
  },
  {
    institution: "Amaliah Vocational High School",
    degree: "Vocational High School",
    field: "Computer and Network Engineering",
    period: "2011 – 2014",
    location: "Bogor, Indonesia",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/_kkbwk/",
    label: "Instagram",
  },
  {
    icon: Github,
    href: "https://github.com/KakaBewok",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/noprizal/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rizalnov667@gmail.com",
    label: "Email",
  },
];

const experienceData = [
  {
    company: "PT. Voltras International",
    position: "Back End Developer",
    period: "2023 - Present",
    location: "South Tangerang, Indonesia",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Docker"],
    project:
      "Payment Gateway Integration, Application Gateway, Accounting System & Microservices",
    achievements: [
      "Designed, developed and maintained backend systems for seamless payment integrations with major banks (BRI, BCA, Permata Bank, BSI) and multiple payment gateways, ensuring secure and efficient transaction processing",
      "Built and managed an application gateway to centralize and streamline communication between internal services and external payment providers",
      "Managed and processed high-volume transactions, ensuring accuracy, security and reliability in production environments",
      "Collaborated with banking institutions and internal stakeholders to ensure regulatory compliance and seamless system integration",
      "Developed a comprehensive accounting system, allowing finance teams to generate journals, ledgers, and financial reports, while efficiently managing millions of transaction records with high data integrity",
      "Integrated multiple payment gateways and PPOB services, including direct API integrations with PT KAI and PT VSI"
    ],
  },
  {
    company: "Calaraya Project",
    position: "Full Stack Developer",
    type: "Freelance",
    period: "2025 - Present",
    location: "Bogor, Indonesia",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Laravel",
      "PHP",
      "Inertia",
      "Cloudinary"
    ],
    project: "Websites & Digital Invitation",
    achievements: [
      "Developed and delivered custom web applications including digital invitation platforms, POS systems, product catalogs, and tailored business websites",
      "Collaborated directly with clients to gather requirements and translate business needs into scalable technical solutions",
      "Built responsive and user-friendly interfaces using modern frontend technologies",
      "Designed and implemented backend systems to support dynamic content, transactions, and user management",
      "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction"
    ],
  },
];

const portfolioProjects = [
  {
    title: "Calaraya",
    description:
      "A web application that provides website development and digital invitation services.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778486781/personal/web-porto/calaraya4_po9cad.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/",
    year: "2024"
  },
  {
    title: "Calapos",
    description:
      "A web application for POS system with admin panel to manage inventory and transactions.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778410956/personal/web-porto/ss_pos_x6jwv7.png",
    techStack: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "Flux UI"],
    previewUrl: "https://calapos.shop/",
    year: "2025"
  },
  {
    title: "Qatia Rent",
    description:
      "A web application for renting clothes with an admin panel to manage inventory and transactions.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778488709/personal/web-porto/qatia_enppdi.png",
    techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Inertia", "Typescript"],
    previewUrl: "https://qatiarent.com/",
    year: "2025"
  },
  {
    title: "E-Invitation Netflix",
    description: "Auto Scroll - RSVP - Gallery - Custom Music - Story - Gift - Google Maps - Count Down",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
    year: "2025"
  },
  {
    title: "E-Invitation Floral",
    description: "Google Calendar - RSVP - Gallery - Custom Music - Gift - Google Maps",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
    year: "2025"
  },
  {
    title: "E-Invitation Magazine",
    description: "Google Calendar - RSVP - Gallery - Custom Music - Gift - Google Maps",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
    year: "2025"
  },
  {
    title: "E-Invitation Maroon",
    description: "Google Calendar - RSVP - Gallery - Custom Music - Gift - Google Maps",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1772739451/personal/web-porto/regiya_jamf7h.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
    year: "2026"
  },
  {
    title: "E-Invitation Stylish Bold",
    description: "Google Calendar - RSVP - Gallery - Custom Music - Gift - Google Maps",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1776399437/personal/web-porto/marooncustom_jxuweq.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/amry-erinka?id=bwtBEA",
    year: "2026"
  },
  {
    title: "E-Invitation Monochrome",
    description: "Google Calendar - RSVP - Gallery - Custom Music - Gift - Google Maps",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766313919/personal/web-porto/nadhar_rginzu.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudinary"],
    previewUrl: "https://calaraya.vercel.app/nadiah-haris?id=XyUaw",
    year: "2026"
  },
];

const contactInfo = {
  email: "rizalnov667@gmail.com",
  instagram: "https://www.instagram.com/_kkbwk/",
};

const certificatesData = [
  {
    id: 1,
    title: "Menjadi Back End Developer Expert",
    issuing_organization: "Dicoding",
    issue_date: "2023-04-19",
    expiration_date: "2026-04-19",
    image_path:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778477119/personal/certifications/be_expert_dicoding_mxcy48.png",
    desc: "-",
    preview_url:
      "https://www.dicoding.com/certificates/ERZRG487QPYV",
  },
  {
    id: 2,
    title: "Menjadi Front End Developer Expert",
    issuing_organization: "Dicoding",
    issue_date: "2023-01-03",
    expiration_date: "2026-01-03",
    image_path:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778477078/personal/certifications/02._Dicoding_Front-End_Expert_OK-1_fwaimd.jpg",
    desc: "-",
    preview_url: "https://www.dicoding.com/certificates/RVZKKWOYEZD5",
  },
  {
    id: 3,
    title: "Sertifikat Kompetensi Web Developer",
    issuing_organization: "Badan Nasional Sertifikasi Profesi",
    issue_date: "",
    expiration_date: "",
    image_path:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1778477066/personal/certifications/01._BNSP_NOPRIZAL_OK-1_g49ol9.jpg",
    desc: "-",
    preview_url: "https://res.cloudinary.com/dk16ng09n/image/upload/v1778477066/personal/certifications/01._BNSP_NOPRIZAL_OK-1_g49ol9.jpg",
  }
];

export {
  profileData,
  skillCategories,
  educationData,
  experienceData,
  portfolioProjects,
  certificatesData,
  contactInfo,
  socialLinks,
};
