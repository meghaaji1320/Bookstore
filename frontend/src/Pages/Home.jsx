import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getBooks } from '../features/bookSlice'
import Card from '../Components/Card'
const Home = () => {
  const books = useSelector((s) => s.books.books)
  const dp = useDispatch()
  useEffect(() => {
    dp(getBooks())
  },[dp])
  return (
    <div className="min-h-screen  p-10">
      <h1 className="text-3xl text-pink-800 font-bold mb-8 text-center">Booklist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}

      </div>
     
    </div>
  )
}

export default Home
