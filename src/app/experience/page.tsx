"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BriefcaseIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  ClockIcon,
  MapPinIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import workExperienceData from "@/data/workExperience";
import experienceDetails from "@/data/experienceDetails";
import {
  categorizeByKeywords,
  getCategoryStyles,
} from "@/utils/techCategories";

export default function ExperiencePage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
          <h1 className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey through various roles in software
            development, teaching, and data management.
          </p>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div
          className="mb-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-dark flex items-center">
                <BriefcaseIcon className="w-6 h-6 mr-2" />
                Career Timeline
              </h2>

              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-0 w-0.5 h-full bg-primary-light/30 mx-auto"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {workExperienceData.map((job, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-800"></div>

                      <div className="flex flex-col sm:flex-row justify-between mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {job.title} at {job.company}
                        </h3>
                        <span className="text-primary text-sm font-medium flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {job.period}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {job.location}
                      </p>

                      <p className="text-gray-700 dark:text-gray-300 my-2">
                        {job.description}
                      </p>

                      <a
                        href={`#${job.company.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-primary font-medium hover:text-primary-dark flex items-center mt-2 w-fit"
                      >
                        <span>Read more details</span>
                        <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Experience Sections */}
        <div className="space-y-16">
          {experienceDetails.map((experience, index) => (
            <motion.section
              key={experience.id}
              id={experience.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border-t-4 ${experience.company.color}`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-24">
                    <div className="mb-6 flex items-center">
                      <div
                        className={`p-3 ${experience.company.iconBg} rounded-lg mr-4`}
                      >
                        <BuildingOfficeIcon
                          className={`w-8 h-8 text-${experience.company.color.split("-")[1]}`}
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.company.name}
                      </h2>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
                        Position
                      </h3>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        {experience.title}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
                        Period
                      </h3>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        {experience.period}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
                        Location
                      </h3>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        {experience.location}
                      </p>
                    </div>

                    <div className="mb-6">
                      <Image
                        src={experience.company.logo}
                        alt={`${experience.company.name} Logo`}
                        width={180}
                        height={60}
                        className="rounded-lg"
                      />
                    </div>

                    {/* Show technologies if available - UPDATED to match about page style */}
                    {experience.technologies && (
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <h3 className="font-medium text-gray-800 dark:text-gray-200 flex items-center mb-3">
                          <CodeBracketIcon className="w-4 h-4 mr-2 text-primary" />
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => {
                            // Get appropriate styles based on tech category
                            const techCategories = categorizeByKeywords([tech]);
                            // Find the category where this tech exists
                            const category =
                              (Object.entries(techCategories).find(
                                ([techs]) => techs.includes(tech),
                              )?.[0] as keyof typeof techCategories) || "other";

                            const styles = getCategoryStyles(category);

                            return (
                              <span
                                key={idx}
                                className={`px-3 py-1 ${styles.bg} ${styles.text} text-sm rounded-full border ${styles.border}`}
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3
                      className={`text-xl font-semibold text-${experience.company.color.split("-")[1]}-dark mb-4`}
                    >
                      Overview
                    </h3>
                    <p>{experience.overview}</p>

                    <h3
                      className={`text-xl font-semibold text-${experience.company.color.split("-")[1]}-dark mb-4 mt-8`}
                    >
                      Company
                    </h3>
                    <p>{experience.aboutCompany}</p>

                    <h3
                      className={`text-xl font-semibold text-${experience.company.color.split("-")[1]}-dark mb-4 mt-8`}
                    >
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2 mt-4">
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span
                              className={`text-${experience.company.color.split("-")[1]} mr-2`}
                            >
                              •
                            </span>
                            <span>{responsibility}</span>
                          </li>
                        ),
                      )}
                    </ul>

                    {/* Additional sections */}
                    {experience.additionalSections.map((section, idx) => (
                      <div key={idx}>
                        <h3
                          className={`text-xl font-semibold text-${experience.company.color.split("-")[1]}-dark mb-4 mt-8`}
                        >
                          {section.title}
                        </h3>
                        <p>{section.content}</p>

                        {section.type === "bullets" && section.bullets && (
                          <ul className="space-y-2 list-disc pl-6 mt-4">
                            {section.bullets.map((bullet, bidx) => (
                              <li key={bidx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Quote/Testimonial section */}
                    {experience.quote && (
                      <div
                        className={`bg-${experience.company.color.split("-")[1]}/5 p-6 rounded-lg mt-8 border border-${experience.company.color.split("-")[1]}/20`}
                      >
                        <h4
                          className={`text-lg font-medium text-${experience.company.color.split("-")[1]}-dark mb-2`}
                        >
                          {experience.quote.title}
                        </h4>
                        <p className="italic">{experience.quote.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
