import { getProductDetail } from '@/app/library'
import Container from '@/component/home/container.jsx'
import Image from 'next/image';
import React from 'react'
import styles from '@/styles/home/product_detail.module.css'

export default async function productDetail({params}) {
  const data = await getProductDetail(params.product_id);
  console.log(data);
  return (
    <Container  className='py-12 px-4'>
      <div className={` flex flex-col md:flex-row bg-white`}>
    <div className={styles.imgContainer}>
      <Image 
      src={data.image} 
      className={`${styles.storeImg} w-full md:w-1/2 object-cover`} 
      fill
      alt={data.title}/>
      </div>
      <div className='p-6 md:w-1/2'>
        <h1 className='text-3xl font-semibold text-gray-500 mb-4 h-[80px] overflow-hidden'>{data.title}</h1>
        <p className='text-gray-500 mb-4 h-[150px] overflow-hidden'>{data.description}</p>
        <p className='text-lg text-semibold text-gray-500 mb-4'>Prize : {data.prize}</p>
        {  data.discount && (
            <p className='text-red-500 text-md mb-4'>Discount : {data.discount}% off</p>
        )}
        <ul>
          <li><strong>brand</strong> : {data.brand}</li>
          <li><strong>Modal</strong> : {data.modal}</li>
          <li><strong>Color</strong> : {data.color}</li>
          <li><strong>Category</strong> : {data.category}</li>
        </ul>
        <button className='bg-pink-500 py-2 px-4 mt-4 text-white'>
          Add to cart
        </button>
      </div>
      <div className={styles.container}></div>
      <div className={styles.containerb}></div>
    </div>
    </Container>
  )
}
