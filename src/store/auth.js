
import { createSlice } from "@reduxjs/toolkit";



export const  authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedin: false, firstName: null, lastName : null , role: null, token: null, wishlist: null, courses: null},

    reducers:{
        login(state, action){
            state.isLoggedin = true;
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.wishlist = action.payload.wishlist;
            state.courses = action.payload.courses;
 
        },
        
        logout(state){
            state.isLoggedin = false;
            state.id = null;
            state.email = null;
            state.user = null;
            state.role = null;
            state.token = null;
            state.wishlist = null;
            state.courses = null;
        },

        removeFromWl(state, action){
            state.wishlist = state.wishlist.filter((course) => course._id !== action.payload); 
        },

        addToWl(state, action){
            state.wishlist.push(action.payload);
        },

        purchaseCourse(state, action){
            console.log(action.payload)
            state.wishlist = state.wishlist.filter((course) => course._id !== action.payload._id);
            state.courses.push(action.payload);
        }
    }
})

export const {login , logout, removeFromWl, addToWl, purchaseCourse} = authSlice.actions;

export default authSlice.reducer;