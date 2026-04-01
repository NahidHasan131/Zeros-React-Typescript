export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  thumbnail: string
  images: string[]
  rating: number
  stock: number
  brand?: string
  discountPercentage?: number
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Category {
  slug: string
  name: string
  url: string
}