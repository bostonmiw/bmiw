import React from 'react';
import schedule from './Data';
import Title from "../layouts/Title"; // Import the object containing named exports

const Schedule = () => {
    return (
        <section id='schedule' className="w-full py-20">
            <div className="relative overflow-x-auto">
                <div className="flex justify-center items-center text-center">
                    <Title title='Schedule' />
                </div>
                <table className="w-full text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>Time</th>
                            <th>Speaker</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.time}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Schedule;
