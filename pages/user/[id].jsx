import React from 'react'
import { useRouter } from 'next/router'

function Id() {

    const router =useRouter()
  return (
    <div className='p-10'>
   <h2 className='p-5 font-bold tracking-wider'> 
   <div className='w-56 h-40 p-4 bg-blue-300 '> {router.query.id}</div> </h2>
    </div>
  )
}

export default Id
