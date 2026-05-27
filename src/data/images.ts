export interface PortfolioImage {
  src: string;
  alt: string;
  category: "candid" | "fashion" | "farewell" | "silhouette";
}

export const sampleImages: PortfolioImage[] = [
  // Candid
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop", alt: "Candid laugh in the city", category: "candid" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop", alt: "Friends candid moment", category: "candid" },
  { src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop", alt: "Candid street photography", category: "candid" },
  { src: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?q=80&w=1000&auto=format&fit=crop", alt: "Candid wedding moment", category: "candid" },

  // Fashion
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop", alt: "High fashion editorial", category: "fashion" },
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop", alt: "Urban fashion shoot", category: "fashion" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", alt: "Studio fashion", category: "fashion" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", alt: "Fashion portrait", category: "fashion" },

  // Farewell
  { src: "https://images.unsplash.com/photo-1529156069898-49953eb1b5b6?q=80&w=1000&auto=format&fit=crop", alt: "Saying goodbye at train station", category: "farewell" },
  { src: "https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=1000&auto=format&fit=crop", alt: "Friends graduation farewell", category: "farewell" },
  { src: "https://images.unsplash.com/photo-1460361280387-9bc4e393a52e?q=80&w=1000&auto=format&fit=crop", alt: "Walking away silhouette", category: "farewell" },
  { src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1000&auto=format&fit=crop", alt: "Group hug farewell", category: "farewell" },

  // Silhouette
  { src: "/images/silhouette/1000026983.jpg", alt: "Silhouette photo 1", category: "silhouette" },
  { src: "/images/silhouette/1000079834.jpg", alt: "Silhouette photo 2", category: "silhouette" },
  { src: "/images/silhouette/1000079835.jpg", alt: "Silhouette photo 3", category: "silhouette" },
  { src: "/images/silhouette/20230825_181059.jpg", alt: "Silhouette photo 4", category: "silhouette" },
  { src: "/images/silhouette/20230827_181501.jpg", alt: "Silhouette photo 5", category: "silhouette" },
  { src: "/images/silhouette/20240509_185020.jpg", alt: "Silhouette photo 6", category: "silhouette" },
  { src: "/images/silhouette/20251019_181819.jpg", alt: "Silhouette photo 7", category: "silhouette" },
  { src: "/images/silhouette/IMG-20260510-WA0036.jpg", alt: "Silhouette photo 8", category: "silhouette" },
  { src: "/images/silhouette/_MG_5304.jpg", alt: "Silhouette photo 9", category: "silhouette" },
  { src: "/images/silhouette/_MG_7255.JPG", alt: "Silhouette photo 10", category: "silhouette" },
  { src: "/images/silhouette/_MG_7295.JPG", alt: "Silhouette photo 11", category: "silhouette" },
];
