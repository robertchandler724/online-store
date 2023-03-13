import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export const Products = () => {
    const [products, setProducts] = useState([])
    //use axios

    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products')
            .then((res)=> {
                setProducts(res.data)
        });
    }, [])
console.log([products])
    return (
            <><div>
            Shop
        </div>
        <div className='products'>
            <ul>
                {products.map(product => <li>{product.title}  {product.price}</li>)}
            </ul>
        </div></>
  )
}

export default Products
