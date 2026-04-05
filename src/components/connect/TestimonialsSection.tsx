export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "May is an exceptional problem solver with outstanding communication skills. Her ability to translate complex technical concepts into accessible explanations makes her an invaluable team member.",
      name: "Dr. Matthew Sullivan",
      title: "Doctor, University of Waterloo",
      initials: "MS",
      colorClass: "bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/10",
      avatarClass: "bg-primary/20 text-primary",
    },
    {
      quote:
        "Working with May on our client projects was a pleasure. She brings creativity, technical skill, and a positive attitude to every challenge. Her code is clean, well-documented, and highly maintainable.",
      name: "Jack Park",
      title: "Software Developer, Amazon",
      initials: "JP",
      colorClass: "bg-gradient-to-r from-accent/5 to-accent-light/5 border-accent/10",
      avatarClass: "bg-accent/20 text-accent",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-6 text-primary-dark">
        What People Say
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`rounded-lg p-5 border ${t.colorClass}`}
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${t.avatarClass}`}
              >
                {t.initials}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}