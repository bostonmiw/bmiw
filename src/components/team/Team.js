import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import members from './Data';

const Team = () => {
    return (
        <section id='team' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='We look forward to seeing you!' body='Team' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 xl:gap-2">
                {members.map((item, index) => (
                    <Card
                        title={item.title}
                        desc={item.desc}
                        src={item.src}
                    />
                ))}
            </div>
        </section>
    );
};

export default Team;
