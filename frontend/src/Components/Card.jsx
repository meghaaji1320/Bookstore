import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { updateBook } from "../features/bookSlice"
import { useDispatch } from "react-redux"
import { deleteBook } from "../features/bookSlice";

const Card = ({ book }) => {
  const navigate = useNavigate();
    const dispatch = useDispatch()

      const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    price: book.price,
  })

  const handleClick = () => {
    navigate(`/bookdetail/${book.id}`);
  };

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
    const handleSave = () => {
    dispatch((updateBook({id:book.id,formData})))
    setIsEditing(false)
  }

    const handleCancel = () => {
    // reset back to original values
    setFormData({
      title: book.title,
      author: book.author,
      price: book.price,
    })
    setIsEditing(false)
  }


  return (
        <div className="relative bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 cursor-pointer">

      {isEditing ? (
        <>
         
             <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <button onClick={handleSave}>save</button>
       

          <div className="flex gap-3">

            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2
            onClick={handleClick}
            className="text-xl font-semibold mb-2 text-gray-800"
          >
            {book.title}
          </h2>

          <p className="text-gray-500 mb-2">
            Author: {book.author}
          </p>

          <p className="text-green-600 font-bold mb-4">
            ₹ {book.price}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              edit
            </button>

            <button onClick={() => {
                dispatch(deleteBook(book.id))
            }} className="bg-red-500 text-white px-3 py-1 rounded">
              delete
            </button>
          </div>
        </>
      )}

      <div className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500">
        <FaHeart size={20} />
      </div>
    </div>
  )
}

export default Card;