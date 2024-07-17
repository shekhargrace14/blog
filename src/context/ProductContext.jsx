import { createContext, useReducer } from "react";

import products from "../data/blogData.json"
// import products from "../data/blogDataCopy.json"
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();
const initialState = {
    products:products
}
const ProductProvider = ({children}) =>{
    const [state,dispatch] = useReducer(ProductReducer, initialState)
    console.log(state.products)
    return(
        <ProductContext.Provider value={{state,dispatch}}>{children}</ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider};