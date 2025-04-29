"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "social" | "resume">(
    "contact",
  );

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/maynguyen",
      color:
        "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/maynguyen26",
      color:
        "bg-gray-800/10 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/maycoding",
      color:
        "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/may.codes",
      color:
        "bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 text-[#FD1D1D] hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white",
    },
  ];

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
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Profile Image with Gradient Border */}
            <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-primary via-info to-accent hidden sm:block">
              <div className="relative h-80 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/contact-profile.jpeg"
                  alt="May Nguyen"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-5 text-primary-dark">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <EnvelopeIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      <Link
                        href="mailto:maynguyen26@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        maynguyen26@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <PhoneIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      <Link
                        href="tel:+14165555555"
                        className="hover:text-accent transition-colors"
                      >
                        (519) 240-9219
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-success/10 rounded-full">
                    <MapPinIcon className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Winnipeg, Manitoba, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-dark/10 rounded-full">
                    <CalendarIcon className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Availability
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Graduating August 2025 - Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-5 text-primary-dark">
                Follow Me
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-primary/20">
              <h2 className="text-xl font-bold mb-4 text-primary-dark">
                Download Resume
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                For a comprehensive overview of my skills, experience, and
                education, download my resume:
              </p>
              <Link
                href="/resume.pdf"
                download
                className="flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <span className="mr-2">Download Resume (PDF)</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === "contact"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => setActiveTab("contact")}
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Contact Form
              </button>
              <button
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === "social"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => setActiveTab("social")}
              >
                <FaLinkedinIn className="w-4 h-4 mr-2" />
                Social Media
              </button>
              <button
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === "resume"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => setActiveTab("resume")}
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Availability
              </button>
            </div>

            {/* Contact Form Section */}
            {activeTab === "contact" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Have a question, project idea, or just want to say hello? Fill
                  out the form below, and I&apos;ll get back to you as soon as
                  possible.
                </p>

                <ContactForm />
              </div>
            )}

            {/* Social Media Details Section */}
            {activeTab === "social" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                  Connect on Social Media
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow me on social media to see my latest projects, coding
                  tips, and professional updates. I&apos;m always happy to
                  connect with fellow developers and potential collaborators.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-all group"
                    >
                      <div
                        className={`p-3 rounded-full ${social.color.split(" ").slice(0, 2).join(" ")}`}
                      >
                        <social.icon
                          className={`w-6 h-6 ${social.color.split(" ").slice(2, 3)}`}
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {social.url.replace("https://", "")}
                        </p>
                        <p className="text-primary text-sm mt-2 flex items-center">
                          <span>Visit Profile</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Availability Section */}
            {activeTab === "resume" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                  Availability & Career Interests
                </h2>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Current Status
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    <span className="text-green-700 dark:text-green-400 font-medium">
                      Available for Opportunities
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    I&apos;m graduating in August 2025 and am actively seeking
                    full-time software development positions starting May 2025.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Interested Roles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100">
                      Frontend Developer
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-100">
                      Full-Stack Developer
                    </span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 text-sm rounded-full border border-pink-100">
                      UI/UX Engineer
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-100">
                      Software Engineer
                    </span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm rounded-full border border-yellow-100">
                      React Developer
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Location Preferences
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Preferred:
                    </span>{" "}
                    Winnipeg, MB (on-site or hybrid)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Open to:
                    </span>{" "}
                    Remote positions or relocation within Canada
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-5 border border-primary/20">
                  <h3 className="text-lg font-medium text-primary-dark mb-3">
                    Schedule an Interview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Interested in discussing how I can contribute to your team?
                    Let&apos;s schedule a conversation:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="mailto:may@maynguyen.ca?subject=Interview Request"
                      className="flex items-center justify-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      <span>Email to Schedule</span>
                    </Link>
                    <Link
                      href="/files/may-nguyen-resume.pdf"
                      download
                      className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                      <span>Download Resume</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                What People Say
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-5 border border-primary/10">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                    &quot;May is an exceptional problem solver with outstanding
                    communication skills. Her ability to translate complex
                    technical concepts into accessible explanations makes her an
                    invaluable team member.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                      MS
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 dark:text-white">
                       Dr. Matthew Sullivan
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Doctor, University of Waterloo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/5 to-accent-light/5 rounded-lg p-5 border border-accent/10">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                    &quot;Working with May on our client projects was a
                    pleasure. She brings creativity, technical skill, and a
                    positive attitude to every challenge. Her code is clean,
                    well-documented, and highly maintainable.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                      JP
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 dark:text-white">
                        Jack Park
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Software Developer, Amazon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
