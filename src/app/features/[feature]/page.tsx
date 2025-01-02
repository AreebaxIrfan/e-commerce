'use client';

import Image from "next/image";
import { useCart } from "@/app/components/CartContext";
import { useEffect, useState } from "react";
import Nav from "@/app/components/nav";
import Counter from "@/app/components/Counter";
import { motion } from "framer-motion";

interface Feature {
  id: number;
  tag: string;
  name: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
  description?: string;
}

const FeatureDetails = ({ params }: { params: { feature: string } }) => {
  const { cart, addToCart , updateQuantity } = useCart();
  const [feature, setFeature] = useState<Feature | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.feature) {
      console.error("Feature ID is missing in URL parameters");
      setLoading(false);
      return;
    }

    const fetchFeature = async () => {
      try {
        const response = await fetch(`/api/feature`);
        const data: Feature[] = await response.json();
        const product = data.find(
          (item) => item.id === parseInt(params.feature, 10)
        );
        setFeature(product || null);
      } catch (error) {
        console.error("Error fetching feature data:", error);
        setFeature(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFeature();
  }, [params.feature]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!feature) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = (feature: Feature) => {
    const isAlreadyInCart = cart.some((item) => item.id === feature.id);

    if (isAlreadyInCart) {
      alert("This product is already in the cart.");
      return; // Exit the function if the item is already in the cart.
    }

    addToCart({
      id: feature.id,
      name: feature.name,
      price: feature.price,
      imageUrl: feature.imageUrl,
      quantity: 1, // Default quantity
    });
  };
  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
};

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 py-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={feature.imageUrl}
                alt={feature.name}
                width={500}
                height={500}
                className="h-full w-full object-cover md:w-96"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">
                {feature.category}
              </div>
              <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
                {feature.name}
              </h1>
              <p className="mt-4 text-gray-600">
                {feature.description || "No description available."}
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-pink-500">
                  ₹{feature.price.toLocaleString()}
                </span>
              </div>
              <div className="mt-6 flex items-center">
                <span className="mr-3 text-gray-700">Quantity:</span>
                <Counter
                 value={1}
                 onChange={(newValue) => handleQuantityChange(feature.id, newValue)}
                 min={1}
                 max={10}
                />
              </div>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(feature)}
                  className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureDetails;
