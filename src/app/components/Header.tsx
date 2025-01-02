'use client'
import React, { useEffect, useState } from 'react';
import { useCart } from "@/app/components/CartContext";
import Link from "next/link";
import { AiOutlineProduct, AiOutlineShoppingCart } from 'react-icons/ai';
import { TiHomeOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const { getTotalItems } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const totalItems = getTotalItems();

    return (
        <header className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Blur and Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg-pic.png')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-sm"></div>
            </motion.div>

            {/* Navbar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className={`fixed top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
            >
                <div className={`text-2xl font-bold font-serif ${isScrolled ? 'text-pink-600' : 'text-white'}`}>
                    <Link href="/">Phuler</Link>
                </div>
                <nav>
                    <ul className="flex space-x-6 text-2xl">
                        {[
                            { href: "/", icon: TiHomeOutline, label: "Home" },
                            { href: "/product", icon: AiOutlineProduct, label: "Products" },
                            { href: "/cart", icon: AiOutlineShoppingCart, label: "Cart" },
                            { href: "/contact", icon: CgProfile, label: "Profile" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.href}
                                    className={`${isScrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-200'} transition-colors duration-200`}
                                    aria-label={item.label}
                                >
                                    <div className="relative inline-block">
                                        <item.icon className="text-2xl" />
                                        {item.label === "Cart" && totalItems > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                                                {totalItems}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>

            {/* Centered Text */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"
            >
                <h1 className="text-white text-5xl sm:text-7xl font-bold font-serif mb-6">Phuler</h1>
                <h2 className='text-white text-2xl sm:text-4xl font-light mb-8 max-w-3xl'>Flower Shop Shopify Theme</h2>
                <p className='text-white text-lg sm:text-xl max-w-2xl mb-10'>A complete and amazing flower webshop theme to provide daily fresh flowers and floral products. Nice, clean, and fresh design.</p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg'
                >
                    VIEW DEMO
                </motion.button>
            </motion.div>
        </header>
    );
};

export default Header;

