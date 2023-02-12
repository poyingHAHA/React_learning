import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from './apis/photosApi';

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  // Whenever we create an API, a set of middleware is also created for us.
  // We have to connect that middleware inside the middleware function just as we did previously.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

window.store = store;

setupListeners(store.dispatch);

export { store };
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} from './apis/photosApi';