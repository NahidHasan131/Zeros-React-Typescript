import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product, ProductsResponse, Category } from './types'

const BASE_URL = 'https://dummyjson.com/'



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, { limit: number; skip: number } | void>({
      query: (params) =>
        params ? `products?limit=${params.limit}&skip=${params.skip}` : 'products',
      providesTags: ['Products'],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => 'products/categories',
    }),
    getSingleProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    addProduct: builder.mutation<Product, Omit<Product, 'id'>>({
      query: (product) => ({
        url: 'products/add',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation<Product, Partial<Product> & { id: number }>({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<{ id: number }, { id: number }>({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi
