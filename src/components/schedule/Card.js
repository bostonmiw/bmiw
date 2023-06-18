import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const Card = (props) => {
    const [tooltipText, setTooltipText] = useState('');

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img
                    className="w-full h-60 object-cover group-hover:scale-110 duration-300"
                    src={props.src}
                    alt={props.title}
                />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColor font-normal">
                            {props.title}
                        </h3>
                        <div className="flex gap-2">
                            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer relative">
                                <a
                                    href={props.github}
                                    target="_blank"
                                    onMouseEnter={() => handleMouseEnter('Source Code')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <BsGithub />
                                    {tooltipText === 'Source Code' && (
                                        <div className="tooltip">
                                            Source Code
                                        </div>
                                    )}
                                </a>
                            </span>
                            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer relative">
                                <a
                                    href={props.site}
                                    target="_blank"
                                    onMouseEnter={() => handleMouseEnter('Website')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaGlobe />
                                    {tooltipText === 'Website' && (
                                        <div className="tooltip">
                                            Website
                                        </div>
                                    )}
                                </a>
                            </span>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {props.desc}
                    </p>
                    <p className="text-sm text-right text-gray-500 tracking-wide mt-3">
                        {props.institution}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
