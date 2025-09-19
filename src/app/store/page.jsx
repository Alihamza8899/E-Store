import React from 'react'
import { getCatagery, getProducts } from '../library'
import Container from '@/component/home/container.jsx'
import Product from '@/component/product.jsx'

export default function Store() {
  return (
    <Container className='grid grid-cols-5'>
        <CatageryList/>
        <ProductList/>
    </Container>
  )
}

let CatageryList = async () => {
   const data = await getCatagery();
    console.log(data);
   
  return <div>
      <div className='text-2xl text-center'>Category</div>
      <ul>
        {
          data.products.map((c_name , i) => {
            return <li  className='p-2 border mt-3' key={'category' + i}>{c_name.category.toUpperCase()}</li>
          })
        }
      </ul>
  </div>
}
let ProductList = async () => {
  const data = await getProducts();
  
  return <div className='col-span-4 grid grid-cols-3 gap-3 mt-3'> 
       {
        data.map((p , i) => {
          return <Product product={p} key={i}/>
        })
       }
  </div>
}