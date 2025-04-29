import { TrophyIcon } from "@heroicons/react/24/outline";
import { Leadership } from "@/data/frisbeeLeadership";

interface FrisbeeLeadershipSectionProps {
  data: Leadership;
}

export default function FrisbeeLeadershipSection({
  data,
}: FrisbeeLeadershipSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-success/20">
      <div className="flex items-start mb-6">
        <div className="bg-success/20 p-2 rounded-lg mr-4">
          <TrophyIcon className="w-8 h-8 text-success" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-success">{data.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {data.organization} | {data.duration}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-primary text-lg mb-3">
              Leadership Responsibilities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {data.responsibilities.leadership.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-primary text-lg mb-3">
              Business Management
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {data.responsibilities.business.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-success/10 p-4 rounded-lg">
        <h3 className="font-semibold text-success mb-2">Key Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-success mb-1">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
