import { configureStore, createListenerMiddleware} from '@reduxjs/toolkit'
import { createReducer  , createAction} from '@reduxjs/toolkit'
import { provider , auth } from '../firebase'
import {  signInWithPopup  } from "firebase/auth";


const initialState = {
     user : null
}


export const signInApi=  () => {
     return dispatch => {
        signInWithPopup(auth , provider)
        .then(data =>  dispatch(signIn(data.user)) )
        .catch((err) => console.log(err))
     }
}

export const signOut = () => {
      return (dispatch) => {
          auth.signOut().then( dispatch(signIn(null)))
      }
     
}


export const signIn = (payload) => {
   return {
       type : "SET_USER",
       user : payload
 }     
}


const reducer =  (state = initialState , action ) => {
    switch(action.type) {
       case "SET_USER" : 
        return { ...state , user : action.user}

      default : 
         return state
    }
}




//store
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['SET_USER'],
      },
    }),
})

export default store