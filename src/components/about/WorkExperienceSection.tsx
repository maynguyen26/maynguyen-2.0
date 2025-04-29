import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { WorkExperience } from "@/data/workExperience";
import {
  PresentationChartBarIcon,
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

// Map of icon names to actual icon components
const iconMap = {
  PresentationChartBar: PresentationChartBarIcon,
  CodeBracket: CodeBracketIcon,
  Server: ServerIcon,
  CommandLine: CommandLineIcon
};

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-6 text-primary-dark flex items-center">
        <BriefcaseIcon className="w-6 h-6 mr-3" />
        Work Experience
      </h2>

      {experiences.map((exp, index) => {
        const IconComponent = iconMap[exp.icon as keyof typeof iconMap];
        const isLast = index === experiences.length - 1;

        return (
          <div key={index} className={`${isLast ? '' : 'mb-10'} relative`}>
            {/* Timeline line */}
            <div className="absolute top-6 bottom-0 left-6 w-0.5 bg-primary-light"></div>
            <div className="flex gap-6">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border border-primary/20">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-primary text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {exp.company}, {exp.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
