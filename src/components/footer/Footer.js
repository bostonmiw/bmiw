import React from 'react';
import { Logo } from '../../assets/images';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-[#141518]'>
            <div className="w-full py-6 h-auto  border-b-[1px] border-b-black flex flex-col items-center gap-3 justify-center">
                <img className="w-16 mb-4" src={Logo} alt="Logo" />
            </div>
            <div className="w-full py-6">
                <p className="text-center text-gray-500 text-base">
                    {currentYear}. The Boston Medical Imaging Workshop team
                </p>
            </div>
        </div>
    );
};

export default Footer;
