import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // Close Icon

const ContactModal = ({ isOpen, handleToggleModal }) => {
    if (!isOpen) return null; // Don't render if modal is not open
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Message:', message);
        console.log('Phone:', phone);
    };



    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className=" relative  bg-white shadow-xl w-full max-w-lg transform transition-transform duration-500 ease-in-out hover:scale-105 p-10 rounded-2xl">
                <button
                    onClick={handleToggleModal}
                    className="absolute top-2 right-2 text-2xl text-gray-600"
                >
                    <IoClose />
                </button>
                <div className="flex justify-center items-center   bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl py-6">
            <div className="">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">Contact the Owner</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <label htmlFor="about" className="block text-lg font-medium text-gray-700">About:</label>
                        <input
                            type="text"
                            id="about"
                            value="Chiwawa for gestation"
                            disabled
                            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Hello, I am interested in your ad..."
                        />
                    </div>

                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Your phone number</label>
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

                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white text-lg rounded-lg font-semibold hover:bg-teal-600 transition transform duration-300 ease-in-out"
                        >
                            Send the message
                        </button>
                    </div>
                </form>
            </div>
        </div>
            </div>
        </div>
    );
};

export default ContactModal;
