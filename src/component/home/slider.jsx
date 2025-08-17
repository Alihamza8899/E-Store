"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/styles/home/hero.module.css'
import Image from 'next/image';
import headphone from '../../../public/1692941008275-headphone3.jpg'


let images = [
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg'
];

export default function slider() {
  let [imgNumber, setImgNumber] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setImgNumber((currentNumber) => {
        if (currentNumber == images.length - 1)
          return 0;
        else
          return currentNumber + 1;
      });
    }, 2000)
     return () => {
      clearInterval(interval);
        }
    }, [])
  return (

    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {
          images.map((img, i) => {
            return (
              <Image src={img} className={`${styles.slide} ${imgNumber == i && styles.active}`} alt={'slide' + i} key={'slide' + i} fill size={25} />
            )
          })
        }
      </div>
    </div>
  )
}
