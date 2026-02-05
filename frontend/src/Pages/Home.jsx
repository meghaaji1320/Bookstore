import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { greet } from '../features/UserSlice'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(greet())
    },[])
  return (
    <div>
      abc
    </div>
  )
}

export default Home
