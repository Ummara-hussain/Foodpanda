import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartToStore: (state, data) => {
            state.cart.push(data.payload)
        },
        removeCartToStore: (state) => {
            state.cart -= 1
        }
    },
})

export const { addCartToStore, removeCartToStore } = cartSlice.actions

export default cartSlice.reducer