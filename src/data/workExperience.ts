export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  icon: string; // Name of the icon to use
}

const workExperienceData: WorkExperience[] = [
  {
    title: "Teaching Assistant",
    company: "University of Guelph",
    location: "Guelph, ON",
    period: "Sep 2023 – Dec 2024",
    description:
      "As a Teaching Assistant for CIS*2030: Structure/Application of Microcomputers, I provided comprehensive support to students while developing my own skills in communication and technical mentorship.",
    responsibilities: [
      "Assisted the professor in conducting weekly lab sessions, clarifying complex concepts and providing hands-on guidance",
      "Provided personalized support for students struggling with assembly language programming, helping them develop debugging strategies",
      "Graded assignments and provided detailed feedback to help students improve their understanding and performance",
    ],
    icon: "PresentationChartBar",
  },
  {
    title: "Software Developer",
    company: "Juice Inc.",
    location: "Guelph, ON",
    period: "Jan 2024 – Aug 2024",
    description:
      "At Juice Inc., I focused on enhancing application security and developing engaging user experiences, leveraging my technical skills to overcome platform limitations and deliver robust solutions.",
    responsibilities: [
      "Implemented comprehensive database security measures and Role-Based Access Control (RBAC) systems, safeguarding sensitive user data",
      "Utilized Construct3 for rapid application development, designing intuitive user flows and interactive functionality",
      "Supplemented platform capabilities with custom JavaScript solutions, extending functionality beyond the standard toolset",
    ],
    icon: "CodeBracket",
  },
  {
    title: "Data Entry and File Administration",
    company: "Deloitte",
    location: "Toronto, ON",
    period: "May 2023 – Aug 2023",
    description:
      "Working at Deloitte strengthened my attention to detail and data integrity skills, as I managed critical information systems for high-profile clients in a fast-paced environment.",
    responsibilities: [
      "Accurately processed and maintained large volumes of sensitive data, ensuring compliance with strict project guidelines and protocols",
      "Performed thorough quality assurance checks, identifying and resolving data discrepancies to maintain system integrity",
      "Developed efficient data entry methodologies that improved processing speed while maintaining accuracy standards",
    ],
    icon: "Server",
  },
  {
    title: "Junior Programmer",
    company: "Deleptual",
    location: "Toronto, ON",
    period: "May 2022 – Dec 2022",
    description:
      "My role at Deleptual provided hands-on experience with modern web development technologies and analytics tools, allowing me to contribute to real-world client projects and refine my technical skillset.",
    responsibilities: [
      "Maintained and updated client web applications using React.js, implementing new features and resolving bugs",
      "Generated comprehensive analytics reports using Google Analytics and custom-built tracking solutions",
      "Enhanced front-end development skills through practical application of React and JavaScript",
      "Explored game development principles using Unity for specialized client projects",
    ],
    icon: "CommandLine",
  },
];

export default workExperienceData;
