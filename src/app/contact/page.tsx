'use client'

import React, { useState } from 'react'
import Nav from '../components/nav'
import { motion } from 'framer-motion'

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus('sending')
        // Simulate form submission
        setTimeout(() => setFormStatus('sent'), 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            <Nav />
            <section className="text-gray-600 body-font relative py-20">
                <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-[600px]"
                    >
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Flower%20Shop%20Location&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">123 Flower Lane, Blossom City, FC 12345</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-pink-500 leading-relaxed hover:text-pink-600 transition-colors duration-300">hello@flowerbloom.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    >
                        <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">We love to hear from you! Send us a message and we eill respond as soon as possible.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button 
                                type="submit"
                                className={`text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition-colors duration-300 ${formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'idle' && 'Send Message'}
                                {formStatus === 'sending' && 'Sending...'}
                                {formStatus === 'sent' && 'Message Sent!'}
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">We respect your privacy and will never share your information.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage

