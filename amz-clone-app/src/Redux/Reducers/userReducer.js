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

export const SignUpReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        user: {},
        isAuthenticated: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        user: {},
        message: action.payload.message,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const SignInReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        user: {},
        isAuthenticated: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        user: {},
        message: action.payload.message,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const profileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
      };
    case USER_PROFILE_FAIL:
      return {
        loading: false,
        user: {},
        message: action.payload.message,
      };
    default:
      return state;
  }
};
