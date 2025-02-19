import Image from 'next/image'
import React from 'react'


// Images 
import ClientLogo from "media/infinity-studio/footerLogos.png"


const Clients = () => {
    return (
        <>
            <section className='pb-[50px] '>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-col-1">
                        <div className="txt mb-[20px]">
                            <h3 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Our Clients</h3>
                        </div>
                        <div className="image">
                            <Image src={ClientLogo} alt='client-logo' className='w-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients
