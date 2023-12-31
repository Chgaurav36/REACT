const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

      case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

      case "SORT_ITEM":
        let userSortValue = document.getElementById("sort");
        let userValue  = userSortValue.options[userSortValue.selectedIndex].value;
        console.log(userValue)
      return {
        ...state,
        sorting_value: userValue,
      };

      case "SORTING_PRODUCTS":
        let newSortData;
        // let tempSortProduct = [...action.payload];
  
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];
  
        const sortingProducts = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }
  
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
  
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }
  
          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);
  
        return {
          ...state,
          filter_products: newSortData,
        };

      default:
        return state;
  }

  
};

export default filterReducer;
