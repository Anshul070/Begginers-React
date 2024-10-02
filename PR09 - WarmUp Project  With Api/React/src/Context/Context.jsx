import React, { createContext, useEffect, useState } from 'react'
import axios from '../models/Axios'

export const ProductContext = createContext(null);

function Context(props) {
    const [Products,setProducts] = useState([]);
    const fetchData = () => {
      axios.get('/').then((response) => response.data).then((data) => setProducts(data)); 
  }
    useEffect(() => {
      fetchData();

    }, [])
    
  return (
    <ProductContext.Provider value={[Products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context;