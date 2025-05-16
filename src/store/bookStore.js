import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./bookSlice"
import categoryReducer from "./categorySlice"

// Creating and configuring the Redux store
const bookStore=configureStore({
    reducer:{
        book:bookReducer,// State slice for book-related data
        category:categoryReducer // State slice for category-related data
    }

})
// Exporting the configured store to be used in the React application
export default bookStore;
