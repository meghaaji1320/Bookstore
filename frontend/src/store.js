import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../src/features/UserSlice'
export const store = configureStore({
    reducer:{
        users:UserReducer
    }
})