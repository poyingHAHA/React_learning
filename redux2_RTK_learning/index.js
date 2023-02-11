const { store } = require('./features/store');
const coffeeActions = require('./features/slices/coffeeSlice').coffeeActions;
const coffeeBeanActions = require('./features/slices/coffeeBeanSlice').coffeeBeanActions;
const cakeActions = require('./features/slices/cakeSlice').cakeActions
const fetchPokes = require('./features/slices/pokemonSlice').fetchPokes;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()));

store.dispatch(coffeeActions.coffeeOrdered({qty: 1, money: 10}));
store.dispatch(coffeeActions.coffeeOrdered({qty: 4, money: 40}));
store.dispatch(coffeeActions.coffeeRestocked({qty: 10, money: 20}));
store.dispatch(coffeeBeanActions.coffeeBeanOrdered({qty: 2, money: 10}));
store.dispatch(coffeeBeanActions.coffeeBeanRestocked({qty: 5, money: 5}));
store.dispatch(cakeActions.cakeOrdered({qty: 3, money: 45}));
store.dispatch(cakeActions.cakeRestocked({qty: 6, money: 30}));
store.dispatch(fetchPokes(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`))

// unsubscribe();