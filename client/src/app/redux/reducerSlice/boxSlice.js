import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  width:100,
  height:100,
  background:'red',
  borRadius:0,
}


export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    inWidth: (state, action) => {
      state.width++
  },
    deWidth: (state, action) => {
      state.width--
  },
  changeBgColor: (state, action) =>{
    state.background = action.payload
  },
  changeRadius: (state, action) =>{
    state.borRadius = action.payload
  }
}});

// this is for dispatch
export const { inWidth, deWidth, changeBgColor, changeRadius } = boxSlice.actions;

// this is for configureStore
export default boxSlice.reducer;