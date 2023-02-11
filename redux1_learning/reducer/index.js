// 使用 redux 的 combineReducers function 來整合所有定義好的 reducer 檔案
const { combineReducers } = require("redux");
const { orderReducer } = require('./orderReducer')

const reducers = combineReducers({
  orderReducer,
})

module.exports = {
  reducers
}