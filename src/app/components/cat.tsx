import React from 'react'

const FlowerBouquetFilter = () => {
    return (
        <div>
            <div className="w-64 pt-6 pb-9 h-screen bg-white hidden lg:block text-black overflow-y-auto border-r border-gray-200 p-4">
                <div className="space-y-4">
                    {/* Bouquet Types */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Bouquet Types</h2>
                        <ul className="space-y-2">
                            <li>Rose Bouquets</li>
                            <li>Lily Bouquets</li>
                            <li>Sunflower Bouquets</li>
                            <li>Mixed Flower Bouquets</li>
                            <li>Tulip Bouquets</li>
                            <li>Orchid Arrangements</li>
                            <li>Carnation Bouquets</li>
                            <li>Wildflower Bouquets</li>
                            <li>Seasonal Bouquets</li>
                        </ul>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Occasion Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Occasion</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>Birthday</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>Anniversary</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>Wedding</span>
                            </label>
                        </div>
                    </div>

                    {/* Recipient Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Recipient</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>For Her</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>For Him</span>
                            </label>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Shop by Price */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Shop by Price</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>Under ₹1000</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>₹1000 - ₹2500</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>₹2500 - ₹5000</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-pink-500" />
                                <span>Above ₹5000</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerBouquetFilter

