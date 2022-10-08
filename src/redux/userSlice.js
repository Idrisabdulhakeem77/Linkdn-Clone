import { createSlice } from '@reduxjs/toolkit'
import {provider , auth} from '../firebase'
import thunk from 'redux-thunk';
import {  signInWithPopup  } from "firebase/auth";

const initialState = {
  user : null
}



export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     signInApi : ( state , action) => {
        signInWithPopup(auth , provider)
      .then(data => console.log(action))
    
      .catch((err) => console.log(err))
    
    }
  },
  middleware : () => {
     thunk()
  }
})


export const {signInApi } = counterSlice.actions

export default counterSlice.reducer
