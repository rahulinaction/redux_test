import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Constants from '../../constants/constants';
import { Post} from '../../types/Post';
//@Creating api slice for fetching all posts as well as specific post
export const apiPost = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: Constants.apiUrl,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    })
  }),
});
export const { useGetPostsQuery, useGetPostByIdQuery } = apiPost;