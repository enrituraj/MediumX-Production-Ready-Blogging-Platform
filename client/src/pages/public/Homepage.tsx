import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='bg-amber-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center min-h-[calc(100vh-80px-50px)]'>
          <div className='flex flex-col gap-8'>

            <h1 className='text-9xl font-semibold font-display'>Human <br />
              stories & ideas</h1>
            <p className='text-2xl'>A place to read, write, and deepen your understanding</p>
            <Link to="/login" className='w-fit px-8 py-2 bg-black text-2xl text-white rounded-full'>Start reading</Link>
          </div>

        <div>
          <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" 
           alt="" 
          className='w-125 absolute right-0 top-50'
           />
        </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage