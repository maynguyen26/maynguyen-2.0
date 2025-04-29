import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  categorizeByKeywords,
  getCategoryStyles,
  getCategoryIcon,
  getCategoryDisplayName,
} from "@/utils/techCategories";

interface SkillsCardProps {
  skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  const skillCategories = categorizeByKeywords(skills);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 text-primary-dark flex items-center">
        <CodeBracketIcon className="w-5 h-5 mr-2" />
        Technical Skills
      </h2>

      <div className="space-y-6">
        {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>)
          .filter((category) => skillCategories[category].length > 0)
          .map((category) => {
            const CategoryIcon = getCategoryIcon(category);
            const displayName = getCategoryDisplayName(category);

            return (
              <div key={category}>
                <div className="flex items-center mb-2">
                  <CategoryIcon className="w-4 h-4 mr-2 text-primary" />
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {displayName}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[category].map((skill) => {
                    const styles = getCategoryStyles(category);
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 ${styles.bg} ${styles.text} text-sm rounded-full border ${styles.border}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
