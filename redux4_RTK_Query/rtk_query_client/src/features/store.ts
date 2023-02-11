import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import pointSlice from "./slices/pointSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    point: pointSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store;