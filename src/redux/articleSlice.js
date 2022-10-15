import { initialState } from "./userSlice"
import { createSlice } from "@reduxjs/toolkit"

const articleSlice =  createSlice({
    name : "articles",
    initialState ,
    reducers : {
         getArticles : ( state , action) => {
             return {...state , articles : action.payload}
         }
    }

})





export const { getArticles }  = articleSlice.actions


export default articleSlice.reducer


