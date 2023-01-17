import {configureStore} from 'reduxjs/toolkit';
import { usersReducer } from './slices/userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

