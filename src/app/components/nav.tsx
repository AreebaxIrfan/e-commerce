'use client'

import React, { useEffect, useState } from 'react';
import { useCart } from "@/app/components/CartContext";
import Link from "next/link";
import { AiOutlineProduct, AiOutlineShoppingCart } from 'react-icons/ai';
import { TiHomeOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';

const Nav = () => {
    const { getTotalItems } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const totalItems = getTotalItems();

    const navItems = [
        { href: "/", icon: <TiHomeOutline />, label: "Home" },
        { href: "/product", icon: <AiOutlineProduct />, label: "Products" },
        { href: "/cart", icon: <AiOutlineShoppingCart />, label: "Cart" },
        { href: "/contact", icon: <CgProfile />, label: "Profile" },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" className="text-xl font-serif font-bold text-pink-500 hover:text-gray-900 transition-colors duration-300">
                           Phuler
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center"
                            >
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                                {item.href === '/cart' && totalItems > 0 && (
                                    <span className="ml-1 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-1">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="flex items-center">
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                                {item.href === '/cart' && totalItems > 0 && (
                                    <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                                        {totalItems}
                                    </span>
                                )}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Nav;

