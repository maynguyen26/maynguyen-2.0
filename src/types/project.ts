export interface DemoCredentials {
  email: string;
  password: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

export interface ProjectDetail extends Project {
  description: string;
  challenges: string;
  learnings: string[];
  images: string[];
  deploymentProcess?: string;
  demoCredentials?: {
    admin?: DemoCredentials;
    employee?: DemoCredentials;
  };
}