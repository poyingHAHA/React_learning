import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { minus, plus } from "./counterSlice";

interface PointState{
  pt: number
}

const initialState: PointState ={
  pt: 0
}

const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {},
	// 綁定 counter 的 actions 與之前的做法一致
  extraReducers: (builder) => {
    builder
    .addCase(minus, (state) => {
      state.pt += 2
      return state
    })
    .addCase(plus, (state) => {
      state.pt += 3
      return state
    })
  }
})

export const selectPoint = (state: RootState) => state.point

export default pointSlice.reducer;