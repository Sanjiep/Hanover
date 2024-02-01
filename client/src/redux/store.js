import { configureStore } from '@reduxjs/toolkit';
import countSlice, { counterSlice } from './reducerSlice/countSlice';
import boxSlice from './reducerSlice/boxSlice';
import userSlice from './reducerSlice/userSlice';
import logger from 'redux-logger';


export default configureStore({
  reducer: {
    count: countSlice,
    box: boxSlice,
    user: userSlice
  },
  middleware: ()=>[logger]
});