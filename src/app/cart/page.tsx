'use client'

import { useCart } from "@/app/components/CartContext";
import { useEffect, useState } from "react";
import Counter from "@/app/components/Counter";
import Nav from "../components/nav";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (id: number, newQuantity: number) => {
        updateQuantity(id, newQuantity);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav />
            <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">Your Cart</h1>
                {cart.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16 bg-white rounded-lg shadow-sm"
                    >
                        <FaShoppingBag className="mx-auto text-gray-400 w-16 h-16 mb-4" />
                        <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
                        <Link href="/product" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                            <FaArrowLeft className="mr-2" />
                            Continue Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <ul className="lg:col-span-2 space-y-4">
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
                                    >
                                        <div className="flex items-center p-4 sm:p-6">
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden relative">
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-md"
                                                />
                                            </div>
                                            <div className="ml-6 flex-1">
                                                <div className="flex justify-between">
                                                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                                                    <p className="text-lg font-medium text-gray-900">₹{item.price.toLocaleString()}</p>
                                                </div>
                                                <div className="mt-4 flex justify-between items-center">
                                                    <Counter
                                                        value={item.quantity}
                                                        onChange={(newValue) => handleQuantityChange(item.id, newValue)}
                                                        min={1}
                                                        max={10}
                                                    />
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="flex items-center text-sm font-medium text-red-600 hover:text-red-500 transition duration-300"
                                                        aria-label={`Remove ${item.name} from Cart`}
                                                    >
                                                        <FaTrash className="w-4 h-4 mr-1" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <div className="lg:col-span-1">
                            <div className={`bg-white rounded-lg shadow-sm p-6 ${isScrolled ? 'lg:sticky lg:top-20' : ''}`}>
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-200">
                                        {cart.map((item) => (
                                            <li key={item.id} className="py-4 flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Image
                                                        src={item.imageUrl}
                                                        alt={item.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 rounded-md object-center object-cover"
                                                    />
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                        <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-gray-200 mt-6 pt-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <span>Subtotal</span>
                                        <span>₹{calculateTotal().toLocaleString()}</span>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <button className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300">
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                        <p>
                                            or{' '}
                                            <Link href="/product" className="text-pink-600 font-medium hover:text-pink-500 transition duration-300">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;

