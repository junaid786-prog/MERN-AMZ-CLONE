import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_REQUEST,
  CLEAR_ERRORS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
} from "../Constants/constants";

export const getProduct =
  (keyword = "", page = 1, price = [0, 5000], category, rating = 0) =>
  async (dispatch) => {
    try {
      let link = `/api/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`;
      if (category) {
        link = `/api/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      }
      // firstly we request for data
      dispatch({ type: ALL_PRODUCTS_REQUEST });

      const { data } = await axios.get(link);
      // now we have received data so
      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: ALL_PRODUCTS_FAIL, payload: err.response.data.message });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    // firstly we request for data
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    // now we have received data so
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data.product,
    });
  } catch (err) {
    dispatch({ type: ALL_PRODUCTS_FAIL, payload: err.response.data.message });
  }
};
//to clear errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Create Product
const config = { headers: { "content-Type": "application/json" } };
export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const { data } = await axios.post(
      "/api/admin/products/new",
      product,
      config
    );
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: err.message });
  }
};
