import React, { createContext, useContext, useState } from 'react'
import data from '../data.json'

export const userContext = createContext(null);

const Context = (prop) => {
    const Users = useState(data);

    return (
    <>
    <userContext.Provider value={Users}>
        {prop.children}
    </userContext.Provider>
    </>
  )
}

export default Context