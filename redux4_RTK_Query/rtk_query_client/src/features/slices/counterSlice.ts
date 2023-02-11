import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState{
  count: number;
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 按一下-1
    minus: (state) => {
      state.count--
      return state;
    },
    // 按一下+1
    plus: (state) => {
      state.count ++
      return state
    },
    // 直接 setting
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
      return state
    }
  }
})

export const { minus, plus, setCount } = counterSlice.actions
// 在 typescript 裏面型別被加強了，所以剛剛才會在 store.ts 裏面處理 RootState
export const selectCounter = (state: RootState) => state.counter

export default counterSlice.reducer;