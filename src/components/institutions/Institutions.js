import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import institutions from './Data';

const Institutions = () => {
    return (
        <section id='institutions' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='Hosting researchers across Boston' body='Institutions' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-10">
                {institutions.map((item, index) => (
                    <Card
                        title={item.title}
                        desc={item.desc}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Institutions;
