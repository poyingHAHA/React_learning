// action type
const COFFEE_ORDERED = 'COFFEE_ORDERED';

// 建立action
const orderCoffeeByNum = (num) => {
  return {
    type: COFFEE_ORDERED,
    payload: num
  }
}