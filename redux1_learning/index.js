const { orderCoffee, orderCoffeeBean, orderCake } = require('./action/order');
const { restockCoffee, restockCoffeeBean, restockCake } = require('./action/restock');
const { fetchPokemons } = require('./action/pokemon');
const { store } = require('./store');

// 拿取initial state
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// // 讓我們來試看看點餐
// store.dispatch(orderCoffee(2, 20))
// // 測試補咖啡
// store.dispatch(restockCoffee(20, 10))
// // 讓我們來試看看買咖啡豆
// store.dispatch(orderCoffeeBean(3, 15))
// // 測試補咖啡豆
// store.dispatch(restockCoffeeBean(10, 10))
// // 試看看買蛋糕
// store.dispatch(orderCake(2, 30))
// // 測試補蛋糕
// store.dispatch(restockCake(5, 25))

store.dispatch(fetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`))

// unsubscribe()

