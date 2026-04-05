import { EnvelopeIcon, PhoneIcon, MapPinIcon, CalendarIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactInfoCard() {
  return (
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
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              <Link
                href="tel:+15192409219"
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
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Graduated August 2025 - Actively seeking opportunities
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold mb-4 text-primary-dark">
          Download Resume
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          For a comprehensive overview of my skills, experience, and education:
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
    </div>
  );
}