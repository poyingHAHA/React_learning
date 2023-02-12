import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker'

const photosApi = createApi({
  // this where the reducer is going to be assigned inside of our global state object
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchPhotos: builder.query({
        // the last argument referred to as in the documentation is going to be whatever you had provided to your query hook.
        // So in our case, it's the album and I'm going to label the argument as such.
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return {
              type: 'Photo', 
              id: photo.id
            }
          })
          tags.push({type: 'AlbumPhoto', id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id, 
            },
            method: 'GET'
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{type: 'AlbumPhoto', id: album.id}]
        },
        query: (album) => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true)
            }
          }
        }
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photo', id: photo.id}]
        },
        query: (photo) => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`
          }
        }
      }),
    }
  }
})

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} = photosApi;

export { photosApi };