import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Wendi Aril Alivia — Tech Generalist",
  author: "Wendi Aril Alivia",
  description:
    "Tech Generalist with skills in Software Quality Assurance, Web Development, IT Support, and Creative Design — passionate about learning, building, and improving technology in every form.",
  lang: "en",
  siteLogo: "/W.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/wendiarilalivia" },
    { text: "Github", href: "https://github.com/wendiarilalivia" },
    { text: "Email", href: "mailto:wendialivia06@gmail.com" }
  ],
  socialImage: "/wendi-og.png",
  canonicalURL: "https://wendiarilalivia.vercel.app"
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Wendi Aril Alivia",
    specialty: "Tech Generalist",
    summary:
      "A Tech Generalist with experience in Software Quality Assurance, Web Development, and IT Support — who also loves design and keeps learning to get better every day. I enjoy combining logic and creativity to build useful, reliable, and visually appealing digital experiences.",
    email: "wendialivia06@gmail.com"
  },

  experience: [
    {
      company: "PT Lemurian Teknologi Inovasi",
      position: "SQA",
      startDate: "Jul 2025",
      endDate: "Present",
      summary: [
        "Responsible for system configuration and software testing to ensure proper functionality and performance.",
        "Conducted testing to identify issues, verify features, and maintain system stability."
      ]
    },
    {
      company: "PT Eco Paper Indonesia",
      position: "IT Support (Internship)",
      startDate: "Jul 2024",
      endDate: "Dec 2024",
      summary: [
        "Assisted in troubleshooting and maintaining computer systems and network connectivity for office operations.",
        "Supported documentation of IT assets and system reports to ensure data consistency.",
        "Collaborated with the IT team to optimize workflow and monitor system performance."
      ]
    },
    {
      company: "Majelis Perwakilan Kelas (SMKN 1 Subang)",
      position: "Chairman",
      startDate: "okt 2023",
      endDate: "jan 2024",
      summary: [
        "Led organizational planning, communication, and reporting for school-wide programs.",
        "Improved coordination and teamwork across multiple student divisions.",
        "Developed structured reports and documentation for all activities and events."
      ]
    }
  ],

  projects: [
    {
      name: "Personal Portfolio Website",
      summary:
        "A responsive and modern web portfolio built with Next.js and Tailwind CSS to showcase my skills as a Tech Generalist.",
      linkPreview: "/",
      linkSource: "https://github.com/wendiarilalivia/portfolio",
      image: "/portfolio-preview.png"
    },
    {
      name: "Helpdesk Ticket System (Prototype)",
      summary:
        "A web-based ticketing prototype for tracking and managing support requests, designed to simulate real IT workflows.",
      linkPreview: "/",
      linkSource: "https://github.com/wendiarilalivia/helpdesk-system",
      image: "/helpdesk.png"
    },
    {
      name: "QA Testing Documentation",
      summary:
        "Created detailed QA test case documentation and bug reports for small web projects, following SDLC principles.",
      linkPreview: "/",
      linkSource: "https://github.com/wendiarilalivia/qa-docs",
      image: "/qa-docs.png"
    }
  ],

  skills: [
    {
      category: "Tools & Software",
      items: [
        { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cypress.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
        { name: "Microsoft Office", icon: "https://img.icons8.com/color/96/microsoft-office-2019.png" },
        { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
        { name: "System Maintenance", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" }
      ]
    },
    {
      category: "Technical Practices",
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/laravel.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Manual Testing", icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png" },
        { name: "Automation Testing", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
        { name: "Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png" },
        { name: "SDLC & Documentation", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920266.png" },
        { name: "Troubleshooting", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828743.png" }
      ]
    }
  ],

  about: {
    description: `
      Hi, I’m Wendi Aril Alivia — a passionate Tech Generalist from Subang, Indonesia. 
      I have hands-on experience in Software Quality Assurance, Web Development, and IT Support. 
      I also have a deep interest in design and am continuously learning to improve my creative and technical skills. 
      With a background in Software Engineering (Rekayasa Perangkat Lunak), I love exploring every layer of technology — from code logic and testing to system maintenance, documentation, and user-friendly interface design.

      My goal is to keep learning, building, and improving systems to deliver reliable, efficient, and creative digital experiences. 
      I believe that understanding multiple aspects of IT helps me connect development, testing, design, and usability into one seamless workflow.
    `,
    image: "/wendi-big.jpg"
  }
};
