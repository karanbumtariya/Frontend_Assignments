import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Om Electronics</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are dedicated to bringing you the best in consumer electronics.
                        Quality, reliability, and innovation are at the heart of everything we do.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                            alt="Our Office"
                            className="rounded-lg shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            Founded in 2010, Om Electronics started as a small repair shop and has grown into a leading electronics retailer.
                            Our journey is defined by our passion for technology and our commitment to our customers.
                        </p>
                        <p className="text-gray-700 text-lg">
                            We believe technology should be accessible to everyone. That's why we partner with top brands to offer a wide range of products
                            at competitive prices. From the latest smartphones to smart home appliances, we have it all.
                        </p>
                    </div>
                </div>

                {/* Stats / Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                            <Award className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                        <p className="text-gray-600">
                            Every product we sell undergoes rigorous quality checks to ensure you get the best.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                            <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
                        <p className="text-gray-600">
                            Our support team is available 24/7 to assist you with any queries or issues.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                            <ThumbsUp className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by Thousands</h3>
                        <p className="text-gray-600">
                            Over 50,000 satisfied customers across the country trust Om Electronics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
