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
  { src: "https://images.unsplash.com/photo-1502159212845-f31a19546a5d?q=80&w=1000&auto=format&fit=crop", alt: "Silhouette at sunset", category: "silhouette" },
  { src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000&auto=format&fit=crop", alt: "Mountain climber silhouette", category: "silhouette" },
  { src: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=1000&auto=format&fit=crop", alt: "Couple silhouette", category: "silhouette" },
  { src: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1000&auto=format&fit=crop", alt: "Cityscape silhouette", category: "silhouette" },
];
