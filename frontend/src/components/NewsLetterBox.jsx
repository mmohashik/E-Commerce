import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe to our newsletter and get 10% off
      </p>
      <p className='text-gray-500 mt-'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

        <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/3 flex items-center gap-3 mx-auto my-6 border pl-1'>
            <input  type="email" placeholder="Enter your email" className='w-full sm:flex-1 outline-none' required />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
        
    </div>
  )
}

export default NewsLetterBox
