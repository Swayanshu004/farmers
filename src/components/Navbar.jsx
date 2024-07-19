import React from 'react'

function Navbar() {
  return (
    <div className='w-screen py-5 px-10 flex items-center justify-between bg-neutral-200 '>
        <h1 className='text-4xl text-green-700 font-bold'>farm<span className='text-gray-400'>er</span></h1>
        <a href="/"
        className='text-xl font-bold bg-lime-300 px-5 py-2 rounded-3xl border-2 border-black hover:bg-lime-400'>Profile</a>
    </div>
  )
}

export default Navbar