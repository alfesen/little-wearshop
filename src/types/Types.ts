export type Nav = {
  show: boolean
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[] | string;
}

export type Category = {
  id: string
  name: string
  products: Product[]
}

export interface ProductState {
  categories: Category[],
  currency: string
}

export interface State {
  products: ProductState,
  nav: Nav
}
