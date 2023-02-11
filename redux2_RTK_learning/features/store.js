const {configureStore} = require('@reduxjs/toolkit');
const coffeeReducer = require('./slices/coffeeSlice');
const coffeeBeanReducer = require('./slices/coffeeBeanSlice');
const cakeReducer = require('./slices/cakeSlice')

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    coffeeBean: coffeeBeanReducer,
    cake: cakeReducer
  }
})

module.exports = {
  store
}