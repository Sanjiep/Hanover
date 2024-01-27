import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
  token:'',
  isLogIn: false,

}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails: (state, action) =>{
        const {userDetails, token} = action.payload
        return{
            ...state,
            userDetails,
            token,
            isLogIn:"true"
        }
    }
}});

// this is for dispatch
export const { addUserDetails } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;