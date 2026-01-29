import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ShoppingCart } from 'lucide-react';

const ProductCard = (props) => {
    const { id, name, price, image, category } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group">
            <div className="relative overflow-hidden h-64">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {category}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={name}>{name}</h3>
                <p className="text-xl font-bold text-gray-900 mb-4">₹ {price.toLocaleString()}</p>

                <div className="mt-auto">
                    <button
                        className="w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center gap-2"
                        onClick={() => addToCart(id)}
                    >
                        <ShoppingCart size={18} />
                        Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
