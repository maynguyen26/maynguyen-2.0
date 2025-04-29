"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Don't show navigation on landing page
  if (pathname === "/") return null;

  const navItems = [
    { href: "/explore", label: "Explore", icon: SparklesIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/experience", label: "Experience", icon: BriefcaseIcon },
    { href: "/projects", label: "Projects", icon: CodeBracketIcon },
    { href: "/connect", label: "Connect", icon: EnvelopeIcon },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="py-4 px-6 flex justify-between items-center bg-card sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-700">
      {/* Logo with pastel gradient */}
      <Link href="/explore" className="relative group">
        <span
          className="text-lg font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent
                       hover:from-primary-dark hover:to-accent transition-all duration-300"
        >
          MAY NGUYEN
        </span>
        <span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent
                       group-hover:w-full transition-all duration-300"
        ></span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden z-50 p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <XMarkIcon className="w-5 h-5" />
        ) : (
          <Bars3Icon className="w-5 h-5" />
        )}
      </button>

      {/* Desktop navigation - Pastel Pill Style */}
      <div className="hidden md:flex items-center space-x-1 bg-primary/5 rounded-full px-1.5 py-1 backdrop-blur-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-primary/10"
              }`}
            >
              <item.icon
                className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="absolute top-full left-0 right-0 bg-card shadow-lg md:hidden p-4 border-t border-gray-200
                     dark:border-gray-700"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-3 rounded-lg transition-all duration-150 ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-primary/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          isActive
                            ? "text-primary"
                            : "text-gray-500 dark:text-gray-400"
                        } mr-3`}
                      />
                      <span>{item.label}</span>

                      {/* Active indicator with your theme colors */}
                      {isActive && (
                        <motion.div className="ml-auto flex items-center">
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-primary-dark mr-1"
                            layoutId="dot1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-primary mr-1"
                            layoutId="dot2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.1 } }}
                          />
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                            layoutId="dot3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.2 } }}
                          />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
