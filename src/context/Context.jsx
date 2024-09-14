import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const Context = (props) => {
 const [user, setUser] = useState([
    { id:0, name: 'John Doe', age: 30 },
    { id:1, name: 'Lalu Yadav', age: 45 },
    { id:2, name: 'Raja Gujjar', age: 69 },
    { id:3, name: 'Manish', age: 22 }
]
)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context