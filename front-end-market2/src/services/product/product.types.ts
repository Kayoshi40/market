export const PRODUCTS = 'product'

export type  TypeProductData = {
  name: string
  price: number
  description?: string
  images: string[]
  categoryId: number
  createdAt: Date
  updatedAt: Date
}

export type TypeProductDataFilters = {
  sort?: EnumProductSort
  searchTerm?: string | number
  page?: string | number
  perPage?: string | number
}

export enum EnumProductSort {
  HUGH_PRICE ='high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}
