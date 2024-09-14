import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const {id} = useParams()
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-zinc-200 p-5 mt-10'  >
        <h1 className=' text-blue-500 m-2 mt-2 text-lg '>Name:{user[id].name}</h1>
        <h1 className='text-blue-400 m-2 text-sm '>Age:{user[id].age}</h1>
        <button onClick={()=>navigate(-1)} className='px-3 py-1 bg-blue-200 rounded-md'>Go Back</button>
        </div>
        
    </div>
  )
}

export default UserDetails