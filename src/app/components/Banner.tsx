import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
          Banners Selling Products
        </h2>
        <Link 
          href="/product" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
      <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        <div className='order-2 lg:order-1'>
          <div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg'>
            <Image 
              src="/t-1.jpeg" 
              alt='Floral arrangement' 
              layout='fill'
              objectFit='cover'
              className='transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
        <div className='order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h3 className='font-serif italic text-5xl sm:text-6xl lg:text-7xl text-gray-800 mb-4'>
            Hurry Up!
          </h3>
          <h4 className='font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-6'>
            Hot Deal! Sale Up To <span className='text-pink-500'>20% OFF</span>
          </h4>
          <p className='text-gray-600 mb-8 max-w-lg'>
            Discover our exquisite collection of floral arrangements. From vibrant bouquets to elegant centerpieces, find the perfect blooms to brighten your day or make a lasting impression. Do not miss out on our limited-time offer!
          </p>
          <Link 
            href="/product" 
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300'
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner

