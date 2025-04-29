"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import {
  CodeBracketIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { categorizeByKeywords } from "@/utils/techCategories";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Extract all unique categories from projects
  const allCategories = Array.from(
    new Set(
      projectsData.flatMap((project) => {
        const categorized = categorizeByKeywords(project.technologies);
        return Object.keys(categorized).filter(
          (category) =>
            categorized[category as keyof typeof categorized]?.length > 0,
        );
      }),
    ),
  );

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => {
          const categorized = categorizeByKeywords(project.technologies);
          return (
            categorized[activeFilter as keyof typeof categorized]?.length > 0
          );
        });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-card py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my programming projects showcasing my skills,
            interests, and growth as a developer. <br />
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2 text-primary" />
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Filter Projects
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              All Projects
            </button>

            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors capitalize ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Project (if any) */}
        {filteredProjects.length > 0 && activeFilter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <CodeBracketIcon className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-6 pl-6 text-primary-dark">
                Featured Project
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-primary/10">
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden h-64 lg:h-full">
                <img
                  src={filteredProjects[0].image}
                  alt={filteredProjects[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold mb-3 text-primary-dark">
                  {filteredProjects[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {filteredProjects[0].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredProjects[0].technologies.map((tech, index) => {
                    const categoryData = categorizeByKeywords([tech]);
                    const category =
                      Object.entries(categoryData).find(([techs]) =>
                        techs.includes(tech),
                      )?.[0] || "other";

                    let bgColor = "bg-gray-100";
                    let textColor = "text-gray-800";

                    if (category === "frontend") {
                      bgColor = "bg-blue-50";
                      textColor = "text-blue-700";
                    } else if (category === "backend") {
                      bgColor = "bg-green-50";
                      textColor = "text-green-700";
                    } else if (category === "languages") {
                      bgColor = "bg-yellow-50";
                      textColor = "text-yellow-700";
                    } else if (category === "database") {
                      bgColor = "bg-purple-50";
                      textColor = "text-purple-700";
                    } else if (category === "tools") {
                      bgColor = "bg-orange-50";
                      textColor = "text-orange-700";
                    }

                    return (
                      <span
                        key={index}
                        className={`px-3 py-1 ${bgColor} ${textColor} text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  <a
                    href={`/projects/${filteredProjects[0].id}`}
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  >
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={filteredProjects[0].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects match the selected filter. Try selecting a different
              category.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">
              Interested in working together?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <a
              href="/connect"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full
                hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              <span className="font-medium">Get in Touch</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
