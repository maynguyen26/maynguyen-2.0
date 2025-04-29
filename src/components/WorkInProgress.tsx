import { FC } from 'react';
import Link from 'next/link';

interface WorkInProgressProps {
  projectName: string;
  expectedDate?: string; // Optional: If you want to add an estimated completion date
  backLink?: string; // Optional: Custom back link (defaults to /projects)
}

const WorkInProgress: FC<WorkInProgressProps> = ({ 
  projectName, 
  expectedDate,
  backLink = '/projects'
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-4 text-3xl font-bold">
          {projectName}
        </h1>
        
        <div className="p-4 mb-4 text-blue-700 bg-blue-100 border-l-4 border-blue-500 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/50">
          <p className="text-lg font-medium">Live Demo Coming Soon</p>
          <p className="mt-2">
            This live demonstration is currently a work in progress and will be available soon.
          </p>
          {expectedDate && (
            <p className="mt-2 text-sm font-medium">
              Expected completion: {expectedDate}
            </p>
          )}
        </div>
        
        <Link 
          href={backLink}
          className="inline-block px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default WorkInProgress;