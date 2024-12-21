import React from 'react'

function Footer() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submited");
    }
  return (
    <div className='w-auto rounded-2xl py-6 px-10 md:px-20 bg-green-700 text-white'>
        <div className='w-auto gap-2 md:gap-0 flex flex-col md:flex-row items-center justify-between'>
            <div>
                <h3 className='text-base md:text-lg text-lime-300 mt-3'>For Daily Updates Subscribe our news letter : </h3>
                <form 
                onSubmit={event => handleSubmit(event)}
                className='mt-1 flex flex-col md:flex-row items-center gap-2 md:gap-5'>
                    <input 
                    type="email" 
                    placeholder='example2gmail.com'
                    className='w-5/6 md:w-fit px-3 md:px-5 py-2 rounded-md text-lime-600'/>
                    <button 
                    type='submit' 
                    className='w-5/6 md:w-fit px-3 py-2 bg-lime-400 rounded-md text-black font-bold hover:bg-lime-500 border-2 border-lime-400 hover:border-black'>Submit</button>
                </form>
            </div>
            <hr />
            <a href="/" className='text-xs md:text-xl font-semibold bg-lime-400 text-black px-3 md:px-5 py-2 rounded-3xl border-2 border-black hover:bg-lime-500 mt-5 md:mt-0'>GitHub</a>
        </div>
        <p className='text-neutral-200 text-center text-xs md:text-lg font-semibold mt-3'>a product by CODINGAASHARAM COMMUNITY</p>
    </div>
  )
}

export default Footer
