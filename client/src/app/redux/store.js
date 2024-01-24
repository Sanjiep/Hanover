import { configureStore } from '@reduxjs/toolkit';
import countSlice, { counterSlice } from './reducerSlice/countSlice';


export default configureStore({
  reducer: {
    count: countSlice
  },
});