import React from 'react'

function Navbar() {
  return (
    <header className='my-5 mx-10 py-5 px-10 flex items-center justify-between bg-neutral-800 rounded-lg'>
        <a href="/">
          <h1 className='text-4xl text-green-600 font-bold'>farm<span className='text-gray-400'>er</span></h1>
        </a>
        <a href="/"
        className='text-xl font-bold bg-lime-400 px-5 py-2 rounded-3xl border-2 border-black hover:bg-lime-500'>Profile</a>
    </header>
  )
}

export default Navbar