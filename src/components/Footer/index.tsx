import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import Image from 'next/image';
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row font-dm bg-white">
            <div className="flex flex-col md:flex-row justify-center my-12 w-full gap-8 xl:gap-64 px-4">
                <div className="flex mb-8 justify-center">
                    <Image
                        src="/logo.svg"
                        width={270}
                        height={110}
                        alt="logo"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <h2 className="font-bold text-lg text-[#8D804F]">Contact Person</h2>
                        <ul className="mt-4 space-y-2 text-[#8D804F]">
                            <li className="flex items-center space-x-2">
                                <a href="https://wa.me/6287776073898" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <IoLogoWhatsapp size={24} />
                                    </div>
                                    <span>(+62) 82133400212</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="font-bold text-lg text-[#8D804F]">Social Media</h2>
                        <ul className="mt-4 space-y-2 text-[#8D804F]">
                            <li className="flex items-center space-x-2">
                                <a href="https://www.instagram.com/seputar_krecek" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <AiFillInstagram size={24} />
                                    </div>
                                    <span>@seputar_krecek</span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a href="https://www.instagram.com/buddhazine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <AiFillInstagram size={24} />
                                    </div>
                                    <span>@buddhazine</span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a href="https://www.instagram.com/desabinaan.kmbui" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <AiFillInstagram size={24} />
                                    </div>
                                    <span>@desabinaan.kmbui</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="font-bold text-lg text-[#8D804F]">YouTube</h2>
                        <ul className="mt-4 space-y-2 text-[#8D804F]">
                            <li className="flex items-center space-x-2">
                                <a href="https://www.youtube.com/@kampungbudayakrecek1858" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <FaYoutube size={24} />
                                    </div>
                                    <span>Kampung Budaya Krecek</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
