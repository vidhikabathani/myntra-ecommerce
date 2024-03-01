import axios from "axios"
import { GET_PRODUCT, LOGIN, LOGOUT, SIGNUP } from "./ActionType";

export const sign_up=(data)=>async(dispatch)=>{
    let sign_up=await axios.post("http://localhost:3100/user",data);

    dispatch({
        type:SIGNUP,
        payload:sign_up
    })
}

export const login=(data)=>{
    return{
        type:LOGIN,
        payload:data
    }
}

export const logout=()=>{
    return{
        type:LOGOUT
    }
}

export const get_product=()=>async(dispatch)=>{
    let get_product=await axios.get("http://localhost:3100/products");

    dispatch({
        type:GET_PRODUCT,
        payload:get_product.data
    })
}