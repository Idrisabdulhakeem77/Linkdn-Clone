import { configureStore, createListenerMiddleware} from '@reduxjs/toolkit'
import { createReducer  , createAction} from '@reduxjs/toolkit'
import { provider , auth } from '../firebase'
import {  signInWithPopup  } from "firebase/auth";


const initialState = {
     user : null
}

// // Action
// export const addTodo = createAction('ADD_TODO')
// addTodo({ text: 'Buy milk' })
// // {type : "ADD_TODO", payload : {text : "Buy milk"}})

// //Reducer
// const todosReducer = createReducer([], (builder) => {
//     builder
//       .addCase(addTodo.type , (state, action) => {
//         // "mutate" the array by calling push()
//         console.log(state , action)
//         state.push(action.payload)
//       })
//       .addCase('TOGGLE_TODO', (state, action) => {
//         const todo = state[action.payload.index]
//         // "mutate" the object by overwriting a field
//         todo.completed = !todo.completed
//       })
//       .addCase('REMOVE_TODO', (state, action) => {
//         // Can still return an immutably-updated value if we want to
//         return state.filter((todo, i) => i !== action.payload.index)
//       })
//   })

// // export const signIn = createAction("SET_USER")

//   const userReducer = createReducer(initialState , (builder) => {
//      builder.addCase( signIn.type , (state , action) => {
//          console.log(state )
//      })
//   })


export const signInApi= () => {
     return dispatch => {
        signInWithPopup(auth , provider)
        .then(data =>  dispatch(signIn(data.user)) )
        .catch((err) => console.log(err))
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
  reducer: reducer
})

export default store