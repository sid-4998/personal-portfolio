import htmlLogo from './assets/icons8-html5-48.png';
import cssLogo from './assets/icons8-css3-48.png';
import sassLogo from './assets/icons8-sass-48.png';
import javascriptLogo from './assets/icons8-javascript-48.png';
import reactjsLogo from './assets/icons8-react-40.png';
import reduxLogo from './assets/icons8-redux-48.png';
import nextjsLogo from './assets/icons8-next.js-48.png';
import tailwindcssLogo from './assets/icons8-tailwind-css-48.png';
import awslogo from './assets/icons8-amazon-web-services-48.png'
import dockerlogo from './assets/icons8-docker-logo-48.png'
import prismaORMlogo from './assets/icons8-prisma-orm-50.png'
import materialuiLogo from './assets/icons8-material-ui-48.png';
import framerLogo from './assets/icons8-framer-logo-24.png';
import nodejsLogo from './assets/icons8-node-js-48.png';
import expressjsLogo from './assets/icons8-express-js-50.png';
import mysqlLogo from './assets/icons8-sql-48.png';
import mongodbLogo from './assets/icons8-mongodb-48.png';
import firebaseLogo from './assets/icons8-firebase-48.png';
import cppLogo from './assets/icons8-c++-48.png';
import typescriptLogo from './assets/icons8-typescript-48.png';
import gitLogo from './assets/icons8-git-48.png';
import githubLogo from './assets/icons8-github-logo-24.png';
import vscodeLogo from './assets/icons8-vs-code-48.png';
import postmanLogo from './assets/icons8-postman-api-64.png';
import vercelLogo from './assets/icons8-vercel-50.png';
import postgreLogo from './assets/icons8-postgresql-48.png';
import passportjslogo from './assets/passport-seeklogo.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Framer Motion', logo: framerLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Prisma', logo: prismaORMlogo},
      { name: 'Passport JS', logo: passportjslogo},
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'AWS', logo: awslogo },
      { name: 'Docker', logo: dockerlogo},
    ],
  },
];

import AIstartupLandingPageLogo from './assets/Screenshot 2025-12-24 222548.png'
import SecretsLogo from './assets/Screenshot 2025-12-24 222353.png'
import YourCoffeeLogo from './assets/Screenshot 2025-12-24 222503.png'
import AudioDictionaryLogo from './assets/Screenshot 2025-12-24 222622.png'
import AnalogClockLogo from './assets/Screenshot 2025-12-24 222712.png'
import ImageSliderLogo from './assets/Screenshot 2025-12-24 222814.png'

export const projects = [
    {
      id: 0,
      title: "Seo AI",
      description:
        "Crafted a responsive, SEO-optimized landing page achieving a 90+ Lighthouse SEO score, while designing 10+ reusable UI components to enhance UX consistency and visual engagement. Implemented a modular React architecture that reduced code duplication by 30%, and delivered smooth Framer Motion animations, boosting overall interactivity by 40%.",
      image: AIstartupLandingPageLogo,
      tags: ["TypeScript", "Tailwind CSS", "JavaScript", "React JS", "Next JS", "Framer Motion"],
      github: "https://github.com/sid-4998/AI-startup-landing-page.git",
      webapp: "https://ai-startup-landing-page-auto-bot-wa.vercel.app",
    },
    {
      id: 1,
      title: "Anonymous Confession Platform",
      description:
        "Architected an anonymous confession platform supporting 500+ users with real-time interactions, driving a 40% increase in submissions through feedback-driven UX improvements. Integrated Google OAuth to reduce registration drop-off by 30%, and achieved 90% user retention by implementing real-time updates and optimized UI flows.",
      image: SecretsLogo,
      tags: ["React JS", "Node JS", "MongoDB", "Express", "Passport JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sid-4998/Secrets.git",
      webapp: "https://incognitoinbox.onrender.com",
    },
    {
      id: 2,
      title: "YourCoffee",
      description:
        "A coffee startup landing page having slider effect menu navigation, infinite scroll testimonials section, responsive navigation menu and all other elements built with vanilla JavaScript, HTML and CSS.",
      image: YourCoffeeLogo,
      tags: ["HTML", "CSS", "JavaScript", "Sass"],
      github: "https://github.com/sid-4998/YourCoffee.git",
      webapp: "https://sid-4998.github.io/YourCoffee/",
    },
    {
      id: 3,
      title: "Audio Dictionary",
      description:
        "A free online audio dictionary built with free dictionary API and vanilla JavaScript capable of providing pronounciation and meaning of almost every english word.",
      image: AudioDictionaryLogo,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sid-4998/Audio-Dictionary.git",
      webapp: "https://sid-4998.github.io/Audio-Dictionary/",
    },
    {
      id: 4,
      title: "Analog Clock",
      description:
        "An Analog wall clock simulation built with geometry implementation and vanilla web technologies",
      image: AnalogClockLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sid-4998/Analog-Clock.git",
      webapp: "https://sid-4998.github.io/Analog-Clock/",
    },
    {
      id: 5,
      title: "Image Slider",
      description:
        "A image slider component developed using CSS transitions, transforms and DOM manipulation",
      image: ImageSliderLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sid-4998/Image-Slider.git",
      webapp: "https://sid-4998.github.io/Image-Slider/",
    },
  ];  
  
import TheDevelopersArenaLogo from './assets/the-developers-arena.webp';
import AlgoUniversityLogo from './assets/logo.png';

export const experiences = [
    {
      id: 0,
      img: TheDevelopersArenaLogo,
      role: "Web Developer Intern | Part Time | Remote",
      company: "The Developers Arena",
      date: "November 2025 - Present",
      desc: "Developing and maintaining responsive web applications using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS, improving UI consistency across 5+ screen sizes. Delivered 8+ UI enhancements and bug fixes using component-based architecture, reducing layout and styling issues for modern user experiences. Integrated RESTful APIs and elevated frontend performance, improving page load times by 20–25%. Used Git and GitHub for version control, pull requests, and code reviews across 20+ commits.",
      skills: [
        "HTML",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next JS",
        "Framer Motion"
      ],
    },
    {
      id: 1,
      img: AlgoUniversityLogo,
      role: "Software Development Extern | Full Time | Remote",
      company: "AlgoUniversity( Backed by Y-Combinator )",
      date: "May 2024 - July 2024",
      desc: "Built an Online Judge Platform using the MERN stack, enabling real-time execution of 3+ programming languages, including C++, Java, Node.js and Python. Deployed the platform on AWS with Docker, maintaining 99.9% uptime under heavy usage. Engineered a custom compiler using child processes, supporting 500+ concurrent submissions with horizontal scalability and ensured fast responses. Worked under mentorship from engineers at Google, Microsoft, Apple, and AlphaGrep, gaining exposure to scalable system design and security handling.",
      skills: [
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Material UI",
        "AWS ECR",
        "AWS EC2",
        "Docker CLI",
      ],
    },
  ];