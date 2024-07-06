import { createSlice } from "@reduxjs/toolkit"

export const wishlist = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist(state, action){
            return([...state, action.payload])
        },
        removeFromWishlist(state, action){
            return(state.filter((course) => course._id !== action.payload._id))
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlist.actions;
w