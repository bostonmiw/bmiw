import React from 'react'
import Title from '../layouts/Title';

const Venue = () => {
    return (
        <section id='venue' className="w-full py-20">
            <div className="flex justify-center items-center text-center">
                <Title title='Directions to the workshop' body='Venue' />
            </div>
            <div className='w-full'>
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-0">
                    <span className='text-base text-gray-400 tracking-wide'>
                        114 16th St, Charlestown
                        <br/>
                        MA 02129 USA
                    </span>
                    <iframe className="directions"
                            title="direction"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12235.061279382558!2d-71.06558908006292!3d42.374556622499654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370f7f468f54f%3A0xae2e2ea8a4fb104d!2s114%2016th%20St%2C%20Bunker%20Hill%2C%20MA%2002129!5e0!3m2!1sen!2sus!4v1694200400166!5m2!1sen!2sus"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Venue