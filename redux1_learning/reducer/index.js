// 使用 redux 的 combineReducers function 來整合所有定義好的 reducer 檔案
const { combineReducers } = require("redux");
const { assetsReducer } = require("./assetsReducer");
const { cakeReducer } = require("./cakeReducer");
const { coffeeBeanReducer } = require("./coffeeBeanReducer");
const { coffeeReducer } = require("./coffeeReducer");
const { pokemonReducer } = require("./pokemonReducer");

const reducers = combineReducers({
  coffee: coffeeReducer,
  coffeeBean: coffeeBeanReducer,
  cake: cakeReducer,
  money: assetsReducer,
  pokemon: pokemonReducer
})

module.exports = {
  reducers
}