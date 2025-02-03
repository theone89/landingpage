export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  image: string;
  readingTime: string;
  category: string;
  subCategory?: string;
  tags: string[];
};
