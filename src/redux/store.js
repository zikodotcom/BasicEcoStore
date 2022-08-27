import { configureStore } from "@reduxjs/toolkit";
import home  from "./homeSlice";
import product  from "./productsSlice";
import slicePopUp from './popupSlice'


export const store = configureStore({
    reducer:{
        home: home,
        product: product,
        pop: slicePopUp
    }
})