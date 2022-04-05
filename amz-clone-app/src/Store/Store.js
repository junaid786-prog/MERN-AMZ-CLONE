import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import ProductReducer from "../Reducers/ProductReducer";
import CartReducer from "../Reducers/CartReducer";
import AccountReducer from "../Reducers/AccountReducer";

const Root = combineReducers(
    {
        ProductReducer,
        CartReducer,
        AccountReducer
    }
)

const Store=createStore(Root, composeWithDevTools());

export default Store;