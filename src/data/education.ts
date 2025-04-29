export interface Education {
  degree: string;
  institution: string;
  period: string;
  majors: string[];
  courses: Array<{
    name: string;
    grade: string;
  }>;
}

const educationData: Education = {
  degree: "Bachelor of Computing Honours",
  institution: "University of Guelph",
  period: "September 2019 – Present",
  majors: ["Major in Computer Science (Co-op)", "Minor in Mathematics"],
  courses: [
    {
      name: "Software Engineering",
      grade: "87%",
    },
    {
      name: "Mobile Computing",
      grade: "89%",
    },
    {
      name: "Game Programming",
      grade: "90%",
    },
    {
      name: "User Interface Design",
      grade: "82%",
    },
    {
      name: "Intermediate Programming",
      grade: "85%",
    },
    {
      name: "Data Structures",
      grade: "82%",
    },
  ],
};

export default educationData;
