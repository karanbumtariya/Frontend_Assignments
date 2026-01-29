import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const { category } = useParams();
    const { products } = useContext(ShopContext);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (category) {
            setFilteredProducts(products.filter(product => product.category === category));
        } else {
            setFilteredProducts(products);
        }
    }, [category, products]);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {category ? `${category} Collection` : 'All Products'}
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Browse our premium collection of electronics.
                    </p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-700">No products found in this category.</h2>
                        <p className="text-gray-500 mt-2">Try browsing other categories.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
