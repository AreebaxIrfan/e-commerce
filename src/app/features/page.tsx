'use client';

import { useCart } from "@/app/components/CartContext";
import Image from "next/image";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

interface Feature {
    id: number;
    tag: string;
    name: string;
    price: number;
    category: string;
    color: string;
    imageUrl: string;
}


const Page = () => {
    const [features, setFeatures] = useState<Feature[]>([]);
    const { cart, addToCart } = useCart();

    useEffect(() => {
        fetchFeatures();
    }, []);

    const fetchFeatures = async () => {
        try {
            const res = await fetch("/api/feature");
            const data = await res.json();
            setFeatures(data);
        } catch (error) {
            console.error("Error fetching features:", error);
        }
    };

    const handleAddToCart = (feature: Feature) => {
        const isAlreadyInCart = cart.some((item) => item.id === feature.id);

        if (isAlreadyInCart) {
            alert("This product is already in the cart.");
            return;
        }

        addToCart({
            id: feature.id,
            name: feature.name,
            price: feature.price,
            imageUrl: feature.imageUrl,
            quantity: 1,
        });
    };

    const handleScroll = (direction: 'left' | 'right') => {
        const slider = document.getElementById('productList');
        if (slider) {
            slider.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0 text-gray-800">Featured Products</h1>
        <div className="flex items-center space-x-4">
            <h2 className="font-semibold text-gray-600 hidden sm:block">Filter:</h2>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">Small</button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">Medium</button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">Large</button>
            <div className="flex items-center space-x-2">
                <button
                    className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
                    onClick={() => handleScroll('left')}
                    aria-label="Scroll Left"
                >
                    <MdArrowBackIosNew size={20} />
                </button>
                <button
                    className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
                    onClick={() => handleScroll('right')}
                    aria-label="Scroll Right"
                >
                    <MdOutlineArrowForwardIos size={20} />
                </button>
            </div>
        </div>
    </div>

    <div
        id="productList"
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 scrollbar-hide"
    >
        {features.map((feature) => (
            <div
                key={feature.id}
                className="flex-none w-64 sm:w-72 bg-white rounded-lg shadow-md snap-start transition-transform duration-300 hover:scale-105"
            >
                <div className="relative aspect-square">
                    <Image
                        src={feature.imageUrl}
                        alt={feature.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => handleAddToCart(feature)}
                            className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors mx-1"
                            title="Add to Cart"
                            aria-label="Add to Cart"
                        >
                            <FaShoppingCart size={20} />
                        </button>

                        <Link
                            href={`/features/${feature.id}`}
                            className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors mx-1"
                            title="View Product"
                            aria-label="View Product"
                        >
                            <FaEye size={20} />
                        </Link>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-gray-800">{feature.name}</h2>
                        <span className="text-gray-600">${feature.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{feature.category}</p>
                    <Link
                        href={`/features/${feature.id}`}
                        className="block w-full bg-pink-500 text-white py-2 px-4 rounded text-center hover:bg-pink-600 transition-colors"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Page
