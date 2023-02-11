const {configureStore} = require('@reduxjs/toolkit');
const coffeeReducer = require('./slices/coffeeSlice');
const coffeeBeanReducer = require('./slices/coffeeBeanSlice');
const cakeReducer = require('./slices/cakeSlice')
const assetsReducer = require('./slices/assetsSlice');
const pokemonReducer = require('./slices/pokemonSlice');

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    coffeeBean: coffeeBeanReducer,
    cake: cakeReducer,
    assets: assetsReducer,
    pokemon: pokemonReducer
  }
})

module.exports = {
  store
}