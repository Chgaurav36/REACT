import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products)

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
   // to set grid view
   const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

//   sorting function
const sorting = () =>{
    return dispatch({ type: "SORT_ITEM" });
}

useEffect(()=>{
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
},[state.sorting_value])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
