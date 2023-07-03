import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Medical imaging.', 'Boston research community.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-10 lgl:gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-sm lgl:text-lg font-normal uppercase text-center lgl:text-left">Welcome !</h4>
                <h1 className="text-4xl lgl:text-6xl font-bold text-white text-center lgl:text-left">
                    Annual {' '}
                    <span className="text-designColor capitalize text-center lgl:text-left">Boston Medical Imaging Workshop</span>
                </h1>
                <h2 className="text-2xl lgl:text-4xl font-bold text-white text-center lgl:text-left">
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#daa520"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide text-center lgl:text-left">
                    A workshop bringing together the medical imaging community across major institutions in Boston.
                </p>
            </div>
            <Media />
        </div>
    );
};

export default LeftBanner;
