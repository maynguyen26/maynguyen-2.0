import { HeartIcon } from "@heroicons/react/24/outline";
import { Interest } from "@/data/interests";

interface InterestsSectionProps {
  title: string;
  description: string;
  interests: Interest[];
}

export default function InterestsSection({
  title,
  description,
  interests,
}: InterestsSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4 text-primary-dark flex items-center">
        <HeartIcon className="w-6 h-6 mr-2 text-accent" />
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg border ${interest.borderColor} shadow-sm`}
          >
            <h3 className={`font-medium ${interest.textColor} mb-2`}>
              {interest.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
