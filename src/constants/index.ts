// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences (Project-Based)
export const EXPERIENCES = [
  {
    title: "Gestion Pro App",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed a professional project management application.",
      "Built with modern web technologies for efficient task and project tracking.",
      "Implemented responsive design for seamless user experience across devices.",
      "Focus on user-friendly interface and intuitive navigation.",
    ],
  },
  {
    title: "Weather App",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Created a weather application with real-time data integration using API.",
      "Implemented location-based weather forecasting and current conditions.",
      "Designed clean, intuitive UI for weather information display.",
      "Built with HTML, CSS, JavaScript with external weather API integration.",
    ],
  },
  {
    title: "List App",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed a dynamic list management application for task organization.",
      "Implemented add, edit, delete, and mark-as-complete functionality.",
      "Built with pure HTML, CSS, and JavaScript for optimal performance.",
      "Features responsive design and local storage for data persistence.",
    ],
  },
  {
    title: "VitaHealth - E-commerce Website",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Built a modern e-commerce platform for health and wellness products.",
      "Implemented product catalog, shopping cart, and checkout functionality.",
      "Designed responsive layouts for mobile and desktop viewing.",
      "Integrated payment gateway and order management system.",
    ],
  },
  {
    title: "Al-Nakuah",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Created a specialized application with comprehensive feature set.",
      "Focused on clean code architecture and maintainability.",
      "Implemented responsive design principles throughout.",
      "Built with modern web development standards and best practices.",
    ],
  },
  {
    title: "Motorcycle",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed a motorcycle-related web application or platform.",
      "Implemented features for motorcycle information and management.",
      "Created intuitive user interface for target audience.",
      "Focused on performance and user engagement.",
    ],
  },
  {
    title: "Baraka",
    company_name: "Project",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Built a comprehensive web application with multiple features.",
      "Implemented responsive design and cross-browser compatibility.",
      "Focused on code quality and maintainable structure.",
      "Delivered user-centric design with excellent functionality.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Gestion Pro App",
    description: "A professional project management application for efficient task tracking and team collaboration.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
  {
    name: "Weather App",
    description: "Real-time weather application with location-based forecasting and current weather conditions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
  {
    name: "List App",
    description: "Dynamic list management application with add, edit, delete, and task completion features.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
  {
    name: "VitaHealth - E-commerce",
    description: "Modern e-commerce platform for health and wellness products with shopping cart and checkout.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
  {
    name: "Al-Nakuah",
    description: "Specialized web application built with clean code architecture and responsive design principles.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
  {
    name: "Baraka",
    description: "Comprehensive web application with multiple features and focus on performance and user engagement.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/badr-bourki",
    live_site_link: "#",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/badr-bourki",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/badr-bourki",
  },
] as const;
