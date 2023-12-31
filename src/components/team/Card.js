import React from 'react';

const Card = (props) => {
    return (
        <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-center">
                <div className="flex h-full flex-col gap-10 ">
                    <div className="w-full h-[80%] overflow-hidden rounded-lg">
                        <img
                            className="w-full h-40 object-cover group-hover:scale-110 duration-300"
                            src={props.src}
                            alt={props.title}
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-md md:text-2md font-titleFont font-bold text-gray-300">
                            {props.title}
                        </h2>
                        <p className='base'>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;