import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Products } from "./reducer/Products";
import Users from "./reducer/Users";

const Combine = combineReducers({
    Users: Users,
    Products:Products
})

export const Store = legacy_createStore(Combine, applyMiddleware(thunk))