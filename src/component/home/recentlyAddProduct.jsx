 "use client"
import React, { useEffect, useState } from 'react'
import Container from './container.jsx'
import Product from '../product.jsx'

export default function RecentlyAddProduct() {
 let [products , setProduct ] = useState([])
  let getProduct = async () => {
    let response = await fetch("https://fakestoreapi.in/api/products?limit=5");
    let data = await response.json();
    setProduct(data.products);
    console.log(products);
  }
  useEffect( () => {
    getProduct();
  }, [])
  
  return (
    <div className='bg-gray-100 p-4 '>
       <Container> 
       <h1 className='text-center text-3xl font-bold'>Recently Added product</h1>
       <div className='grid grid-cols-5 gap-3'>
           {
              products.map((p) => {
                return <Product product={p} key={p.id}/>
              })
           }
           
       </div>  
       </Container>  
    </div>
  )
}
