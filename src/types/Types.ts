export type Nav = {
  show: boolean
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
}

export type Category = {
  id: string
  name: string
  products: Product[]
}

export type CartItem = {
  title: string
  amount: number
  price: number
}

export interface ProductState {
  categories: Category[]
  products: Product[]
}

export interface BackdropState {
  backdrop: boolean
}

export interface Rates {
  USD: number
  EUR: number
  GBP: number
  JPY: number
  PLN: number
  RUB: number
}

export interface CurrencyState {
  curs: string[]
  rates: any
  show: boolean
  currencySymbol: string
}

export interface CartState {
  cartItems: CartItem[],
  show: boolean
}

export interface State {
  products: ProductState
  nav: Nav
  currencies: CurrencyState
  cart: CartState,
  backdrop: BackdropState
}
