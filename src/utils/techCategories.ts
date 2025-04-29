import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
  PuzzlePieceIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const TECH_CATEGORIES = {
  languages: [
    "javascript",
    "typescript",
    "c ",
    "c++",
    "c#",
    "java",
    "python",
    "dart",
    "php",
    "cobol",
    "fortran",
    "pascal",
    "assembly",
  ],
  frontend: [
    "react",
    "next",
    "vue",
    "angular",
    "html",
    "css",
    "tailwind",
    "flutter",
  ],
  backend: ["node", "express", "spring boot", ".net", "api"],
  database: ["sql", "mongo", "database", "firebase"],
  testing: ["jest"],
  gamedev: ["unity"],
  devops: ["docker", "ci/cd", "deployment"],
  tools: [
    "github",
    "gitlab",
    "git",
    "visual studio code",
    "netlify",
    "aws",
    "vercel",
    "domain",
  ],
} as const;

export type CategoryResult = {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  testing: string[];
  gamedev: string[];
  devops: string[];
  tools: string[];
  other: string[];
};

export function categorizeByKeywords(technologies: string[]): CategoryResult {
  const result: CategoryResult = {
    languages: [],
    frontend: [],
    backend: [],
    database: [],
    testing: [],
    gamedev: [],
    devops: [],
    tools: [],
    other: [],
  };

  technologies.forEach((tech) => {
    const lowerTech = tech.toLowerCase();
    if (
      TECH_CATEGORIES.languages.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.languages.push(tech);
    } else if (
      TECH_CATEGORIES.frontend.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.frontend.push(tech);
    } else if (
      TECH_CATEGORIES.backend.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.backend.push(tech);
    } else if (
      TECH_CATEGORIES.database.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.database.push(tech);
    } else if (
      TECH_CATEGORIES.testing.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.testing.push(tech);
    } else if (
      TECH_CATEGORIES.gamedev.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.gamedev.push(tech);
    } else if (
      TECH_CATEGORIES.devops.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.devops.push(tech);
    } else if (
      TECH_CATEGORIES.tools.some((keyword) => lowerTech.includes(keyword))
    ) {
      result.tools.push(tech);
    } else {
      result.other.push(tech);
    }
  });

  return result;
}

export type CategoryStyle = {
  bg: string;
  text: string;
  border: string;
  iconColor: string;
};

// Basic styles without icons
export const getCategoryStyles = (
  category: keyof CategoryResult,
): CategoryStyle => {
  const styles: Record<keyof CategoryResult, CategoryStyle> = {
    languages: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      border: "border-yellow-100",
      iconColor: "text-yellow-500",
    },
    frontend: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-100",
      iconColor: "text-blue-500",
    },
    backend: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-100",
      iconColor: "text-green-500",
    },
    database: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-100",
      iconColor: "text-indigo-500",
    },
    testing: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-100",
      iconColor: "text-red-500",
    },
    gamedev: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-100",
      iconColor: "text-purple-500",
    },
    devops: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-100",
      iconColor: "text-orange-500",
    },
    tools: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-100",
      iconColor: "text-teal-500",
    },
    other: {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-100",
      iconColor: "text-gray-500",
    },
  };

  return styles[category];
};

export const getCategoryIcon = (category: keyof CategoryResult) => {
  switch (category) {
    case "languages":
      return DocumentTextIcon;
    case "frontend":
      return CpuChipIcon;
    case "backend":
      return ServerIcon;
    case "database":
      return CommandLineIcon;
    case "testing":
      return BeakerIcon;
    case "gamedev":
      return PuzzlePieceIcon;
    case "devops":
      return RocketLaunchIcon;
    case "tools":
      return WrenchScrewdriverIcon;
    case "other":
      return CodeBracketIcon;
  }
};

// Get the display name for a category
export const getCategoryDisplayName = (
  category: keyof CategoryResult,
): string => {
  switch (category) {
    case "languages":
      return "Languages";
    case "frontend":
      return "Frontend";
    case "backend":
      return "Backend";
    case "database":
      return "Database";
    case "testing":
      return "Testing";
    case "gamedev":
      return "Game Development";
    case "devops":
      return "DevOps";
    case "tools":
      return "Tools";
    case "other":
      return "Other";
  }
};
