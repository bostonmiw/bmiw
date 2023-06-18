import React from 'react';
import Title from '../layouts/Title';
import { FaReact } from 'react-icons/fa';

const topics = [
    {
        name: 'Image acquisition',
        icon: <FaReact />,
    },
    {
        name: 'Image reconstruction',
        icon: <FaReact />,
    },
    {
        name: 'Image analysis',
        icon: <FaReact />,
    },
    {
        name: 'Machine Learning/Deep Learning',
        icon: <FaReact />,
    },
    {
        name: 'Visualization',
        icon: <FaReact />,
    },
];

const Topics = () => {

    return (
        <section id='topics' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='Showcasing research in medical imaging' body='Topics' />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {topics.map((item, index) => (
                    <div className="w-full px-10 h-40 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:-translate-y-2 transition-all duration-500">
                        <div className="flex justify-center w-full">
                            <div className="flex h-full flex-col gap-4">
                                <div className="flex flex-row justify-center">
                                    <span className='text-6xl text-designColor'>
                                        {item.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <h2 className="text-sm text-white tracking-wide font-titleFont text-center">
                                        {item.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Topics;
