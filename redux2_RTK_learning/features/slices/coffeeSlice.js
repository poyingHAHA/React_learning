const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfCoffee: 20
}

// 在 createSlice 內 actions 對應的就會是你 reducers 裡面定義的 function name
const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    // 這裡固定會有 sate & action 兩參數，直接對應於上面的 state
    coffeeOrdered: (state, action) => {
      state.numOfCoffee = state.numOfCoffee - action.payload
      return state;
    },
    coffeeRestocked: (state, action) => {
      state.numOfCoffee = state.numOfCoffee + action.payload
      return state;
    }
  }
})

// 這邊就要注意 default 的情況下輸出 reducer， 對應的 action function 會從 coffeeActions 引入
module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;