export const PRODUCTS = 'product'

export type  TypeProductData = {
  name: string
  price: number
  description?: string
  images: string[]
  categoryId: number
}

export type TypeProductDataFilters = {
  sort?: EnumProductSort
  searchTerm?: string
  page?: string | number
  perPage?: string | number
}

export enum EnumProductSort {
  HUGH_PRICT ='high-price',
  LOW_PRICT = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}
