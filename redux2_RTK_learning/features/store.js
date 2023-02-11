const {configureStore} = require('@reduxjs/toolkit');
const coffeeReducer = require('./slices/coffeeSlice');

const store = configureStore({
  reducer: {
    coffee: coffeeReducer
  }
})

module.exports = {
  store
}