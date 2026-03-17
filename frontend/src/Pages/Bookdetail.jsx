import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleBook } from '../features/bookSlice'
const Bookdetail = () => {
  const dp = useDispatch()

  const {id} = useParams()

  const {currentBook,loading} = useSelector((state)=>state.books)
  useEffect(()=>{
    dp(getSingleBook(id))
  },[dp,id])

  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        {currentBook?.title}
      </h1>

      <p className="text-gray-600 mb-2">
        Author : {currentBook?.author}
      </p>

      <p className="text-green-600 font-bold">
        ₹ {currentBook?.price}
      </p>

    </div>
  )
}

export default Bookdetail
