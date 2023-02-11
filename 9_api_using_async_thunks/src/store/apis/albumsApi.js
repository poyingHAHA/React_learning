import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      // adding a pause for testing, remove for production
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        // whenever you define provides tags as a function,
        // that function is going to be called automatically with a couple of different arguments.
        providesTags: (result, error, user) => {
          const tags = result.map(album => {
            return { type: 'Album', id: album.id }
          });
          tags.push({ type: 'UsersAbums', id: user.id })
          return tags;
        },
        query: (user) => {
          return {
            url: "albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          console.log(album);
          return [{ type: 'Album', id: album.id }];
        },
        query: (album) => {
          return {            
            method: "DELETE",
            url: `/albums/${album.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
