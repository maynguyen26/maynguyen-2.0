"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ExplorePage() {
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

  const sections = [
    {
      title: "About Me",
      description: "Learn more about my background, skills, and interests.",
      href: "/about",
      icon: UserIcon,
      image: "/images/explore/about.jpeg",
      gradientFrom: "from-primary-light",
      gradientTo: "to-primary",
    },
    {
      title: "Experience",
      description: "Explore my educational background and work experience.",
      href: "/experience",
      icon: BriefcaseIcon,
      image: "/images/explore/experience.jpg",
      gradientFrom: "from-primary",
      gradientTo: "to-primary-dark",
    },
    {
      title: "Projects",
      description: "Check out the projects I've worked on.",
      href: "/projects",
      icon: CodeBracketIcon,
      image: "/images/explore/projects.jpg",
      gradientFrom: "from-primary-dark",
      gradientTo: "to-accent-light",
    },
    {
      title: "Connect",
      description: "Get in touch with me for opportunities or collaboration.",
      href: "/connect",
      icon: EnvelopeIcon,
      image: "/images/explore/connect.jpg",
      gradientFrom: "from-accent-light",
      gradientTo: "to-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-card py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore My World
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello! Welcome to my portfolio. I&apos;m May, a soon-to-be computer
            science graduate passionate about software development. Explore my
            journey, skills, and projects below.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.href}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Link href={section.href} className="block h-full">
                <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section - Clean with no overlays */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index < 2}
                    />

                    {/* Prettier Icon with gradient border */}
                    <div className="absolute top-4 left-4 z-20">
                      <div
                        className={`relative p-0.5 rounded-full bg-gradient-to-r ${section.gradientFrom} ${section.gradientTo} group-hover:p-1 transition-all duration-300`}
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-full p-3 relative z-10">
                          <section.icon
                            className={`w-6 h-6 transition-colors duration-300 text-primary-dark group-hover:text-accent`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3 text-primary-dark group-hover:text-accent transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {section.description}
                    </p>
                    <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                      <span className="font-medium">View Details</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-dark to-accent text-white rounded-full
            hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
          >
            <span className="font-medium">View My Projects</span>
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
