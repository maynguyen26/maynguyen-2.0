interface IntroductionProps {
  title: string;
  paragraphs: string[];
}

export default function IntroductionSection({
  title,
  paragraphs,
}: IntroductionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4 text-primary-dark">{title}</h2>

      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-gray-700 dark:text-gray-300 leading-relaxed ${
            index !== paragraphs.length - 1 ? "mb-4" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
