import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice"

const AppStore = configureStore({

    reducer:{
        Products: ProductReducer,

    }
})

export default AppStore;