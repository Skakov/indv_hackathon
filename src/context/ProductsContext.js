import React, { useReducer } from "react";
import axios from "axios";

import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/CalcPrice";


export const productsContext = React.createContext();


const INIT_STATE = {
  productsData: [],
  paginationPages: 1,
  productToEdit: null,
  detailsData: null,
  cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        productsData: action.payload.data,

        paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };

    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    case "DETAILS_PRODUCT":
      return { ...state, detailsData: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
 
  async function getProducts(history) {
    const search = new URLSearchParams(history.location.search);
    search.set("_limit", 4);
    history.push(`${history.location.pathname}?${search.toString()}`);
    let res = await axios.get(
      `http://localhost:8000/products${window.location.search}`
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  const addProduct = (newProduct) => {
    axios.post("http://localhost:8000/products", newProduct);

    getProducts();
  };
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    getProducts();
  };
  const editProduct = async (id) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`http://localhost:8000/products/${editedProduct.id}`, editedProduct);
  };
  const showDetails = async (id) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "DETAILS_PRODUCT",
      payload: data,
    });
  };
  //cart
  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
 
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart, " 112");
    cart.products = cart.products.map((elem) => {
        if (elem.item.id === id) {
          elem.count = count;
          elem.subPrice = calcSubPrice(elem);
        }
        return elem;
      });
      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("cart", JSON.stringify(cart));
      getCart();
    }
    function checkProductInCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
    return (
      <productsContext.Provider
        value={{
          productsData: state.productsData,
          paginationPages: state.paginationPages,
          productToEdit: state.productToEdit,
          detailsData: state.detailsData,
          cart: state.cart,
          cartLength: state.cartLength,
          getProducts,
          addProduct,
          deleteProduct,
          editProduct,
          saveEditedProduct,
          showDetails,
          addProductToCart,
          getCart,
          changeProductCount,
          checkProductInCart,
        }}
      >
        {children}
      </productsContext.Provider>
    );
  };
  export default ProductsContextProvider;
