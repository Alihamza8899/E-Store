import React from 'react'
import Container from './container.jsx'
import Product from '../product.jsx'

export default async function featuredProduct() {
   let response = await fetch("https://fakestoreapi.in/api/products?limit=5");
   let data = await response.json();
   console.log(data.products)
  return (
    <div className='p-4'>
       <Container> 
       <h1 className='text-center text-3xl font-bold'>Featured product</h1>
       <div  className='grid grid-cols-5 gap-3'>
        {
          data.products.map((p) => {
              return <Product product={p} key={p.id}/>
          })
        }
        </div>
       </Container>
    </div>
  )
}
