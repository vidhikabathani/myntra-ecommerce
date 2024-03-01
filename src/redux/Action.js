import axios from "axios"
import { ADD_CART, GET_CART, GET_PRODUCT, LOGIN, LOGOUT, REMOVE_CART, SIGNUP, SINGLE_PRODUCT } from "./ActionType";

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

export const single_product=(id)=>async(dispatch)=>{
    let singlep=await axios.get(`http://localhost:3100/products/${id}`)

    dispatch({
        type:SINGLE_PRODUCT,
        payload:singlep.data
    })
}



export const add_cart=(data)=>async(dispatch)=>{
    let res=await axios.post("http://localhost:3100/cart",data)

    dispatch({
        type:ADD_CART,
        payload:res.data
    })
}

export const get_cart=()=>async(dispatch)=>{
    let res=await axios.get("http://localhost:3100/cart")

    dispatch({
        type:GET_CART,
        payload:res.data
    })
}
export const remove_cart=(id)=>async(dispatch)=>{
    let res=await axios.get(`http://localhost:3100/cart/${id}`)

    dispatch({
        type:REMOVE_CART,
        payload:id
    })
}
