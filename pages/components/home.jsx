import Link from 'next/link'
import React from 'react'
import Index from '../navbar'
import {FcAbout} from 'react-icons/fc'
import {AiOutlineRollback} from 'react-icons/ai'



function Home() {
  return (
    <>
   
    <div className='bg-blue-300 h-screen '>
        
       <Index/>

      <h1 className=' font-bold text-center py-20 text-2xl '>welcome to our home page</h1>
     <div className='flex justify-center'>
      <Link className='bg-black text-white px-2  rounded hover:text-blue-300  flex py-1 mx-3  items-center' href={'/'}><AiOutlineRollback className=' text-blue-400 mr-1 h-4'/>Go To Back</Link>
      <Link className='bg-black text-white px-2  rounded hover:text-blue-300  flex py-2 ' href={'/component/about'}><FcAbout className=' mt-1 mr-1 h-4'/>Go To About </Link>
      </div>
    </div>
     
     
    
    </>
  )
}

export default Home
