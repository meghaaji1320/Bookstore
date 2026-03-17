import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const storedUser = localStorage.getItem('token')

const initialState = {
user : storedUser ? JSON.parse(storedUser) : null,
    loading:false,
    error:null
}

export const registerUser = createAsyncThunk("auth/register", async (formdata,{rejectWithValue}) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/register/`,formdata)
        return res.data
    } catch (error) {
        return rejectWithValue (error.response?.data || error.message)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (formdata) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/token/`,formdata)
        return res.data
    } catch (error) {
        return error
    }
})


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state) => {
            state.user = null
            localStorage.removeItem('token')
            
        }


       
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending,(state,action) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled,(state,action) => {
            console.log(action.payload)
        })
        .addCase(registerUser.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(loginUser.fulfilled,(state,action) => {
            state.user = action.payload.access
            console.log(state.user)
            localStorage.setItem('token',JSON.stringify(action.payload.access))
            alert("logged in ")
        })
    }

})


export const {logout} = authSlice.actions
export default authSlice.reducer