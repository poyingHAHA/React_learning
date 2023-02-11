const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfCoffeeBean: 20
}

const coffeeBeanSlice = createSlice({
  name: 'coffeeBean',
  initialState,
  reducers: {
    coffeeBeanOrdered: (state, action) => {
      state.numOfCoffeeBean = state.numOfCoffeeBean - action.payload
      return state;
    },
    coffeeBeanRestocked: (state, action) => {
      state.numOfCoffeeBean = state.numOfCoffeeBean + action.payload
      return state;
    },
  }
})

module.exports = coffeeBeanSlice.reducer;
module.exports.coffeeBeanActions = coffeeBeanSlice.actions;
