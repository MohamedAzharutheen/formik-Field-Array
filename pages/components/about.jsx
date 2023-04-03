import React from 'react'
import Link from 'next/link'
import Index from '../navbar'


import { FaHome } from 'react-icons/fa';

function about() {
  return (
    <div>
       <div className='bg-rose-300 h-screen '>
        
       <Index/>
        <h1 className=' font-bold text-center py-20 text-2xl'>welcome to our About page</h1>
       
       <div className='flex '>
        <Link className=' mx-auto bg-black text-white px-2  py-2 rounded  flex hover:text-blue-200' href={'/component/home'}><FaHome className='mt-1 mr-1 h-4'/>Go To Home </Link>
        </div>
      </div>
    </div>
  )
}

export default about
