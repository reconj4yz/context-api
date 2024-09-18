import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './compnents/Home'
import User from './compnents/User'
import About from './compnents/About'
import UserDetails from './compnents/UserDetails'

const App = () => {
  return (
    <div>
      <nav className='flex gap-11 justify-center mt-11'>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/> } /> 
        <Route path='/users' element={<User/>} />
        <Route path='/users/:id' element={<UserDetails/>} />
        <Route path='/about' element={<About/>} />
      </Routes> 
    </div>
  )
}

export default App