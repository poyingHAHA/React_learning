const axios = require('axios');
const { POKEMON_PENDING, POKEMON_SUCCESSED, POKEMON_FAILED } = require('./types');

// 這裡為單純修改 boolean 值
const fetchPokeRequest = () => {
  return {
    type: POKEMON_PENDING
  }
}

// 這裡是成功回傳，要將資料存入 initialState
const fetchPokeSuccess = pokemons => {
  return {
    type: POKEMON_SUCCESSED,
    payload: pokemons
  }
}

// 這裡是錯誤訊息的處理
const fetchPokeFailure = error => {
  return {
    type: POKEMON_FAILED,
    payload: error
  }
}

const fetchPokemons = (url) => {
  return function(dispatch) {
    // 在redux-thunk安裝之後可以讓你回傳 function 並保留 dispatch 的功能
    // 可以直接在 return function 內做使用。
    dispatch(fetchPokeRequest())
    axios
      .get(url)
      .then(response => {
        const pokesData = response.data
        dispatch(fetchPokeSuccess(pokesData))
      })
      .catch(error => {
        dispatch(fetchPokeFailure(error.message))
      })
  }
}

module.exports = {
  fetchPokeRequest,
  fetchPokeSuccess,
  fetchPokeFailure,
  fetchPokemons
}