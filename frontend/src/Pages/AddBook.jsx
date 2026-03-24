import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBook } from "../features/bookSlice";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !price) {
      alert("All fields are required");
      return;
      
    }
    const newUser = {
        title,author,price
      }
    dispatch(createBook(newUser));
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-xl text-pink-600 font-bold text-center">Add Book</h2>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          className="w-full p-2 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
