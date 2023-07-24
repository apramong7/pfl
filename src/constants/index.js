import {
    mobile,
    backend,
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
    firebase,
    git,
    figma,
    python,
    arenax,
    pepperdata,
    nokia,
    healthweb,
    semicorchea,
    workoutwatcher,
    lemontree,
    medilink,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
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
      name: "firebase",
      icon: firebase,
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
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Co-op Student",
      company_name: "ArenaX Labs Inc.",
      icon: arenax,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2022",
      points: [
        "Implemented an interactive infobot on the main page of the Al Arena video game, enhancing user engagement and experience.",
        "Conducted in-depth analysis of methods and procedures to seamlessly transition 2D animation videos into a dynamic 3D scene using React and Three.js.",
        "Implemented responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Pepperdata",
      icon: pepperdata,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Dec 2021",
      points: [
        "Built a React.js-powered application status page using different APIs for real-time analysis of application status across clusters, presented through dynamic charts with customizable filters.",
        "Optimized the performance of several components by decreasing their load time speeds by 80% after using memoization and refactoring to maximize efficiency.",
        "Utilized Highcharts library to create charts and graphics to improve data visualization."
      ],
    },
    {
      title: "Junior Web UI Software Designer Co-op",
      company_name: "Nokia",
      icon: nokia,
      iconBg: "#383E56",
      date: "Jan 2021 - Apr 2021",
      points: [
        "Debugged applications, refactored reusable components using React, and implemented UI enhancements that significantly improved functionalities and overall digital experiences.",
        "Developed and fixed unit tests using react-testing-library and Jest.",
        "Optimized and refactored dropdown components decreasing the amount and complexity of the code and the loading time of the components by 30%"
      ],
    },
    {
      title: "SW Design-Web App-React",
      company_name: "Nokia",
      icon: nokia,
      iconBg: "#E6DEDD",
      date: "Apr 2020 - Aug 2020",
      points: [
        "Created and refactored reusable React components such as forms and animations used in multiple applications across the company.",
        "Fixed front-end bugs (HTML, CSS, JavaScript errors) and conducted testing to identify and address necessary improvements for a better user experience.",
        "Fixed cross-browser compatibility issues in Mozilla, Chrome, and Safari."
      ],
    },
  ];
  
  const hackathons = [
    {
      description:
        "In the Generative AI Challenge, our team addressed CEE's need to enhance Work-Integrated Learning (WIL) by creating a cutting-edge chatbot powered by ChatGPT. The chatbot utilized the Future Ready Talent Framework (FRTF) to provide personalized skills assessments, career advice, and tailored resources to late adopters and unengaged learners. By connecting students with relevant skills development courses and bridging skills gaps, our solution enhances future employability for graduates. Throughout this project, I showcased expertise in AI-driven chatbot development, data integration, and problem-solving, while fostering a seamless user experience.",
      name: "Generative AI Challenge",
      place: "Waterloo",
      company: "Waterloo Artificial Intelligence Institute",
      image: lemontree,
      link: 'https://docs.google.com/presentation/d/1fPqG6KiSrMKxSknA0ijIvEK5eN6kUWIAdyPli-Yxk68/edit?pli=1#slide=id.g223de589626_0_99'
    },
    {
      description:
        "Our team took on the Health Innovation challenge, addressing the lack of clarity and fostering patient empowerment in healthcare with our solution, MediLink. This innovative platform combines a user-friendly app and an intelligent plugin to revolutionize the patient experience and streamline doctors' tasks. MediLink empowers patients by providing access to centralized medical records, monitoring health progress, and translating complex medical jargon into understandable language using NLP. For healthcare professionals, our plugin auto-fills patient forms and administrative tasks, reducing their burden and allowing them to focus more on patient care. Through extensive interviews with physicians, we identified the pressing need for such a solution, ensuring MediLink truly transforms the way we approach healthcare.",
      name: "Health Innovation Challenge",
      place: "Waterloo",
      company: "Velocity and Grand River Hospital",
      image: medilink,
      link: 'https://docs.google.com/presentation/d/1gNc_KUbHkARYkbsnOyvXgqcAWRjDmn-y/edit?usp=sharing&ouid=118168784495324397512&rtpof=true&sd=true'
    },
  ];
  
  const projects = [
    {
      name: "Health Booker",
      description:
        "Web-based platform designed to facilitate the process of searching, booking, and managing medical appointments with a diverse range of doctors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: healthweb,
      source_code_link: "https://github.com/AnaPaulaRamon/HealthBooker.git",
    },
    {
      name: "Workout Watcher",
      description:
        "React Native mobile app that complements a smart pressure-sensitive yoga mat. It reads data from the mat, provides real-time posture corrections and pressure adjustments, and allows users to log in, choose yoga poses, and receive guidance for correct form.",
      tags: [
        {
          name: "react+native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: workoutwatcher,
      source_code_link: "https://github.com/AnaPaulaRamon/workoutwatcher.git",
    },
    {
      name: "SemiCorchea",
      description:
        "This project showcases an interactive and user-friendly online store for music enthusiasts. Built with HTML, CSS, and JavaScript, this project incorporates the Payform library to enhance credit card form handling, input validation, and number formatting.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "payform",
          color: "pink-text-gradient",
        },
      ],
      image: semicorchea,
      source_code_link: "https://github.com/AnaPaulaRamon/SemiCorchea.git",
    },
  ];
  
  export { services, technologies, experiences, hackathons, projects };