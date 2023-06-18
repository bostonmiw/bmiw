import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Media = () => {
    const [tooltipText, setTooltipText] = useState('');

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between items-center lgl:items-start">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4 text-center lgl:text-left">
                    Find us on
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://www.facebook.com"
                        target='_blank'
                        className="bannerIcon"
                        onMouseEnter={() => handleMouseEnter('Facebook')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FaFacebookF />
                        {tooltipText === 'Facebook' && <div className="tooltip">bmiw</div>}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Media;
    