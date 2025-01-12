import React, { useState } from 'react';
import Pet from "../../assets/Pet.JPEG";
import { IoLogoEuro } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import ContactModal from '../ContactModal/ContactModal';

const PetCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening and closing the modal
    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    };

    return (
        <>
            <div className='shadow-md rounded-lg pb-3 hover:scale-105 hover:shadow-lg'>
                <div className='rounded-xl space-y-2'>
                    <img className='rounded-t-xl w-full' src={Pet} alt="" />
                    <div className='px-5 space-y-3'>
                        <div className='flex justify-between'>
                            <h3 className="text-2xl font-semibold">Violence for pregnancy</h3>
                            <h3 className="text-2xl font-bold flex items-center text-cyan-500">
                                <span>500</span> <IoLogoEuro />
                            </h3>
                        </div>
                        <p className='flex items-center'>
                            <CiLocationOn /> <span>Nates</span>
                        </p>
                        <div className='flex gap-4'>
                            <p className='bg-gray-200 px-3 py-2 rounded-lg'>Dog</p>
                            <p className='bg-gray-200 px-3 py-2 rounded-lg'>Violence</p>
                            <p className='bg-gray-200 px-3 py-2 rounded-lg'>5 Years</p>
                        </div>
                        <div>
                            <button
                                onClick={handleToggleModal}
                                className='flex gap-3 items-center justify-center w-full bg-cyan-300 rounded-lg px-3 py-2 text-xl text-white'>
                                <MdOutlineMail /> <span>Contact</span>
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>
            {isModalOpen && <ContactModal isOpen={isModalOpen} handleToggleModal={handleToggleModal} />}
        </>
    );
};

export default PetCard;
