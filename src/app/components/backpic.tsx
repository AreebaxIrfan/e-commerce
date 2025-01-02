'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Back = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-sm"></div>
        </div>
        
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            PRODUCTS
          </motion.h1>
          <motion.div
            className="text-white text-lg sm:text-xl md:text-2xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="opacity-70">Home</span>
            <span className="mx-2">-</span>
            <span>Products</span>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200 rounded-tr-full opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-bl-full opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        ></motion.div>
      </header>
    </motion.div>
  )
}

export default Back

