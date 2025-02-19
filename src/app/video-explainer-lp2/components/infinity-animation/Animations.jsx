import Image from 'next/image'
import React from 'react'

// ==== Images 
import Particale from "media/video-explainer/statistic-side-img.png"


const Animations = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/statics-bg.jpg")] relative'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto '>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] md:text-[25px] lg:text-[30px]'>Proven Statistics of Infinity Animations
                            </h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-11/12 mx-auto leading-[22px] pb-[60px]'>There is an immense amount of product animation & graphic content out there but here at Video Explain Art , we make sure our animation service & work stands out.</p>
                        </div>
                    </div>
                    <div className='bg-cover bg-center bg-[url("../../public/video-explainer/statics-inner-bg.jpg")] py-[50px] px-[20px] rounded-[10px] relative'>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-[#231f20] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>4 <sup className='text-[25px] font-[400] top-[35px] absolute'>+</sup></h2>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Years Of <br />
                                    Experience</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-[#231f20] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>1600 <sup className='text-[25px] font-[400] top-[35px] absolute'>+</sup></h2>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Videos <br />
                                    Delivered</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-[#231f20] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>1200 <sup className='text-[25px] font-[400] top-[35px] absolute'>+</sup></h2>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Clients <br />
                                    Across The World</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-[#231f20] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>15 <sup className='text-[25px] font-[400] top-[35px] absolute'>+</sup></h2>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Million Views</p>
                            </div>
                        </div>
                        <div className="particale absolute left-[-113px] top-[-50px] xl:block hidden">
                            <Image src={Particale} alt='particle-Image' className='w-[90%] animation' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animations
