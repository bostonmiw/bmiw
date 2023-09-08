import React from 'react';
import Title from '../layouts/Title';
import Schedule from '../schedule/Schedule';
import Speakers from '../speakers/Speakers';

const Program = () => {
    return (
        <section id='program' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='Workshop program' body='Program' />
            </div>
            <Schedule />
            <Speakers />
        </section>
    );
};

export default Program;
