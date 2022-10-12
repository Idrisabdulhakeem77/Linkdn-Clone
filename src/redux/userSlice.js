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

export const signOutApi = () => {
   return dispatch => {
     signOut(auth)
      .then (payload => dispatch(console.log("dis")))
      .catch(err => console.log(err))
   }
}

export const postArticleApi = (payload) => {
     return (dispatch) => {
        if(payload !== "") {
           const storageRef = ref(storage , `images/${payload.image.name}`)

           const upload = uploadBytesResumable( storageRef)

           upload.on('state_changed' , (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log(`Process ${progress}`)
           }, 
           (error) => {
             // Handle unsuccessful uploads
           }, 
           () => {
        
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            })

           
        }
     }
}

export const { signIn}  = userSlice.actions


// export const {signInApi } = counterSlice.actions

// export default counterSlice.reducer


export default userSlice.reducer

