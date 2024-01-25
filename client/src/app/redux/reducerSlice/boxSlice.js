import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  width:100,
  height:100,
  background:'black',
  borderRadius:0,
  borRadius:0,
}


export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changeWidthIncre: (state, action) => {
      state.width++
  },
    changeWidthDecre: (state, action) => {
      state.width--
  },
  changeBgColor: (state, action) =>{
    state.background = action.payload
  },
  changeRadius: (state, action) =>{
   
  },
  changeShape: (state, action) =>{
     state.borderRadius = action.payload
    if(state.borderRadius === 50){
      state.borderRadius = 0
    }else{
      state.borderRadius = 50
    }
  },
}});

// this is for dispatch
export const { changeWidthIncre, changeWidthDecre, changeBgColor, changeRadius, changeShape } = boxSlice.actions;

// this is for configureStore
export default boxSlice.reducer;