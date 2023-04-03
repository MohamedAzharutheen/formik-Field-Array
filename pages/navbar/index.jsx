import Link from 'next/link'
import React from 'react'

function Index() {
  return (
    <div className='flex justify-end p-5 mx-5 mt-2 bg-green-200 rounded-2xl'>
        
      <nav className='font-serif '>
       <Link className='px-5 hover:text-blue-500' href={'/components/home'}>Home</Link>
        <Link className='px-5 hover:text-blue-500' href={'/components/about'}>About</Link>
        <Link href={'/components/fieldArrray'} className='px-5 hover:text-blue-500'>Field Array</Link>
       <Link href={'/components/reg'} className="hover:text-blue-500"> Login</Link>
      </nav>
    </div>
  )
}

export default Index
