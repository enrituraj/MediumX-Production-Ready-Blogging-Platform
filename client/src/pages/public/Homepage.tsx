import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='flex justify-between items-center h-screen bg-amber-50'>
      <div className='container mx-auto'>
        <h1 className='text-9xl'>Human <br />
          stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <Link to="/login">Start Reading</Link>
      </div>
        <div>
          image
        </div>
    </div>
  )
}

export default Homepage