import React from 'react'

function Footer() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submited");
    }
  return (
    <div className='w-screen flex items-center justify-between rounded-t-full py-6 px-20 bg-green-700 text-white'>
        <div>
            <p>a product by CODINGAASHARAM COMMUNITY</p>
            <h3 className='text-lg text-lime-300 mt-3'>For Daily Updates Subscribe By Submitting Your Email Below.</h3>
            <form 
            onSubmit={event => handleSubmit(event)}
            className='mt-1 flex items-center gap-5'>
                <input 
                type="email" 
                placeholder='example2gmail.com'
                className='px-5 py-2 rounded-3xl text-lime-600'/>
                <button 
                type='submit' 
                className='px-3 py-2 bg-lime-400 rounded-3xl'>Submit</button>
            </form>
        </div>
        <a href="/" className='text-xl font-semibold bg-lime-200 text-black px-5 py-2 rounded-3xl border-2 border-white hover:bg-lime-400'>GitHub</a>
    </div>
  )
}

export default Footer