import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../data/categories";

// Creating a slice for category-related state and actions
const categorySlice=createSlice({
    name:"category",
     // Initial state includes a list of categories
    initialState:{
        categories:categories
    },

      // Reducers define how the state changes in response to actions
    reducers:{
        addCategory:(state,action)=>{
            state.categories.push(action.payload)

        }
    }

})
// Exporting the action so it can be dispatched from components
export const{addCategory}=categorySlice.actions
// Exporting the reducer to be used in the Redux store
export default categorySlice.reducer