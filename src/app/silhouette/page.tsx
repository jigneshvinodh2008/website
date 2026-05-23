import { ImageGrid } from "@/components/ImageGrid";
import { sampleImages } from "@/data/images";

export default function SilhouettePage() {
  const images = sampleImages.filter((img) => img.category === "silhouette");

  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-8 sm:px-4 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-widest text-white uppercase text-center sm:text-left">
        Silhouette
      </h1>
      <ImageGrid images={images} />
    </div>
  );
}
