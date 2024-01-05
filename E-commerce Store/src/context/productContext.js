import { useEffect, useContext, createContext, useReducer} from "react";
import axios from "axios";
import reducer from "../reducers/productReducer"

//Create context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}


//contextProvider
const AppProvider = ({children}) =>{
    
    ////DISPATCH CALL KARTA HAI ACTION METHOD OF REDUCER
    // Here in state , the initialState data is stored as passed in reducer
    // dispatch ka kaam hai kaam karwa ke dena ya kaam pe lagana
        const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const response = await axios.get(url);
            const products = await response.data;
            //yaha pe dispatch kaam pe lagwa raha hai aur wo kaam karne ke liye kya kya data chahiye wo hum perenthesis me pass karenge
            // yaha pe payload hold karta hai konsa data :Reference to above line
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({type: "API_ERROR"});
        }
    }
    
    
    useEffect( () => {
     getProducts(API);
    }, []);
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
};

//Custom hook
const useProductContext = () => {
    return useContext(AppContext);
}


export { AppProvider, AppContext, useProductContext };