import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const StateContext = createContext();

const initialState= {
    cart: [],
    total_item: "",
    total_amount:"",
    shipping_fee: 50000
};

const  StateProvider = ({  children }) =>{

    const [state, dispatch] = useReducer(reducer,initialState)

   const addToCart = (id, title,image,price,rating) =>{
    dispatch({type:"ADD_TO_CART", payload:{id, title,image,price,rating}})

   };
    
    return <StateContext.Provider value = {{...state,addToCart}}>
        {children}
    </StateContext.Provider>

}

const useCartContext = () =>{
    return useContext(StateContext);
}


export {StateProvider,useCartContext };