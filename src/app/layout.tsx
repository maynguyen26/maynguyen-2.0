import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "May Nguyen — Software Developer",
  description:
    "Full-stack software developer based in Winnipeg, MB. Specializing in React, Next.js, .NET, and mobile development.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
