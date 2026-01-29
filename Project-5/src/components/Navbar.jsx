import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-blue-600">Om Electronics</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) => `text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
                            Home
                        </NavLink>

                        <div className="relative group">
                            <button
                                className="text-gray-700 group-hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Products <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {/* Dropdown menu */}
                            <div
                                className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block transition-all duration-200"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <div className="py-1">
                                    <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Products</Link>
                                    {CATEGORIES.map((cat) => (
                                        <Link key={cat} to={`/products/${cat}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/about" className={({ isActive }) => `text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
                            Contact
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-blue-600 p-2 rounded-full">
                            <User size={24} />
                        </Link>
                        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 p-2 rounded-full">
                            <ShoppingCart size={24} />
                            {getTotalCartItems() > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {getTotalCartItems()}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 p-2 mr-2">
                            <ShoppingCart size={24} />
                            {getTotalCartItems() > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {getTotalCartItems()}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <div className="px-3 py-2">
                            <span className="text-gray-900 font-medium block mb-1">Products</span>
                            <div className="pl-4 space-y-1">
                                <Link to="/products" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 block text-sm">All Products</Link>
                                {CATEGORIES.map((cat) => (
                                    <Link key={cat} to={`/products/${cat}`} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 block text-sm">
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <Link to="/login" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
