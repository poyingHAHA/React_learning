const { COFFEE_ORDERED, COFFEEBEAN_ORDERED, CAKE_ORDERED } = require("./types")

// 透過function還可以帶參數來設定，如下
const orderCoffee = (qty, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      qty: qty,
      income: income
    }
  }
}

const orderCoffeeBean = (qty, income) => {
  return {
    type: COFFEEBEAN_ORDERED,
    payload: {
      qty: qty,
      income: income
    }
  }
}

const orderCake = (qty, income) => {
  return {
    type: CAKE_ORDERED,
    payload: {
      qty: qty,
      income: income
    }
  }
}

module.exports = {
  orderCoffee,
  orderCoffeeBean,
  orderCake
}