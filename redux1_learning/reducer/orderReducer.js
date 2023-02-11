const { COFFEE_ORDERED, COFFEE_RESTOCKED } = require("../action/types")

// 2. Reducer部分(店員)
// 先建立initialState
const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
  assets: 1000,
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload.qty,
        assets: state.assets + action.payload.income
      }
    case COFFEE_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        numOfCoffee: state.numOfCoffee + action.payload.qty,
        assets: state.assets - action.payload.pay
      }
    default: 
      return state;
  }
}

module.exports = { orderReducer }