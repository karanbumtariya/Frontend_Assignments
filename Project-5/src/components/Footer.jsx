import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Om Electronics</h3>
                        <p className="text-gray-400 mb-4">
                            Your one-stop shop for premium electronics. We provide the best quality gadgets at affordable prices.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={22} />
                            </a>
                            <a href="https://x.com/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={22} />
                            </a>
                            <a href="https://www.instagram.com/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={22} />
                            </a>
                            <a href="https://www.linkedin.com/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">Products</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
                            <li><Link to="/cart" className="text-gray-400 hover:text-blue-400 transition-colors">Cart</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
                        <ul className="space-y-2">
                            <li><Link to="/products/Mobiles" className="text-gray-400 hover:text-blue-400 transition-colors">Mobiles</Link></li>
                            <li><Link to="/products/Laptops" className="text-gray-400 hover:text-blue-400 transition-colors">Laptops</Link></li>
                            <li><Link to="/products/TV" className="text-gray-400 hover:text-blue-400 transition-colors">TVs</Link></li>
                            <li><Link to="/products/AC" className="text-gray-400 hover:text-blue-400 transition-colors">ACs</Link></li>
                            <li><Link to="/products/Watch" className="text-gray-400 hover:text-blue-400 transition-colors">Smart Watches</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-3 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                                <span className="text-gray-400">123 Electronics Hub, Tech City, India 380001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 text-blue-400 shrink-0" />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 h-5 w-5 text-blue-400 shrink-0" />
                                <span className="text-gray-400">info@omelectronics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center bg-gray-900">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} Om Electronics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
