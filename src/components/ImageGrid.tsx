"use client";

import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { LightboxModal, LightboxImage } from "./LightboxModal";

interface ImageGridProps {
  images: LightboxImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <ImageCard
            key={idx}
            src={img.src}
            alt={img.alt}
            index={idx}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
