import Image from 'next/image'
import React from 'react'

// ==== Images 
import InnerImage from "media/video-explainer/process-inner-bg.png"


const Work = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/process-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>How We Work
                            </h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-11/12 mx-auto leading-[22px] pb-[60px]'>We've simplified our video production process as much as possible thanks to our years of experience. We have got field experts in each process of video making.</p>
                            <Image src={InnerImage} alt='Inner Image' className='w-11/12 mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
