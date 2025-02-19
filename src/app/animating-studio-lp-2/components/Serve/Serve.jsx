import Image from 'next/image'
import React from 'react'
// Images
import Client from "media/infinity-studio-lp-new/client-serve.png"

const Serve = () => {
    return (
        <section className='bg-white py-[50px] lg:py-[90px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-7 lg:mb-14'><span className='text-[#FF0000]'>Clients</span> We Serve</h2>
                        <Image src={Client} alt='Infinity Animation' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Serve
