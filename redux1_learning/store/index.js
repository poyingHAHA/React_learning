const { createStore, applyMiddleware } = require("redux");
const { reducers } = require("../reducer");
const thunk = require("redux-thunk").default;
const { composeWithDevTools } = require("redux-devtools-extension");

// 這裡就看還有沒有額外的 middleware 要新增，有的話就加
const middleware = [thunk];
const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(...middleware))
)

module.exports = {
  store,
}