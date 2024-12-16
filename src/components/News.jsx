import React from 'react'

function News() {
  return (
    <div className='w-screen py-10 flex flex-wrap justify-center'>
        <div className='w-1/3 h-56 py-20 bg-lime-300 rounded-3xl mx-16 my-10'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>NEWS-1</h1>
        </div>
        <div className='w-1/3 h-56 py-20 bg-gray-500 rounded-3xl mx-16 my-10'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>NEWS-2</h1>
        </div>
        <div className='w-1/3 h-56 py-20 bg-gray-500 rounded-3xl mx-16 my-10'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>NEWS-3</h1>
        </div>
        <div className='w-1/3 h-56 py-20 bg-lime-300 rounded-3xl mx-16 my-10'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>NEWS-4</h1>
        </div>
    </div>
  )
}

export default News