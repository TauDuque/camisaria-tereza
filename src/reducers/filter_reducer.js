import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((prod) => prod.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => a.name > b.name);
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.reverse((a, b) => a.name > b.name);
    }
    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, tecido, color, category, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    //filtragem
    // input text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    //category
    if (category !== "tudo") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    // tecido
    if (tecido !== "tudo") {
      tempProducts = tempProducts.filter(
        (product) => product.tecido === tecido
      );
    }
    //colors
    if (color !== "tudo") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((cor) => cor === color);
      });
    }
    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "tudo",
        tecido: "tudo",
        color: "tudo",
        shipping: false,
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
