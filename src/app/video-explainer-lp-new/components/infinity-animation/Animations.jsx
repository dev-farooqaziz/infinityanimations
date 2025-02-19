import Image from 'next/image'
import React from 'react'

// ==== Images 
import Particale from "media/video-explainer2/Composition.png"


const Animations = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer2/branding.png")] relative'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto '>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] md:text-[25px] lg:text-[30px]'>The Proof is in the Pudding
                            </h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-11/12 mx-auto leading-[22px] pb-[40px] lg:pb-[60px]'>Our exceptional explainer videos don't just tell stories; they create success stories.</p>
                        </div>
                    </div>
                    <div className='lg:mx-12 bg-[length:100%_100%] bg-center bg-no-repeat bg-[url("../../public/video-explainer2/brand-bg2.png")] py-[50px] px-[20px] rounded-[10px] relative'>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-white leading-[70px] text-[35px] md:text-[50px] lg:text-[60px] font-[700] montserrat text-center relative'>200 <sup className='text-[25px] font-extrabold top-[8px] absolute'>%</sup></h2>
                                <p className='text-white text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Boost In <br /> Engagement</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-white leading-[70px] text-[35px] md:text-[50px] lg:text-[60px] font-[700] montserrat text-center relative'>150 <sup className='text-[25px] font-extrabold top-[8px] absolute'>%</sup></h2>
                                <p className='text-white text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Increase In <br /> Conversions</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-white leading-[70px] text-[35px] md:text-[50px] lg:text-[60px] font-[700] montserrat text-center relative'>300 <sup className='text-[25px] font-extrabold top-[8px] absolute'>%</sup></h2>
                                <p className='text-white text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Customer <br /> Retention</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <h2 className='text-white leading-[70px] text-[35px] md:text-[50px] lg:text-[60px] font-[700] montserrat text-center relative'>67 <sup className='text-[25px] font-extrabold top-[8px] absolute'>+</sup></h2>
                                <p className='text-white text-center font-[700] montserrat text- text-[18px] leading-[25px]'>Industry Leading <br /> Clients</p>
                            </div>
                        </div>
                        <div className="particale absolute left-[-120px] top-[-70px] xl:block hidden">
                            <Image src={Particale} alt='particle-Image' className='w-[55%] animation' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animations
