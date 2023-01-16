import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      state.push(action.payload);
    },
    removeSong(state, action){
      // 
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
})

const startState = store.getState();
console.log(JSON.stringify(startState));

store.dispatch({
  type: "song/addSong",
  payload: "New Song!!!"
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));