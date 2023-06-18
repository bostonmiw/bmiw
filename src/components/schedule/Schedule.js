import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import data from './Data'; // Import the object containing named exports

const Schedule = () => {
    const { schedule} = data; // Destructure named exports from the imported object

    return (
        <section id='schedule' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='Workshop program' body='Schedule' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {schedule.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        src={item.src}
                        github={item.github}
                        site={item.site}
                        institution={item.institution}
                    />
                ))}
            </div>
        </section>
    );
};

export default Schedule;
