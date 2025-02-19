import Image from 'next/image'
import React from 'react'


// Images 
import ClientLogo from "media/video-explainer/ftr-cl-logo-img.png"


const Clients = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/clinet-logo-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-col-1">
                        <div className="txt">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px] pb-[30px] lg:pb--[60px]'>Our Clients</h2>
                        </div>
                        <div className="image">
                            <Image src={ClientLogo} alt='client-logo ' className='w-8/12 mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients
