import React from 'react'
import styles from '@/styles/header.module.css'
import Container from './home/container.jsx'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import Link from 'next/link.js'

export default function Header() {
  return (
    <div>
      <header className={`${styles.header} py-3 px-1 shadow`}>
        <Container className='flex justify-between items-center'>
          <Link href='/'>
            <div className={`flex items-center ${styles.logo}`}>
              <span className='text-pink-500 font-bold text-4xl'>E store <b className='text-black'>.</b></span>
            </div>
          </Link>
          <div className={`${styles.searchbar}`}>
            <input
              type='text'
              placeholder='Search for product...'
              className={`${styles.searchInput}`}
            />
            <button className={`${styles.searchbutton}`}>
              <FiSearch />
            </button>
          </div>
          <Navbar />
        </Container>
      </header>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav>
      <ul className='flex items-center gap-3'>
          <li className='link'>
            <Link href='/'>Home</Link>
          </li>  
          <li className='link'>
            <Link href='/store'>Store</Link>
          </li>
        
        <li className='flex'>
          <FiShoppingCart size={24} color='black' />
          <span className={`relative top-[-4px] left-[-5px] w-5 h-5 bg-pink-500 text-white flex justify-center items-center text-xs rounded-full`}>3</span>
        </li>
      </ul>
    </nav>
  )
}