import { ImageGrid } from "@/components/ImageGrid";
import { sampleImages } from "@/data/images";

export default function Home() {
  // Use a stable sort mechanism so we don't call an impure function on render
  // This will simply rotate or interleave categories predictably
  const mixedImages = [...sampleImages].sort((a, b) => a.src.localeCompare(b.src));

  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-8 sm:px-4 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-widest text-white uppercase text-center sm:text-left">
        Portfolio
      </h1>
      <ImageGrid images={mixedImages} />
    </div>
  );
}
