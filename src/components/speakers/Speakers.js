import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import speakers from './Data';
import schedule from '../schedule/Data';

const Speakers = () => {
    return (
        <section id='speakers' className="w-full py-20">
            <div className="flex justify-center items-center text-center">
                <Title title='Speakers' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {speakers.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        desc={schedule.find(x => x.title === item.title).desc}
                        src={item.src}
                        site={item.site}
                        institution={item.institution}
                    />
                ))}
            </div>
        </section>
    );
};

export default Speakers;
