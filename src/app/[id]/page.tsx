import { notFound } from 'next/navigation';
import WorkInProgress from '@/components/WorkInProgress';

const validDemoProjects = [
    'lipht',
    'valisthea',
  ];

export default async function ProjectDemoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    
    if (!validDemoProjects.includes(id)) {
      notFound();
    }
    
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