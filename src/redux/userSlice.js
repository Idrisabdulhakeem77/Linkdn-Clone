import { createSlice   } from '@reduxjs/toolkit'
import {provider , auth, storage } from '../firebase'
import {  signInWithPopup , signOut} from "firebase/auth";
import { ref  , uploadBytesResumable , getDownloadURL} from 'firebase/storage';

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

// export const signOutApi = () => {
//    return dispatch => {
//      signOut(auth)
//       .then (payload => console.log("dis"))
//       .catch(err => console.log(err))
//    }
// }


const testShit = (data) =>  {
     console.log(data)
}

export const signOutApi = () => {
     return dispatch => {
      signOut(auth).then(() => {
          dispatch(signIn(null))
      }).catch((error) => {
         console.log(error)
      });
     }
}

export const { signIn }  = userSlice.actions


// export const {signInApi } = counterSlice.actions

// export default counterSlice.reducer


export default userSlice.reducer

