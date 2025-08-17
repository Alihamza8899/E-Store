import React from 'react'
import Hero from '@/component/home/hero.jsx'
import RecentlyAddProduct from '@/component/home/recentlyAddProduct.jsx'
import FeaturedProduct from '@/component/home/featuredProduct.jsx'

export default function storePage() {
  return (
    <>
      <Hero/>
      <RecentlyAddProduct/>
      <FeaturedProduct/>
    </>
  )
}
