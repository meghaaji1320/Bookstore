import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const registerUser = createAsyncThunk("user/registeruser",async (formdata) => {
    const res = await axios.post('http://localhost:8000/register/',formdata)
    console.log(res.data)
    return res.data
})


const initialState = {
    user:null,
    loading:false
}


export const UserSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        greet:(state) => {
            // alert(state.user)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending,(state,action) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled,(state,action) => {
            state.user = action.payload
            alert(state.user.username + "is registered")
            state.loading = false
        })
        .addCase(registerUser.rejected,(state) => {
            state.loading = false
            alert('rEGISTRATION FAILED')
        })
    }
})

export const {greet} = UserSlice.actions

export default UserSlice.reducer
