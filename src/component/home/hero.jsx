import React from 'react'
import Slider from './slider'
import styles from '@/styles/home/hero.module.css'
import Container from '@/component/home/container.jsx'

export default function Hero() {
  return (
    <Container className={styles.contain}>
        <section className={`${styles.hero}`}>
            <div className={`${styles.textSection}`}>
              <h1 className={`text-gray-700`}>One stop solution <span className='text-pink-500'>E-Store</span></h1>
              <p>Discover the latest headphones , earphones , mobiles , tablets etc.</p>
              <p>Exclusive deals just for you!</p>
              <button className={`${styles.shopBtn}`}>Shop now</button>
            </div>
            <Slider/>
        </section>      
    </Container>
  )
}
