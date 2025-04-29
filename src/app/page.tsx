"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingPage() {
  const images = [
    "/images/background/image1.jpg",
    "/images/background/image2.jpg",
    "/images/background/image3.jpg",
    "/images/background/image4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          transition: "background-image 0.5s ease, background-color 0.5s ease",
        }}
      ></div>

      {/* Left side gradient overlay*/}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-30 text-white w-full h-full flex items-center">
        <div
          className="px-8 sm:px-12 md:px-16 lg:px-24
                        w-full md:w-3/5 lg:w-1/2
                        text-center md:text-left"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            MAY NGUYEN
          </h1>
          <div
            className="space-y-2 mb-8 md:mb-12"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
          >
            <p className="text-lg md:text-xl">
              University of Guelph, Computer Science Major
            </p>
            <p className="text-lg md:text-xl">
              Gryphons Varsity Ultimate Captain
            </p>
            <p className="text-lg md:text-xl">Aspiring Software Developer</p>
          </div>
          <Link
            href="/explore"
            className="inline-block bg-accent text-white px-6 py-2 md:px-8 md:py-3 font-medium hover:bg-accent-dark transition-all rounded-md shadow-md"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}
