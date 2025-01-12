import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // Close Icon

const LoginModal = ({ isOpen, handleToggleModal }) => {
    if (!isOpen) return null; // Don't render if modal is not open
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-xl w-full max-w-lg transform transition-transform duration-500 ease-in-out hover:scale-105 p-10 rounded-2xl">
                <button
                    onClick={handleToggleModal}
                    className="absolute top-2 right-2 text-2xl text-gray-600"
                >
                    <IoClose />
                </button>

                <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl py-6">
                    <div className="">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">Login</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-teal-500 text-white text-lg rounded-lg font-semibold hover:bg-teal-600 transition transform duration-300 ease-in-out"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
