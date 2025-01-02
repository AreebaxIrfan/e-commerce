'use client'

import React from "react";
import { motion } from "framer-motion";

interface CounterProps {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
}

const Counter: React.FC<CounterProps> = ({ value, onChange, min = 1, max = 10 }) => {
    const handleIncrement = () => {
        if (value < max) onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > min) onChange(value - 1);
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.95 }
    };

    return (
        <div className="flex items-center bg-pink-50 rounded-full p-1 shadow-md">
            <motion.button
                onClick={handleDecrement}
                className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full focus:outline-none"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={value <= min}
            >
                -
            </motion.button>
            <motion.span 
                className="px-4 font-semibold text-pink-700"
                key={value} // This ensures the animation triggers on value change
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {value}
            </motion.span>
            <motion.button
                onClick={handleIncrement}
                className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full focus:outline-none"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={value >= max}
            >
                +
            </motion.button>
        </div>
    );
};

export default Counter;

