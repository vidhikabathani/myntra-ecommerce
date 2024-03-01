import { ADD_CART, GET_CART, GET_PRODUCT, REMOVE_CART, SINGLE_PRODUCT } from "../ActionType"

const initial = {
    products: [],
    single_product: {},
    cart: []
}

export const Products = (state = initial, { type, payload }) => {
    switch (type) {

        case GET_PRODUCT:
            return {
                ...state,
                products: payload
            }

        case SINGLE_PRODUCT:
            return {
                ...state,
                single_product: payload
            }

        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            };

        case GET_CART:
            return {
                ...state,
                cart: payload,
            };

        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter((e) => e.id !== payload),
            };


        default:
            return state
    }
}