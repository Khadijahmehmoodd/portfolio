export type BlogPost = {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body: any; // Or use PortableTextBlock[] if typed
};
