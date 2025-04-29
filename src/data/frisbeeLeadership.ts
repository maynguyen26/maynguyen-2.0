export interface Leadership {
  title: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: {
    leadership: string[];
    business: string[];
  };
  achievements: Array<{
    value: string;
    label: string;
  }>;
}

const frisbeeLeadershipData: Leadership = {
  title: "Varsity Ultimate Frisbee Captain",
  organization: "University of Guelph Women's Team",
  duration: "4 Years",
  description:
    "As the captain of the University of Guelph Women's Ultimate Frisbee team for four consecutive years, I led our team to national recognition, achieving 5th place in Canada Division I and receiving the prestigious MVP award. This leadership role developed my management, communication, and strategic planning skills beyond the classroom setting.",
  responsibilities: {
    leadership: [
      "Coordinated a leadership team to manage all administrative aspects of the club",
      "Handled tournament registration, travel logistics, and competition scheduling",
      "Developed and executed team strategy during competitions",
      "Mentored new players and facilitated skill development across the team",
    ],
    business: [
      "Created and managed annual budgets, allocating resources effectively",
      "Established sponsorship relationships through proactive outreach",
      "Developed social media marketing strategies to increase club visibility",
      "Organized fundraising events to support team travel and equipment needs",
    ],
  },
  achievements: [
    {
      value: "5th",
      label: "in Canada Division I",
    },
    {
      value: "MVP",
      label: "Award Recipient",
    },
    {
      value: "4 Yrs",
      label: "as Team Captain",
    },
  ],
};

export default frisbeeLeadershipData;
