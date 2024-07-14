import { createContext } from "react";

const ProductContext = createContext;

const ProductProvider = ({children}) =>{
    return(
        <ProductContext.provider value={"shekhar"}>{children}</ProductContext.provider>
    )
}

export default {ProductContext, ProductProvider};