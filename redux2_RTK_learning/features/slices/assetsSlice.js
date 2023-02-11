const { createSlice } = require("@reduxjs/toolkit");
const { coffeeOrdered, coffeeRestocked } = require('./coffeeSlice').coffeeActions;

const initialState = {
  money: 1000,
}

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  // 其他的slice reducer function來影響這裡的state
  extraReducers: (builder) => {
    builder
    .addCase(coffeeOrdered, (state, action) => {
      state.money = state.money + action.payload.money
      return state;
    })
    .addCase(coffeeRestocked, (state, action) => {
      state.money = state.money - action.payload.money
      return state;
    })
  }
})

module.exports = assetsSlice.reducer;
module.exports.cakeActions = assetsSlice.actions;