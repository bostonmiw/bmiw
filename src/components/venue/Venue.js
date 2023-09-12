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
                        Exact location TBD
                        <br/>
                        Boston, MA USA
                    </span>
                    <iframe className="directions"
                            title="direction"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11792.685101158833!2d-71.0638692!3d42.360189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370866bb028a7%3A0xc2f8ab58860405!2sFaneuil%20Hall%20Marketplace!5e0!3m2!1sen!2sus!4v1685319003214!5m2!1sen!2sus"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Venue