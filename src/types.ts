
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
}

export interface SocialImage {
  id: string;
  url: string;
  alt: string;
}
