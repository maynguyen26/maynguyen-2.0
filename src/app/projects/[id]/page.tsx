import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectsData from "@/data/projects.json";
import { ProjectDetail } from "@/types/project";
import {
  categorizeByKeywords,
  getCategoryStyles,
  getCategoryIcon,
  getCategoryDisplayName,
} from "@/utils/techCategories";
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id) as ProjectDetail;

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">
            Sorry, the project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/projects" className="text-blue-600 hover:underline">
            ← Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Use the utility function to categorize technologies
  const techCategories = categorizeByKeywords(project.technologies);

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group transition-all"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
            >
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              Live Demo
            </Link>
            <Link
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              Source Code
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left column - Main image and description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <LightBulbIcon className="w-6 h-6 mr-2 text-blue-600" />
                Overview
              </h2>

              {/* Break the description into paragraphs */}
              {project.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Challenges Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <ChartBarIcon className="w-6 h-6 mr-2 text-amber-600" />
                Challenges & Solutions
              </h2>

              {/* Break the challenges into paragraphs */}
              {project.challenges.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* What I Learned Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <LightBulbIcon className="w-6 h-6 mr-2 text-green-600" />
                What I Learned
              </h2>
              <ul className="space-y-3 text-gray-700">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployment Process Card (if exists) */}
            {project.deploymentProcess && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <RocketLaunchIcon className="w-6 h-6 mr-2 text-purple-600" />
                  Deployment Process
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {project.deploymentProcess
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Details and gallery */}
          <div className="space-y-6">
            {/* Project Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>

              {/* Technologies Section */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Technologies</h3>

                {/* Render each tech category */}
                {(
                  Object.keys(techCategories) as Array<
                    keyof typeof techCategories
                  >
                ).map(
                  (category) =>
                    techCategories[category].length > 0 && (
                      <div key={category} className="mb-3">
                        <h4 className="text-sm text-gray-500 mb-2 flex items-center capitalize">
                          {React.createElement(getCategoryIcon(category), {
                            className: "w-4 h-4 mr-2",
                          })}
                          {getCategoryDisplayName(category)}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {techCategories[category].map((tech) => {
                            const styles = getCategoryStyles(category);
                            return (
                              <span
                                key={tech}
                                className={`px-2 py-1 ${styles.bg} ${styles.text} text-sm rounded-md border ${styles.border}`}
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ),
                )}
              </div>

              {/* Links Section */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Links</h3>
                <div className="space-y-2">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition flex items-center"
                  >
                    <GlobeAltIcon className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition flex items-center"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2 text-gray-600" />
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Gallery Preview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <PhotoIcon className="w-5 h-5 mr-2 text-indigo-600" />
                Gallery Preview
              </h2>
              <div className="space-y-3">
                {project.images.slice(0, 2).map((image, index) => (
                  <div
                    key={index}
                    className="relative h-36 rounded-lg overflow-hidden shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
                {project.images.length > 2 && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    +{project.images.length - 2} more screenshots
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full Gallery Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <PhotoIcon className="w-6 h-6 mr-2 text-indigo-600" />
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative h-60 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {project.title} - View {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
