import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productReducers,
  productDetailsReducer,
  createProduct,
} from "./Reducers/productReducers";
import {
  profileReducer,
  SignInReducer,
  SignUpReducer,
} from "./Reducers/userReducer";

const middleware = [thunk];
const Root = combineReducers({
  all_products: productReducers,
  product_detail: productDetailsReducer,
  user: SignUpReducer,
  loggedin_user: SignInReducer,
  user_profile: profileReducer,
  create_product: createProduct,
});

const store = createStore(
  Root,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
