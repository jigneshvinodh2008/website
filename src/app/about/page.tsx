import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12 md:flex-row md:items-center">
        <div className="relative aspect-square w-full max-w-md mx-auto md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1554046920-90dc5823ba0a?q=80&w=1000&auto=format&fit=crop"
            alt="Jignesh Vinodh Portrait"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="mb-6 text-4xl font-bold tracking-widest text-white uppercase">
            About Me
          </h1>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              Hi, I&apos;m Jignesh Vinodh. I&apos;m a passionate photographer specializing in candid,
              fashion, and silhouette photography. I believe in capturing moments that tell
              a story, embracing the raw emotion and cinematic mood in every frame.
            </p>
            <p>
              My style is heavily inspired by moody, cinematic color grading and minimalist
              compositions. Whether it&apos;s the energy of a fashion shoot, the quiet goodbye
              of a farewell, or the stark contrast of a silhouette, I strive to create
              images that leave a lasting impression.
            </p>
            <p>
              Based out of the city, always looking for the next adventure and the perfect
              light.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
