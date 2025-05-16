import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/books";

// Creating a Redux slice for managing book-related stat
const bookSlice=createSlice({
    name:"book",
    initialState:{
        books:books
    },
    reducers:{
         // Reducer function to add a new book to the state
        addBook:(state,action)=>{
            state.books.push(action.payload)
        }
    }

})
// Exporting the action so it can be dispatched from components
export const {addBook}=bookSlice.actions
//Exporting the reducer to be included in the Redux store
export default bookSlice.reducer;