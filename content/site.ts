/**
 * Central content for the portfolio. Replace or extend this object to reuse
 * the same layout/components with different copy.
 */

export const siteMeta = {
  title: "Hunzla Hussain — Personal Portfolio",
  description:
    "Software Engineer portfolio — MERN stack & AI integration · Empower Code Intelligence",
  name: "Hunzla Hussain",
  role: "Software Engineer · MERN Stack & AI Integration",
  /** One line for compact header on small screens */
  roleShort: "SW Engineer · MERN & AI",
  /** Served from /public; encode spaces in the path for the browser URL. */
  profileImage: "/profile%20piick.jpeg",
  email: "hunzlahussain7869@gmail.com",
  location: "Based in Lahore, Pakistan",
  phone: {
    /** Pakistan mobile; use with tel: for click-to-call */
    display: "0326 4903791",
    tel: "+923264903791",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/hunzlahussain",
    github: "https://github.com/HunzlaHussain",
    x: "https://x.com/its_hunzla",
    dribbble: "#",
  },
} as const;

/** Cal.com embed — event type slug and namespace must match your Cal setup */
export const calBooking = {
  namespace: "30min",
  link: "hunzla-hussain/30min",
} as const;

export const heroLines = [
  "Empower Code Intelligence",
] as const;

export const rotatingRoles = [
  "a Software Engineer",
  "a MERN stack developer",
  "focused on AI integration",
] as const;

export const rotatingContactWords = ["Design", "Create", "Craft"] as const;

export const about = {
  body: `Hello! I'm Hunzla Hussain, a Software Engineer with 3 years of experience building full-stack products with the MERN stack and integrating AI features into web applications—from APIs and databases to polished UIs. I care about maintainable code, solid architecture, and shipping solutions that blend modern web development with practical AI.`,
  stats: [
    { value: "3", suffix: "+", label: "Years of Experience" },
    { value: "10", suffix: "+", label: "Projects Completed" },
    { value: "10", suffix: "+", label: "Satisfied Clients" },
  ],
} as const;

export const resumeItems = [
  {
    id: "elevex-se",
    title: "Software Engineer",
    org: "Elevex",
    period: "02/2025 – Present",
    description:
      "I specialize in developing high-performance MERN stack applications, with practical experience in React.js, Node.js, and robust API development. I've worked with Bull queues, Redis, and microservice architectures within monorepos to build scalable and maintainable systems. My backend expertise extends to third-party API integrations and serverless solutions using AWS Lambda, DynamoDB, and other AWS services, along with exposure to Azure. I also bring experience in accessibility automation testing with Playwright, ensuring inclusive and user-focused applications. I'm passionate about performance optimization, tackling complex technical challenges, and continually expanding my skill set.",
  },
  {
    id: "hisabkarly-ase",
    title: "Associate Software Engineer / MERN Stack Developer",
    org: "Hisabkarly · Lahore, Pakistan",
    period: "01/2024 – 02/2025",
    description:
      "During my year at Hisabkarly, I built and deployed scalable web applications using Next.js, Node.js, Express.js, and PostgreSQL. I improved user experience by leveraging TypeScript, Shadcn UI, React Query, React Hook Form, Zod, Yup, and Framer Motion.",
  },
  {
    id: "interactive-mern",
    title: "Intern / MERN Stack Developer",
    org: "Interactive Tech Solutions · Lahore, Pakistan",
    period: "10/2023 – 12/2023",
    description:
      "During my internship as a MERN Stack Developer, I contributed to building full-stack applications by converting Figma designs into responsive interfaces and implementing reliable backend functionality. I developed and tested APIs, integrated frontend components with API endpoints, and used Git for seamless team collaboration.",
  },
  {
    id: "ucp-bse",
    title: "Bachelor of Software Engineering",
    org: "University of Central Punjab (UCP) · Lahore, Pakistan",
    period: "2019 – 2023",
  },
] as const;

export const services = [
  {
    n: "01",
    title: "Full-stack MERN & PostgreSQL applications",
    image: "/images/item/service-item-1.webp",
  },
  {
    n: "02",
    title: "Next.js, Tailwind, Shadcn UI & Framer Motion",
    image: "/images/item/service-item-2.webp",
  },
  {
    n: "03",
    title: "TanStack Query, Bull, Redis & Playwright automation",
    image: "/images/item/service-item-3.webp",
  },
  {
    n: "04",
    title: "Serverless AWS (Lambda, DynamoDB) & Azure backends",
    image: "/images/item/service-item-4.webp",
  },
] as const;

export const portfolioItems = [
  {
    tag: "Enterprise",
    title: "American Heart Association (AHA)",
    image: "/images/user/portfolio-item-1-1.webp",
    href: "#",
  },
  {
    tag: "Fitness",
    title: "Orangetheory Fitness",
    image: "/images/user/portfolio-item-2-1.webp",
    href: "https://www.sit.orangetheory.com/en-us",
  },
  {
    tag: "Healthcare",
    title: "BookJane",
    image: "/images/user/portfolio-item-3-1.webp",
    href: "https://www.bookjane.com/",
  },
  {
    tag: "Education",
    title: "LMS Portal",
    image: "/images/user/portfolio-item-4-1.webp",
    href: "https://demoailearnpulse.vercel.app/",
  },
  {
    tag: "F&B / SaaS",
    title: "Foodics",
    image: "/images/user/portfolio-item-1-1.webp",
    href: "https://foodics-hkl.vercel.app/",
  },
  {
    tag: "CRM",
    title: "CRM",
    image: "/images/user/portfolio-item-2-1.webp",
    href: "https://aicrmbot.hisabkarlay.com/sign-in",
  },
  {
    tag: "FinTech",
    title: "Online Zakat System",
    image: "/images/user/portfolio-item-3-1.webp",
    href: "#",
  },
  {
    tag: "Real-time",
    title: "Chat Application",
    image: "/images/user/portfolio-item-4-1.webp",
    href: "#",
  },
  {
    tag: "Healthcare",
    title: "Doctor Application",
    image: "/images/user/portfolio-item-1-1.webp",
    href: "https://doctor-application.vercel.app/",
  },
  {
    tag: "Trading",
    title: "GoProp Firm",
    image: "/images/user/portfolio-item-2-1.webp",
    href: "https://goprop.vercel.app/",
  },
  {
    tag: "Web",
    title: "MSFDN",
    image: "/images/user/portfolio-item-3-1.webp",
    href: "https://msfdn-ten.vercel.app/",
  },
  {
    tag: "FinTech",
    title: "Brokeret LP",
    image: "/images/user/portfolio-item-4-1.webp",
    href: "https://brokeret-land.vercel.app/",
  },
] as const;

export const testimonials = [
  {
    id: "t-lincoln-1",
    quote: `Hunzla delivered exceptional work. He's professional, fast, and extremely easy to work with. I'd definitely hire him again for future projects!`,
    name: "Lincoln Press",
    role: "CEO Themesflat",
  },
  {
    id: "t-cheyenne-1",
    quote: `"Hunzla managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for."`,
    name: "Cheyenne Mango",
    role: "CEO Themesflat",
  },
  {
    id: "t-cheyenne-2",
    quote: `"Hunzla managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for."`,
    name: "Cheyenne Mango",
    role: "CEO Themesflat",
  },
] as const;

/** Root-prefixed hashes so links work from any route (e.g. /schedule), not only /. */
export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#resume", label: "Resume" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/schedule", label: "Schedule" },
  { href: "/#contact", label: "Contact" },
] as const;
