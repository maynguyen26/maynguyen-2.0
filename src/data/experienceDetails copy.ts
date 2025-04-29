export interface CompanyDetail {
  id: string;
  name: string;
  logo: string;
  color: string;
  iconBg: string;
}

export interface DetailedExperience {
  id: string;
  company: CompanyDetail;
  title: string;
  period: string;
  location: string;
  overview: string;
  aboutCompany: string;
  responsibilities: string[];
  additionalSections: Array<{
    title: string;
    content: string;
    type: "text" | "bullets";
    bullets?: string[];
  }>;
  quote?: {
    title: string;
    content: string;
  };
  technologies?: string[];
}

const experienceDetails: DetailedExperience[] = [
  {
    id: "deleptual",
    company: {
      id: "deleptual",
      name: "Deleptual",
      logo: "/images/company/deleptual.png",
      color: "border-primary",
      iconBg: "bg-primary/10",
    },
    title: "Junior Programmer",
    period: "May 2022 – Dec 2022",
    location: "Toronto, Ontario",
    overview:
      "Starting in May of 2022, I had my very first co-op work term with a company called Deleptual. Being apart of a small team at Deleptual as a Junior Programmer gave me the opportunity to learn in-depth about the process of completing a software project from start to finish. My role on the small team at Deleptual allowed me to really hone my skills for independent learning and front-end development.",
    aboutCompany:
      "Deleptual is a software consulting company based in Toronto, specializing in making virtual escape puzzle games. Founded in 2020 by Eric Blanchard, Deleptual thrives in the era of virtual connection.",
    responsibilities: [
      "Maintained and updated client web applications using React.js, implementing new features and resolving bugs",
      "Generated comprehensive analytics reports using Google Analytics and custom-built tracking solutions",
      "Enhanced front-end development skills through practical application of React and JavaScript",
      "Explored game development principles using Unity for specialized client projects",
    ],
    additionalSections: [
      {
        title: "Job Description",
        content:
          "At Deleptual, I worked as a Junior Programmer. Since I wanted to focus on learning React and I had an aptitude for web design, my role quickly became the web-application developer on our small team. Prior to this, I had very little experience in Javascript or any other frameworks, so I had to start with tutorials and very small tasks.",
        type: "text",
      },
      {
        title: "Learning Goals",
        content:
          "As my first work term, I found it most important for me to work hard to improve my technological literacy. With so much to learn, I found it very easy to develop my goals revolving my work tasks. I had three main learning goals for my work term:",
        type: "bullets",
        bullets: [
          "Learn web application development using React",
          "Develop effective communication skills for professional settings",
          "Gain a better understanding of game and web development industry",
        ],
      },
      {
        title: "Learning Experience",
        content:
          "Most importantly, I wanted to learn about web application development using React, which helped me build valuable skills related to the programming field. As the second most popular framework of 2022, I was excited to learn React and develop very relevant skills for the modern programming landscape. Even if my next work experience does not directly use React, I know I will greatly benefit from learning React during my work term - due to the independent learning skills I developed, as well as practice of core programming concepts.\n\nBeing a part of small team, I was really lucky to have a strong relationship with my supervisor, and it was clear my learning goals and needs were made a priority. During my work term, I am grateful to have had the opportunity to have mentored coding sessions and I was given a lot of support when I had questions. The support I had accelerated my ability to learn greatly, and I was able to be trusted with an independent React project towards the second half of my work term.",
        type: "text",
      },
      {
        title: "Conclusion",
        content:
          "I learned so much from my work term at Deleptual as a Junior Programmer and I had a great experience there. I am proud to have been a part of such a welcoming and amazing company!",
        type: "text",
      },
    ],
    quote: {
      title: "Acknowledgements",
      content:
        "Thank you to Eric for being a great mentor to me throughout my co-op. I always felt appreciated and recognized for my work, and I am really grateful for how any preparation for my next co-op / role in a work place was always encouraged and supported!",
    },
    technologies: ["React.js", "JavaScript", "C#", "Git", "GitHub", "Netlify"],
  },
  {
    id: "deloitte",
    company: {
      id: "deloitte",
      name: "Deloitte",
      logo: "/images/company/deloitte.png",
      color: "border-accent",
      iconBg: "bg-accent/10",
    },
    title: "Data Entry and File Administration",
    period: "May 2023 – Aug 2023",
    location: "Toronto, Ontario",
    overview:
      "During the summer of 2023, I joined Deloitte as a Data Entry and File Administration intern. This position allowed me to develop strong attention to detail and data integrity skills while working with high-profile clients in a fast-paced professional environment.",
    aboutCompany:
      'Deloitte is one of the "Big Four" accounting organizations and the largest professional services network in the world by revenue and number of professionals. The company offers audit, consulting, financial advisory, risk advisory, tax, and legal services with approximately 415,000 professionals globally.',
    responsibilities: [
      "Accurately processed and maintained large volumes of sensitive data, ensuring compliance with strict project guidelines and protocols",
      "Performed thorough quality assurance checks, identifying and resolving data discrepancies to maintain system integrity",
      "Developed efficient data entry methodologies that improved processing speed while maintaining accuracy standards",
    ],
    additionalSections: [
      {
        title: "Learning Outcomes",
        content:
          "Working at Deloitte provided valuable exposure to professional workflows and enterprise-level data management. I developed:",
        type: "bullets",
        bullets: [
          "Enhanced attention to detail when working with sensitive information",
          "Improved time management skills in a deadline-driven environment",
          "Better understanding of corporate data security protocols",
          "Experience working in a large corporate structure",
        ],
      },
    ],
    quote: {
      title: "Key Takeaway",
      content:
        "My time at Deloitte taught me the importance of precision and attention to detail in professional settings. Understanding how large organizations handle and secure data has been invaluable to my growth as a software developer, helping me appreciate the full lifecycle of data in enterprise applications.",
    },
  },
  {
    id: "university-of-guelph",
    company: {
      id: "university-of-guelph",
      name: "University of Guelph",
      logo: "/images/company/uofg.png",
      color: "border-success",
      iconBg: "bg-success/10",
    },
    title: "Teaching Assistant",
    period: "Sep 2023 – Dec 2024",
    location: "Guelph, Ontario",
    overview:
      "As a Teaching Assistant for CIS*2030: Structure/Application of Microcomputers at the University of Guelph, I provided comprehensive support to students while developing my own skills in communication and technical mentorship. This position allowed me to deepen my understanding of computer architecture while helping others master complex concepts.",
    aboutCompany:
      "The University of Guelph is a comprehensive public research university in Guelph, Ontario, Canada. Known for its excellence in arts and sciences, the university offers a variety of undergraduate and graduate programs and is particularly renowned for its veterinary medicine, agriculture, and environmental sciences programs.",
    responsibilities: [
      "Assisted the professor in conducting weekly lab sessions, clarifying complex concepts and providing hands-on guidance",
      "Provided personalized support for students struggling with assembly language programming, helping them develop debugging strategies",
      "Graded assignments and provided detailed feedback to help students improve their understanding and performance",
      "Held regular office hours to assist students with coursework and conceptual questions",
    ],
    additionalSections: [
      {
        title: "About the Course",
        content:
          "CIS*2030 focuses on computer organization and assembly language programming concepts. The course covers topics including:",
        type: "bullets",
        bullets: [
          "CPU architecture and instruction sets",
          "Memory organization and addressing modes",
          "Assembly language programming fundamentals",
          "Input/output operations and interrupts",
          "Low-level system interactions",
        ],
      },
      {
        title: "Skills Developed",
        content:
          "This teaching position strengthened several important skills:",
        type: "bullets",
        bullets: [
          "Advanced technical communication - explaining complex concepts in accessible ways",
          "Mentorship and educational support strategies",
          "Deeper understanding of computer architecture principles",
          "Patience and empathy when working with students at different learning levels",
          "Time management across teaching, grading, and my own studies",
        ],
      },
    ],
    quote: {
      title: "Reflections",
      content:
        "Being a Teaching Assistant has been one of the most rewarding experiences of my academic career. Helping students understand complex concepts has deepened my own understanding, while the opportunity to mentor others has developed my leadership and communication skills in ways that will be valuable throughout my professional career.",
    },
    technologies: ["68K Assembly", "CourseLink", "C"],
  },
  {
    id: "juice-inc",
    company: {
      id: "juice-inc",
      name: "Juice Inc.",
      logo: "/images/company/juice.png",
      color: "border-info",
      iconBg: "bg-info/10",
    },
    title: "Software Developer",
    period: "Jan 2024 – Aug 2024",
    location: "Guelph, Ontario",
    overview:
      "At Juice Inc., I focused on enhancing application security and developing engaging user experiences, leveraging my technical skills to overcome platform limitations and deliver robust solutions. This position allowed me to grow significantly as a developer while working on real-world business applications.",
    aboutCompany:
      "Juice Inc. is an innovative software development company focused on creating interactive learning and training solutions for corporate clients. The company specializes in developing engaging applications that transform traditional training content into interactive experiences that improve knowledge retention and user engagement.",
    responsibilities: [
      "Implemented comprehensive database security measures and Role-Based Access Control (RBAC) systems, safeguarding sensitive user data",
      "Utilized Construct3 for rapid application development, designing intuitive user flows and interactive functionality",
      "Supplemented platform capabilities with custom JavaScript solutions, extending functionality beyond the standard toolset",
      "Collaborated with designers and content specialists to create cohesive user experiences",
    ],
    additionalSections: [
      {
        title: "Projects & Achievements",
        content:
          "During my time at Juice Inc., I contributed to several key projects:",
        type: "bullets",
        bullets: [
          "Implemented a secure authentication system that reduced vulnerability risks by 60%",
          "Developed an interactive training module that received highly positive client feedback",
          "Created custom JavaScript extensions that enhanced platform capabilities",
          "Optimized application performance, reducing load times by 40%",
        ],
      },
    ],
    quote: {
      title: "Key Learning",
      content:
        "My experience at Juice Inc. taught me the value of creative problem-solving when faced with platform limitations. By extending the capabilities of our development tools through custom solutions, I learned that innovation often comes from working within constraints rather than being limited by them.",
    },
    technologies: ["JavaScript", "Construct3", "Firebase", "HTML5/CSS3"],
  },
];

export default experienceDetails;
