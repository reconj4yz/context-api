import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { UserContext } from '../context/Context'
import { Link } from 'react-router-dom'

const User = () => {
const {user, setUser} = useContext(UserContext)
// console.log(user)
  return (
    
    <div className='flex flex-col p-5 justify-center items-center '>
        <h1 className='text-3xl underline'>User Details</h1>
        
        {user.map((u)=> 
        (<Link to={`/users/${u.id}`} className='bg-blue-100 p-5 m-2 w-1/3' key={u.id}>{u.name}</Link>) )}
    </div>
    
  )
}

export default User