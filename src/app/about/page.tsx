"use client";

import { motion } from "framer-motion";
import EducationCard from "@/components/about/EducationCard";
import SkillsCard from "@/components/about/SkillsCard";
import MemoriesCard from "@/components/about/MemoriesCard";
import VideoCard from "@/components/about/VideoCard";
import IntroductionSection from "@/components/about/IntroductionSection";
import WorkExperienceSection from "@/components/about/WorkExperienceSection";
import FrisbeeLeadershipSection from "@/components/about/FrisbeeLeadershipSection";
import InterestsSection from "@/components/about/InterestsSection";

// Import data
import educationData from "@/data/education";
import skillsData from "@/data/skills";
import galleryData from "@/data/gallery.json";
import workExperienceData from "@/data/workExperience";
import frisbeeLeadershipData from "@/data/frisbeeLeadership";
import interestsData from "@/data/interests";
import introductionData from "@/data/introduction";
import videosData from "@/data/videos";

export default function AboutPage() {
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
          <h1 className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            About May Nguyen
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Upcoming Computer Science graduate with a passion for thoughtful
            design, clean code, and solving real-world problems through
            intuitive software.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Profile Image with Gradient Border */}
            <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-primary via-accent to-success">
              <div className="relative h-80 w-full md:h-96 rounded-xl overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="May Nguyen"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </div>

            {/* Education Card */}
            <EducationCard data={educationData} />

            {/* Technical Skills Card */}
            <SkillsCard skills={skillsData} />

            {/* Memories Gallery Section */}
            <MemoriesCard photos={galleryData} />

            {/* Ultimate Frisbee Highlight Video */}
            <VideoCard
              videoId={videosData.id}
              title={videosData.title}
              caption={videosData.caption}
            />
          </motion.div>

          {/* Right Column - Work Experience and Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Introduction Section */}
            <IntroductionSection
              title={introductionData.title}
              paragraphs={introductionData.paragraphs}
            />

            {/* Work Experience Section */}
            <WorkExperienceSection experiences={workExperienceData} />

            {/* Ultimate Frisbee Leadership Section */}
            <FrisbeeLeadershipSection data={frisbeeLeadershipData} />

            {/* Interests Section */}
            <InterestsSection
              title="Beyond Coding"
              description="While my passion for software development drives my professional pursuits, I maintain a balanced life through various interests that keep me engaged and inspired outside of work and academics."
              interests={interestsData}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
