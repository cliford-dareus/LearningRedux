import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',

        // if the API needs an api key 
        // prepareHeaders(headers){
        //     headers.set('x-api-key', API-KEY)
        //     return headers;
        // }
    }),
    endpoints(builder) {
        return ({
            getPosts: builder.query({
                query(user = 2){
                    return `/posts?userId=${user}`
                }
            }),
            getComments: builder.query({
                query(){
                    return `/comments`
                }
            })
        })
    }
});

export const { useGetPostsQuery, useGetCommentsQuery } = apiSlice;