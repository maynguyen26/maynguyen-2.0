export interface Interest {
  title: string;
  description: string;
  borderColor: string;
  textColor: string;
}

const interestsData: Interest[] = [
  {
    title: "Ultimate Frisbee",
    description:
      "Beyond captaining the varsity team, I play in competitive club leagues and enjoy teaching the sport to beginners.",
    borderColor: "border-primary/20",
    textColor: "text-primary-dark",
  },
  {
    title: "UX/UI Design",
    description:
      "I'm passionate about creating intuitive user experiences and staying current with design trends.",
    borderColor: "border-accent/20",
    textColor: "text-accent-dark",
  },
  {
    title: "Coaching",
    description:
      "I volunteer coach for youth programs and mentor aspiring players, giving back to my community.",
    borderColor: "border-success/20",
    textColor: "text-success",
  },
];

export default interestsData;
