"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, ArrowTopRightOnSquareIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/connect/ContactInfoCard";
import SocialLinksCard from "@/components/connect/SocialLinksCard";
import AvailabilityTab from "@/components/connect/AvailabilityTab";
import TestimonialsSection from "@/components/connect/TestimonialsSection";
import { socialLinks } from "@/data/socialLinks";

type ActiveTab = "contact" | "social" | "resume";

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("contact");

  return (
    <div className="min-h-screen bg-card py-16">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-primary via-info to-accent hidden sm:block">
              <div className="relative h-80 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/contact-profile.jpeg"
                  alt="May Nguyen"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            <ContactInfoCard />
            <SocialLinksCard />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { key: "contact", label: "Contact Form", icon: <EnvelopeIcon className="w-5 h-5 mr-2" /> },
                { key: "social", label: "Social Media", icon: <FaLinkedinIn className="w-4 h-4 mr-2" /> },
                { key: "resume", label: "Availability", icon: <CalendarIcon className="w-5 h-5 mr-2" /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as ActiveTab)}
                  className={`flex items-center px-4 py-3 font-medium transition-colors ${
                    activeTab === tab.key
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contact Form Tab */}
            {activeTab === "contact" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Have a question, project idea, or just want to say hello? Fill
                  out the form below and I&apos;ll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            )}

            {/* Social Media Tab */}
            {activeTab === "social" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                  Connect on Social Media
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow me on social media to see my latest projects, coding
                  tips, and professional updates.
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
                      <div className={`p-3 rounded-full ${social.color.split(" ").slice(0, 2).join(" ")}`}>
                        <social.icon className={`w-6 h-6 ${social.color.split(" ").slice(2, 3)}`} />
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

            {/* Availability Tab */}
            {activeTab === "resume" && <AvailabilityTab />}

            {/* Testimonials - always visible */}
            <TestimonialsSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
}