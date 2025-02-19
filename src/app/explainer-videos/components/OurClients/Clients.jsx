import Image from 'next/image'
import React from 'react'


// Images 
import ClientLogo from "media/video-explainer/ftr-cl-logo-img.png"
// ==== Images
import Partners1 from 'media/infinity-studio/partner1.png'
import Partners2 from 'media/infinity-studio/partner2.png'
import Partners3 from 'media/infinity-studio/partner3.png'
import Partners4 from 'media/infinity-studio/partner4.png'
import Partners5 from 'media/infinity-studio/partner5.png'
import Partners6 from 'media/infinity-studio/partner6.png'
import Partners7 from 'media/infinity-studio/partner7.png'

const Clients = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/clinet-logo-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-col-1">
                        <div className="txt">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px] pb-[30px] lg:pb--[60px]'>Our Clients</h2>
                        </div>
                        <div className="image flex items-center justify-center">
                            {/* <Image src={ClientLogo} alt='client-logo ' className='w-8/12 mx-auto' /> */}
                            <Image src={Partners1} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners2} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners3} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners4} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners5} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners6} alt='Logos' className='w-1/12 mx-auto' />
                            <Image src={Partners7} alt='Logos' className='w-1/12 mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients
