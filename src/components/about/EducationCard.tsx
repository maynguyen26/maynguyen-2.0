import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Education } from "@/data/education";

interface EducationCardProps {
  data: Education;
}

export default function EducationCard({ data }: EducationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 text-primary-dark flex items-center">
        <AcademicCapIcon className="w-5 h-5 mr-2" />
        Education
      </h2>

      <div className="border-l-2 border-primary pl-4 py-1 mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {data.degree}
        </h3>
        <p className="text-primary font-medium">{data.institution}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {data.period}
        </p>
      </div>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {data.majors.map((major, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{major}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-medium text-gray-800 dark:text-gray-200">
          Relevant Coursework:
        </h4>
        <ul className="mt-2 grid grid-cols-1 gap-1">
          {data.courses.map((course, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                {course.name}
              </span>
              <span className="font-medium text-success">{course.grade}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
