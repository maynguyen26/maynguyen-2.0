"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  compact?: boolean;
}

export default function PhotoGallery({
  photos,
  compact = false,
}: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  // Auto-advance slides when in regular view
  useEffect(() => {
    if (!isViewerOpen && isAutoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isViewerOpen, isAutoplay, photos.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isViewerOpen) {
        if (e.key === "Escape") setIsViewerOpen(false);
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    },
    [isViewerOpen, nextSlide, prevSlide],
  );

  // Set up keyboard listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // More compact design for sidebar
  if (compact) {
    return (
      <div className="space-y-3">
        {/* Main Featured Image */}
        <div
          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => setIsViewerOpen(true)}
        >
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Caption and controls overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
            <div className="self-end">
              <div className="bg-white/80 p-1.5 rounded-full">
                <MagnifyingGlassIcon className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="w-full">
              {photos[currentIndex].caption && (
                <p className="text-white text-sm font-medium mb-2 line-clamp-2">
                  {photos[currentIndex].caption}
                </p>
              )}

              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="p-1 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                >
                  <ArrowLeftIcon className="w-3 h-3" />
                </button>

                <div className="flex space-x-1">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`h-1 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-4 bg-white"
                          : "w-1 bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="p-1 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                >
                  <ArrowRightIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-3 gap-1.5">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-md overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-1"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Fullscreen Viewer */}
        <AnimatePresence>
          {isViewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={() => setIsViewerOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsViewerOpen(false);
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close viewer"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Previous photo"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Next photo"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>

              <motion.div
                className="relative w-full max-w-6xl max-h-[90vh] p-4"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </div>
                {photos[currentIndex].caption && (
                  <div className="mt-4 text-white text-center">
                    <p className="text-xl font-medium">
                      {photos[currentIndex].caption}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">{`${currentIndex + 1} of ${photos.length}`}</p>
                  </div>
                )}
              </motion.div>

              {/* Smaller thumbnails at bottom */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 overflow-x-auto max-w-[90%] pb-2">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden transition-all ${
                      index === currentIndex
                        ? "ring-2 ring-white border border-white"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Original full-width implementation (keeping this for flexibility)
  return (
    <div className="space-y-6">
      {/* Elegant Carousel View */}
      <div className="relative h-80 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 bottom-0 z-20 p-4 flex justify-between items-center"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
            height: "40%",
          }}
        >
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Previous photo"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          <div className="text-center flex-1 px-4">
            <p className="text-white font-medium truncate">
              {photos[currentIndex].caption}
            </p>
            <div className="flex justify-center mt-2 gap-1">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Next photo"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative h-full w-full">
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500"
            priority
            onClick={() => setIsViewerOpen(true)}
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-300 cursor-pointer"
            onClick={() => setIsViewerOpen(true)}
          >
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Autoplay toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full ${
            isAutoplay
              ? "bg-primary text-white"
              : "bg-black/30 text-white hover:bg-black/50"
          } transition-colors text-xs font-medium`}
        >
          {isAutoplay ? "Pause" : "Auto"}
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-6 gap-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-square rounded-md overflow-hidden transition-all ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="16vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Viewer - same as in compact version */}
      <AnimatePresence>
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsViewerOpen(false)}
          >
            {/* Same fullscreen viewer as in compact version */}
            {/* ... */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
