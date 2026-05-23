"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  const handlePrevious = useCallback(() => {
    if (!isFirst) onNavigate(currentIndex - 1);
  }, [currentIndex, isFirst, onNavigate]);

  const handleNext = useCallback(() => {
    if (!isLast) onNavigate(currentIndex + 1);
  }, [currentIndex, isLast, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrevious, handleNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 text-white/70 transition-colors hover:text-white sm:right-8 sm:top-8"
          aria-label="Close lightbox"
        >
          <X className="h-8 w-8" />
        </button>

        <div
          className="relative flex h-full w-full max-w-7xl items-center justify-center p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={isFirst}
            className="absolute left-2 sm:left-4 z-50 p-2 text-white/70 transition-colors hover:text-white disabled:opacity-30 disabled:hover:text-white/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>

          {/* Image */}
          <div className="relative h-full w-full max-h-[85vh] sm:max-h-[90vh]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isLast}
            className="absolute right-2 sm:right-4 z-50 p-2 text-white/70 transition-colors hover:text-white disabled:opacity-30 disabled:hover:text-white/70"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
