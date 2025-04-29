import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import {
  categorizeByKeywords,
  getCategoryStyles,
} from "@/utils/techCategories";
import {
  ArrowRightIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Categorize technologies
  const techCategories = categorizeByKeywords(project.technologies);

  // Get all technologies from all categories
  const allTechsWithCategories = Object.entries(techCategories).flatMap(
    ([category, techs]) =>
      techs.map((tech) => ({
        tech,
        category: category as keyof typeof techCategories,
      })),
  );

  // Pick 3 technologies to display (to avoid overcrowding)
  const displayTechs = allTechsWithCategories.slice(0, 3);
  const additionalCount = allTechsWithCategories.length - displayTechs.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 h-full flex flex-col group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="flex space-x-2">
            <Link
              href={`/projects/${project.id}`}
              className="p-2 bg-white/90 rounded-full text-primary hover:bg-white transition-colors"
            >
              <CodeBracketIcon className="w-4 h-4" />
            </Link>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-primary hover:bg-white transition-colors"
            >
              <GlobeAltIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary-dark group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {displayTechs.map(({ tech, category }) => {
            const styles = getCategoryStyles(category);
            return (
              <span
                key={tech}
                className={`px-2 py-1 ${styles.bg} ${styles.text} text-xs rounded-md border ${styles.border}`}
              >
                {tech}
              </span>
            );
          })}
          {additionalCount > 0 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-md">
              +{additionalCount} more
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="text-primary font-medium hover:text-primary-dark hover:underline transition-colors flex items-center mt-auto"
        >
          <span>View Project</span>
          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
