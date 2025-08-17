
import Image from 'next/image'
import React from 'react'
import pic from '../../public/1691057474498-earphone.jpg'
import styles from '@/styles/product.module.css'
import Link from 'next/link'

export default function product({product}) {
  return (
    <div className={`${styles.card} bg-white p-4 rounded-lg shadow`}>
    <Link href={'/store/product_detail/' + product.id}>
      <Image src={product.image} width={300} height={150} alt='pic' className={styles.productImg}/>
    </Link>
    <div className='mt-4'>
      <h3 className='text-xl font-bold'>{product.model}</h3>
      <p className='text-gray-900 font-semibold mt-2'>{product.title}</p>
      <button className={`${styles.btn} mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg`}>
        Buy Now
      </button>
    </div>
       
    </div>
  )
}
