import { notFound } from 'next/navigation';
import WorkInProgress from '@/components/WorkInProgress';

const validDemoProjects = [
  'lipht',
  'valisthea',
];

export default async function DemoPage({ params }: { params: { id: string } }) {
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
}
