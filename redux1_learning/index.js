// 1. action部分(在店內可以做的事 ex.喝咖啡、買咖啡...)
// action type
const COFFEE_ORDERED = 'COFFEE_ORDERED';

// 建立Action
const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED,
    payload: 1
  }
}
// 除上述function的方法以外也可以直接帶入object
const orderCoffeeObj = {
  type: COFFEE_ORDERED,
  payload: 1
}
// 透過function還可以帶參數來設定，如下
const orderCoffeeByNum = (num) => {
  return {
    type: COFFEE_ORDERED,
    payload: num
  }
}

// 2. Reducer部分(店員)
// 先建立initialState
const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
}

const reducer = (state = initialState, action) => {
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

// 3. store部分
const createStore = require('redux').createStore;
// 建立store
const store = createStore(reducer)
// 拿取initial state
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// 讓我們來試看看點餐
store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))
unsubscribe()

