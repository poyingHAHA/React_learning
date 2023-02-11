const { COFFEE_ORDERED } = require("../action/types")

// 2. Reducer部分(店員)
// 先建立initialState
const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload
      }
    default: 
      return state;
  }
}

module.exports = { orderReducer }