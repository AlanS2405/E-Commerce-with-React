import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartG: (state, action) => action.payload,
        addProductCartG: (state, action) => [...state, action.payload],
        deleteProductCartG: (state, action) => {
            return state.filter( prod => prod.id !== action.payload)
        }
    }
})

export const { setCartG, addProductCartG, deleteProductCartG } = cartSlice.actions

export default cartSlice.reducer

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'


//--------------------------------------------------THUNKS
export const getCartThunk = () => (dispatch) => {
    const url = baseUrl
    axios.get(url, getConfigAuth())
        .then( res => dispatch(setCartG(res.data)))
        .catch( err => console.log(err))
}

export const postCartThunk = (prod, quantity = 1) => (dispatch) => {
    const url = baseUrl
    const data = {
        quantity,
        productId: prod.id
    }

    axios.post(url, data, getConfigAuth())
        .then( res => {
            const obj = {
                ...res.data,
                product: prod
            }
            console.log(obj),
            dispatch(addProductCartG(obj))
        })
        .catch( err => console.log(err))
}


export const deleteCartThunk = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`
    axios.delete(url, getConfigAuth())
    .then( res => {
        console.log(res.data)
        dispatch(deleteProductCartG(id))
    })
    .catch( err => console.log(err))
}