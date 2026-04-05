import Link from "next/link";
import { EnvelopeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function AvailabilityTab() {
  return (
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
          I graduated in August of 2025 and am actively seeking full-time
          software development positions.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
          Interested Roles
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Frontend Developer", color: "bg-blue-50 text-blue-700 border-blue-100" },
            { label: "Full-Stack Developer", color: "bg-purple-50 text-purple-700 border-purple-100" },
            { label: "UI/UX Engineer", color: "bg-pink-50 text-pink-700 border-pink-100" },
            { label: "Software Engineer", color: "bg-green-50 text-green-700 border-green-100" },
            { label: "React Developer", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
          ].map((role) => (
            <span
              key={role.label}
              className={`px-3 py-1 text-sm rounded-full border ${role.color}`}
            >
              {role.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
          Location Preferences
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium text-gray-800 dark:text-gray-200">Preferred:</span>{" "}
          Winnipeg, MB (on-site or hybrid)
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          <span className="font-medium text-gray-800 dark:text-gray-200">Open to:</span>{" "}
          Remote positions or relocation within Canada
        </p>
      </div>

      <div className="bg-primary/5 rounded-lg p-5 border border-primary/20">
        <h3 className="text-lg font-medium text-primary-dark mb-3">
          Schedule an Interview
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Interested in discussing how I can contribute to your team?
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="mailto:maynguyen26@gmail.com?subject=Interview Request"
            className="flex items-center justify-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <span>maynguyen26@gmail.com</span>
          </Link>
          <Link
            href="/resume.pdf"
            download
            className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
            <span>Download Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}