import { createSlice   } from '@reduxjs/toolkit'
import {provider , auth} from '../firebase'
import {  signInWithPopup  } from "firebase/auth";

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

// export const counterSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: userReducer
//   },
// )


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      signIn : (state , action) => {
          return { ...state , user : action.payload}
      }
  }
  },
)

export const signInApi=  () => {
  return dispatch => {
     signInWithPopup(auth , provider)
     .then(data =>  dispatch(signIn(data.user)) )
     .catch((err) => console.log(err))
  }
}

export const signOut = () => {
   return dispatch => {
      auth.signOut()
      .then (payload => dispatch(signIn(null)))
      .catch(err => console.log(err))
   }
}

export const { signIn}  = userSlice.actions


// export const {signInApi } = counterSlice.actions

// export default counterSlice.reducer


export default userSlice.reducer

