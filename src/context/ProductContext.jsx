import { createContext, useEffect, useReducer, useState } from "react";


import ProductReducer from "./ProductReducer";
const ProductContext = createContext();

const initialState = {
    products: []
}

const ProductProvider = ({children}) =>{

    const [state,dispatch] = useReducer(ProductReducer, initialState)

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            // const res = await fetch("https://script.google.com/macros/s/AKfycbx-VFLOuFryzQDm7Si-_Uf4YkAOpFgtmMKDg6EqILy4XndEgWs68eqiQcyZkAN0710dpA/exec?action=songsData");
            const res = await fetch("https://script.google.com/macros/s/AKfycbzkM87vEDCZgC5nLTIbamaUAhDxr-rQ4nawp1PjweV2W_50QhdYhAVWOwxm0PO3fm4zeg/exec?action=songsData");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_PRODUCTS', payload: products });
    }, [products]);
    
    console.log(state.products)
    return(
        <ProductContext.Provider value={{state,dispatch}}>{children}</ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider};