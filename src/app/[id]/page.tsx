import { FC } from 'react';
import { notFound } from 'next/navigation';
import WorkInProgress from '@/components/WorkInProgress';

const validDemoProjects = [
  'lipht',
  'valisthea',
];

interface DemoPageProps {
  params: {
    id: string;
  };
}

const DemoPage: FC<DemoPageProps> = ({ params }) => {
  const { id } = params;
  
  if (!validDemoProjects.includes(id)) {
    notFound();
  }
  
  // Get project name from ID (customize this logic as needed)
  const projectName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <WorkInProgress 
      projectName={projectName}
      backLink={`/projects/${id}`} // Link back to the project details page
    />
  );
};

export default DemoPage;
