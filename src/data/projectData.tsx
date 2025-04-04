
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard with real-time analytics, inventory management, and order processing capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Web", "React", "TypeScript", "UI/UX"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Travel Blog Platform",
    description: "A feature-rich travel blogging platform with location tagging, image galleries, and interactive maps.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Web", "React", "MongoDB", "Node.js"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A mobile-first fitness application for tracking workouts, nutrition, and progress with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "JavaScript", "UI/UX"],
    link: "#",
  },
  {
    id: 4,
    title: "Weather Visualization",
    description: "An interactive weather visualization tool with historical data analysis and predictive forecasting.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["JavaScript", "Web", "Node.js"],
    link: "#",
    github: "https://github.com",
  },
];
