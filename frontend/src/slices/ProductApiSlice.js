import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ pageNumber }) => ({
                url: PRODUCTS_URL,
                params: {
                    pageNumber,
                },
            }),
            keepUnuserdDataFor: 5,
            providesTags: ['Product'],
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnuserdDataFor: 5
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product'], // stop caching products (to have fresh data)
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Product'], // stop caching products (to have fresh data)
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOADS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            providesTags: ['Product'], // stop caching products (to have fresh data)
        }),
    }),
});

export const { 
    useGetProductsQuery, 
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useUploadProductImageMutation
} = productsApiSlice;