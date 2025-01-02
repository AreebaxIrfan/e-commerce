'use client';

import Nav from '../components/nav'
import Back from '../components/backpic'
import Cat from '../components/cat';
import { useCart } from "@/app/components/CartContext";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye,  FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

interface Feature {
  id: number;
  tag: string;
  name: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
}

const ProductsPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <Back />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Cat />
          </div>
          <div className="md:w-3/4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                  <div className="relative pt-[100%]">
                    <Image
                      src={feature.imageUrl}
                      alt={feature.name}
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-pink-500 text-white px-2 py-1 m-2 rounded-full text-xs font-semibold">
                      {feature.tag}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{feature.name}</h2>
                    <p className="text-gray-600 mb-4">Rs. {feature.price.toLocaleString()}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <Link
                      
                        href={`/features/${feature.id}`}
                        className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 flex items-center"
                      >
                        <FaEye className="mr-2" />
                        Details
                      </Link>
                      <button
                        onClick={() => handleAddToCart(feature)}
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

