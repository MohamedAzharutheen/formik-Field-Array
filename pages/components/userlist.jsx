import React from 'react'
import Link from 'next/link'

function Userlist({user}) {
  return (
    <div className='' >
     <ul> {user.map((data)=>{
       return <li className='p-10 '> <Link href={`/user/  id  ${ data.id}  Name  ${data.name}`} key={data.id}>{data.id}{data.name}</Link></li>
      })}</ul>
    </div>
  )
}

export default Userlist
