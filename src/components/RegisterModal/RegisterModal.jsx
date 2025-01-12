import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // Close Icon

const RegisterModal = ({ isOpen, handleRegisterToggleModal }) => {
    if (!isOpen) return null; // Don't render if modal is not open

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Phone:', phone);
    };

    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                <div className="relative bg-white shadow-xl w-full max-w-lg transform transition-transform duration-500 ease-in-out hover:scale-105 p-10 rounded-2xl">
                    <button
                        onClick={handleRegisterToggleModal}
                        className="absolute top-2 right-2 text-2xl text-gray-600"
                    >
                        <IoClose />
                    </button>

                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl py-6">
                        <div className="">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">Inscription</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                    <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="votre@email.com"
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
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                <div className="transition duration-300 ease-in-out transform hover:scale-105">
                                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="0612345678"
                                        required
                                    />
                                </div>

                              
                            </form>

                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <button
                                        onClick={() => {
                                            handleRegisterToggleModal(); // Close the register modal and open the login modal
                                            // Additional login modal toggle logic goes here
                                        }}
                                        className="text-teal-500 hover:text-teal-600"
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
