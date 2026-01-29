import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotalCartAmount, products, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

                {totalAmount > 0 ? (
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                        <div className="lg:col-span-8">
                            <div className="bg-white shadow sm:rounded-lg overflow-hidden">
                                <ul className="divide-y divide-gray-200">
                                    {products.map((product) => {
                                        if (cartItems[product.id] !== 0) {
                                            return (
                                                <li key={product.id} className="p-6 flex flex-col sm:flex-row items-center">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 w-full">
                                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                            <div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-sm">
                                                                        <Link to={`/products`} className="font-medium text-gray-700 hover:text-blue-600">
                                                                            {product.name}
                                                                        </Link>
                                                                    </h3>
                                                                </div>
                                                                <p className="mt-1 text-sm font-medium text-gray-900">₹ {product.price.toLocaleString()}</p>
                                                            </div>

                                                            <div className="mt-4 sm:mt-0 sm:pr-9 flex items-center justify-between sm:justify-end gap-4">
                                                                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                                                    <button
                                                                        onClick={() => removeFromCart(product.id)}
                                                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
                                                                    >
                                                                        <Minus size={14} />
                                                                    </button>
                                                                    <input
                                                                        className="w-12 text-center text-sm focus:outline-none"
                                                                        value={cartItems[product.id]}
                                                                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                                                                    />
                                                                    <button
                                                                        onClick={() => addToCart(product.id)}
                                                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
                                                                    >
                                                                        <Plus size={14} />
                                                                    </button>
                                                                </div>

                                                                <button
                                                                    onClick={() => deleteFromCart(product.id)}
                                                                    className="text-red-500 hover:text-red-700 transition"
                                                                    title="Remove Item"
                                                                >
                                                                    <Trash2 size={20} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 lg:mt-0 lg:col-span-4">
                            <div className="bg-white shadow sm:rounded-lg p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                                <div className="flow-root">
                                    <dl className="-my-4 text-sm divide-y divide-gray-200">
                                        <div className="py-4 flex items-center justify-between">
                                            <dt className="text-gray-600">Subtotal</dt>
                                            <dd className="font-medium text-gray-900">₹ {totalAmount.toLocaleString()}</dd>
                                        </div>
                                        <div className="py-4 flex items-center justify-between">
                                            <dt className="text-gray-600">Shipping</dt>
                                            <dd className="font-medium text-gray-900">Free</dd>
                                        </div>
                                        <div className="py-4 flex items-center justify-between border-t border-gray-200">
                                            <dt className="text-base font-bold text-gray-900">Order Total</dt>
                                            <dd className="text-base font-bold text-gray-900">₹ {totalAmount.toLocaleString()}</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={() => alert("Checkout functionality coming soon!")}
                                        className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                    >
                                        Checkout <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        or{' '}
                                        <Link to="/products" className="text-blue-600 font-medium hover:text-blue-500">
                                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg shadow">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                        <Link
                            to="/products"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
