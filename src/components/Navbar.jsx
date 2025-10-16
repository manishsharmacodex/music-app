import React from 'react'

const Navbar = ({logo}) => {
  return (
    <div className='w-full h-14 border-1 border-gray-700 flex items-center justify-between p-6 bg-black text-white rounded-2xl'>
      <h1>{logo}</h1>
      <button className='border-0 bg-cyan-900 pr-6 pl-6 pt-1 pb-1 text-center rounded'>Login</button>
    </div>
  )
}

export default Navbar
