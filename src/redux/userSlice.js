import { createSlice   } from '@reduxjs/toolkit'
import {provider , auth, storage } from '../firebase'
import {  getAuth, signInWithPopup , signOut} from "firebase/auth";
import { ref  , uploadBytesResumable , getDownloadURL} from 'firebase/storage';

export const initialState = {
  articles : [] ,
  user : null
}

// export const setUser =  (payload) =>  ({
//     type : "SET_USER",
//     user : payload  
//   })

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

// export const articleSlice =  createSlice({
//     name : "articles",
//     initialState ,
//     reducers : {
//          getArticles : ( state , action) => {
//             return { ...state , articles : action.payload}
//          }
//     }

// })

export const signInApi=  () => {
  return dispatch => {
     signInWithPopup(auth , provider)
     .then(data =>  dispatch(signIn(data.user)) )
     .catch((err) => console.log(err))
  }
}

export const signOutApi =  () => {
  return dispatch => {
    signOut(auth).then(() => {
       dispatch(signIn(null))
    }).catch((error) => {
        console.log(error)
    });

  }
  
}



export const { signIn }  = userSlice.actions


export default userSlice.reducer

