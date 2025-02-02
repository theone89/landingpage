export type Category = {
  name: string;
  slug: string;
  subCategories?: {
    name: string;
    slug: string;
  }[];
};
