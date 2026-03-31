import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from './types'


const BASE_URL = 'https://fakestoreapi.com/'


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getSingleProduct: builder.query<Product, number>({
        query : (id) => `products/${id}`,

    }),

    addProduct: builder.mutation({
        query: (product)=>({
            url: '/products',
            method: 'POST',
            body: product
        }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
        query: ({id, ...product})=>({
            url: `/products/${id}`,
            method: 'PUT',
            body: product
        }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
        query: ({id})=>({
            url: `/products/${id}`,
            method: 'DELETE'
        }),
      invalidatesTags: ['Products'],
    }),
  })
})


export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi