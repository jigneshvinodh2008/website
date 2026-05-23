"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

export function ImageCard({ src, alt, index, onClick }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-square w-full cursor-pointer overflow-hidden bg-neutral-900 group"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
    </motion.div>
  );
}
