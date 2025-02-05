export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  timestamp: string;
  lastUpdated: string;
  thumbnail: string;
  image: string;
  readingTime: string;
  category: string;
  subCategory: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  author: {
    name: string;
    avatar: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  status: "published" | "draft";
  isFeatured: boolean;
  featuredOrder?: number;
  engagement: {
    views: number;
    likes: number;
    commentsCount: number;
  };
};
