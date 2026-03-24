

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  books: [],
  currentBook: null,
  loading: false,
  error: null,
};


// Async thunk to create a book

export const createBook = createAsyncThunk('books/createBook', async (formdata) => {
const token = JSON.parse(localStorage.getItem('token'))

  if(!token){
    return alert("Not authenticated. Login to add book")
  }

  const res = await axios.post(`${import.meta.env.VITE_API_URL}/books/`,formdata,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })

  return res.data

})


export const getBooks = createAsyncThunk('books/getBooks', async () => {
  
const token = JSON.parse(localStorage.getItem('token'))

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/books/`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })

  return res.data


})


export const getSingleBook = createAsyncThunk(
"books/getSingleBook",
async (id) => {

const token = JSON.parse(localStorage.getItem("token"));

const res = await axios.get(
`${import.meta.env.VITE_API_URL}/books/${id}`,
{
headers: {
Authorization: `Bearer ${token}`,
},
}
);

return res.data;
}
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async (data) => {
    const {id,formData} = data
    const token = JSON.parse(localStorage.getItem("token"))

    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/books/${id}/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return res.data
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/books/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return id; // return deleted id
  }
);


// Book slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetBooks: (state) => {
      state.books = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBooks.fulfilled,(state,action) => {
        state.books = action.payload
      })

     .addCase(getSingleBook.pending, (state) => {
      state.loading = true;
    })

     .addCase(getSingleBook.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBook = action.payload;
    })
    .addCase(getSingleBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    // .addCase(updateBook.fulfilled,(state,action) =>{
    //   alert("book updated")
    // })

    .addCase(updateBook.fulfilled, (state, action) => {
  const updatedBook = action.payload;

  state.books = state.books.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );

  alert("book updated");
})

.addCase(deleteBook.fulfilled, (state, action) => {
  const id = action.payload;

  state.books = state.books.filter((book) => book.id !== id);

  alert("Book deleted");
})

   
  },


});

export const { clearError, resetBooks } = bookSlice.actions;
export default bookSlice.reducer;