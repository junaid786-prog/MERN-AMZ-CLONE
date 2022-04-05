import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../Constants/constants";

export const userRegister = (signUpData) => async (dispatch, navigate) => {
  const config = { headers: { "content-Type": "application/json" } };
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post("/api/register", signUpData, config);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: USER_REGISTER_FAIL, payload: err });
  }
};

export const userLogin = (signInData) => async (dispatch) => {
  const config = { headers: { "content-Type": "application/json" } };
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post("/api/login", signInData, config);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_LOGIN_FAIL, payload: err });
  }
};

export const userProfile = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });
    const { data } = await axios.get("/api/profile");
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: USER_PROFILE_FAIL, payload: err });
  }
};
