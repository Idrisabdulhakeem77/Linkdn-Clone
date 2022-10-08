import { createSlice } from '@reduxjs/toolkit'
// import { provider , }
// import {  signInWithPopup  } from "firebase/auth";

const initialState = {
  value: 0,
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export  default counterSlice.reducer 

// const INTILAL_STATE =  {
//       user: {
//          name : "idris",
//          surname : "Abdulhakeem"
//       }
// }


// const userSlice = createSlice({
//     name : "user" ,
//     INTILAL_STATE ,
//     reducers : {
//          signInApi : () => {
//              return (dispatch) => {
//                 signInWithPopup(auth , provider)
//                 .then( (data) => console.log(data)) 
//                 .catch((err) => console.log(err))

//              }
//          }
//     }
// })

// export const { signInApi } = userSlice.actions

// console.log()
// export default userSlice.reducer 