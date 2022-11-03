export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export type Category = {
  id: string
  name: string
  products: Product[]
}

export interface ProductState {
  categories: Category[]
}
