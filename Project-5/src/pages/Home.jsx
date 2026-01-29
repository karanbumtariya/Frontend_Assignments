import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Truck, ShieldCheck, Headphones, Zap } from 'lucide-react';

const Home = () => {
    const { products } = useContext(ShopContext);

    // Featured products (picking first 8 for display)
    const featuredProducts = products.slice(0, 8);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="hero.png"
                        alt="Electronics Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative max-w-7x1 mx-auto px-4 sm:px-6 lg:px-12 py-24 md:py-32">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        Next Gen <span className="text-blue-300">Electronics</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                        Upgrade your life with the latest gadgets. Best prices, premium quality, and ultra-fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-300 md:text-lg transition-colors"
                        >
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-12 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex-shrink-0 text-blue-600">
                                <Truck size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
                                <p className="text-sm text-gray-500">On all orders over ₹500</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex-shrink-0 text-blue-600">
                                <ShieldCheck size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
                                <p className="text-sm text-gray-500">100% secure transaction</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex-shrink-0 text-blue-600">
                                <Headphones size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                                <p className="text-sm text-gray-500">Dedicated support team</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex-shrink-0 text-blue-600">
                                <Zap size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
                                <p className="text-sm text-gray-500">Delivery in 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                    <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>

            {/* Newsletter / Offer Section */}
        <div className="relative bg-[url('offer4.png')] bg-cover bg-center bg-no-repeat py-80"></div>

        </div>
    );
};

export default Home;
