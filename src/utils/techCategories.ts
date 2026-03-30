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
  CloudIcon,
} from "@heroicons/react/24/outline";

// ─────────────────────────────────────────────────────────────
// MATCHING STRATEGY
//
// Languages → EXACT match only (prevents short strings like "c"
//   from colliding inside "Azure Static Web Apps", etc.)
//
// Everything else → CONTAINS match (substring of lowercased name)
//   Use specific enough keywords to avoid false positives.
// ─────────────────────────────────────────────────────────────

const EXACT_LANGUAGES = [
  "c",
  "c++",
  "c#",
  "c/c++",
  "c/c++/c#",
  "java",
  "sql",
  "php",
  "dart",
  "python",
  "javascript",
  "typescript",
  "assembly",
  "assembly (m68000)",
  "html",
  "css",
  "html/css",
];

export const TECH_CATEGORIES = {
  // Exact-matched — see EXACT_LANGUAGES above
  languages: EXACT_LANGUAGES,

  // UI / client-side
  frontend: [
    "react",
    "next",
    "vue",
    "angular",
    "tailwind",
    "flutter",
    "svelte",
    "html/css",
  ],

  // Server-side / API
  backend: [
    ".net",
    "asp.net",
    "node",
    "express",
    "spring boot",
    "entity framework",
    "jwt",
    "bcrypt",
    "rest api",
    "api",
  ],

  // Data storage
  database: [
    "sql server",
    "mysql",
    "mariadb",
    "postgresql",
    "mongodb",
    "firebase",
    "firestore",
    "sqlite",
  ],

  // Cloud platforms & hosting
  cloud: [
    "azure",
    "aws",
    "gcp",
    "vercel",
    "netlify",
    "heroku",
    "cloudflare",
  ],

  // Build, deploy, infrastructure
  devops: [
    "docker",
    "ci/cd",
    "github actions",
    "kubernetes",
    "jenkins",
    "pipeline",
    "deployment",
  ],

  // Quality assurance
  testing: [
    "jest",
    "sonarqube",
    "junit",
    "pytest",
    "vitest",
    "cypress",
  ],

  // Game engines
  gamedev: [
    "unity",
    "unreal",
    "godot",
    "construct",
  ],

  // Developer tooling
  tools: [
    "github",
    "gitlab",
    "git",
    "visual studio code",
    "vs code",
    "visual studio",
    "jira",
    "figma",
    "postman",
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

export type CategoryResult = {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  devops: string[];
  testing: string[];
  gamedev: string[];
  tools: string[];
  other: string[];
};

// ─────────────────────────────────────────────────────────────
// CATEGORIZATION FUNCTION
// ─────────────────────────────────────────────────────────────

export function categorizeByKeywords(technologies: string[]): CategoryResult {
  const result: CategoryResult = {
    languages: [],
    frontend: [],
    backend: [],
    database: [],
    cloud: [],
    devops: [],
    testing: [],
    gamedev: [],
    tools: [],
    other: [],
  };

  technologies.forEach((tech) => {
    const lower = tech.toLowerCase().trim();

    // Languages: exact match only to avoid substring collisions
    if (EXACT_LANGUAGES.includes(lower)) {
      result.languages.push(tech);
    } else if (TECH_CATEGORIES.frontend.some((kw) => lower.includes(kw))) {
      result.frontend.push(tech);
    } else if (TECH_CATEGORIES.backend.some((kw) => lower.includes(kw))) {
      result.backend.push(tech);
    } else if (TECH_CATEGORIES.database.some((kw) => lower.includes(kw))) {
      result.database.push(tech);
    } else if (TECH_CATEGORIES.cloud.some((kw) => lower.includes(kw))) {
      result.cloud.push(tech);
    } else if (TECH_CATEGORIES.devops.some((kw) => lower.includes(kw))) {
      result.devops.push(tech);
    } else if (TECH_CATEGORIES.testing.some((kw) => lower.includes(kw))) {
      result.testing.push(tech);
    } else if (TECH_CATEGORIES.gamedev.some((kw) => lower.includes(kw))) {
      result.gamedev.push(tech);
    } else if (TECH_CATEGORIES.tools.some((kw) => lower.includes(kw))) {
      result.tools.push(tech);
    } else {
      result.other.push(tech);
    }
  });

  return result;
}

// ─────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────

export type CategoryStyle = {
  bg: string;
  text: string;
  border: string;
  iconColor: string;
};

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
    cloud: {
      bg: "bg-sky-50",
      text: "text-sky-700",
      border: "border-sky-100",
      iconColor: "text-sky-500",
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

// ─────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────

export const getCategoryIcon = (category: keyof CategoryResult) => {
  switch (category) {
    case "languages":  return DocumentTextIcon;
    case "frontend":   return CpuChipIcon;
    case "backend":    return ServerIcon;
    case "database":   return CommandLineIcon;
    case "cloud":      return CloudIcon;
    case "testing":    return BeakerIcon;
    case "gamedev":    return PuzzlePieceIcon;
    case "devops":     return RocketLaunchIcon;
    case "tools":      return WrenchScrewdriverIcon;
    case "other":      return CodeBracketIcon;
  }
};

// ─────────────────────────────────────────────────────────────
// DISPLAY NAMES
// ─────────────────────────────────────────────────────────────

export const getCategoryDisplayName = (
  category: keyof CategoryResult,
): string => {
  switch (category) {
    case "languages":  return "Languages";
    case "frontend":   return "Frontend";
    case "backend":    return "Backend";
    case "database":   return "Database";
    case "cloud":      return "Cloud";
    case "testing":    return "Testing";
    case "gamedev":    return "Game Development";
    case "devops":     return "DevOps";
    case "tools":      return "Tools";
    case "other":      return "Other";
  }
};