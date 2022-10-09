import { createSlice   } from '@reduxjs/toolkit'
import {provider , auth} from '../firebase'
import {  signInWithPopup  } from "firebase/auth";
import todosReducer from './action';

const initialState = {
  user : null
}

export const setUser =  (payload) =>  ({
    type : "SET_USER",
    user : payload  
})

const userReducer = ( state , action) => {
    switch(action.type){
       case "Set_User" :
          return { ...state , user: action.payload}
      
      default :
         return state
    }
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: userReducer
  },
)


// export const {signInApi } = counterSlice.actions

export default counterSlice.reducer


export const signInApi   =  () => {
  signInWithPopup(auth , provider)
.then(data => { (setUser(data))})
.catch((err) => console.log(err))
}