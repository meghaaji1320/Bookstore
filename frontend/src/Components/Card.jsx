import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ book }) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/bookdetail/${book.id}`)
    }
  return (
    <div onClick={handleClick} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {book.title}
      </h2>

      <p className="text-gray-500 mb-2">
        Author: {book.author}
      </p>

      <p className="text-green-600 font-bold mb-4">
        ₹ {book.price}
      </p>

     

    </div>
  )
}

export default Card