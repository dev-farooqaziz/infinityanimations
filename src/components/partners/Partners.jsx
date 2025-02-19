"use client"
import Image from "next/image"; 

import slide1 from 'media/icons/partner1.png'
import slide2 from 'media/icons/partner2.png'

const Testimonial = () => { 
    return (
        <>
            <section className={`w-full flex py-16`}>
                <div className="container">
                    <div className='flex items-start justify-between'>
                        <div className='w-full text-center'>
                            <h2 className='text-[40px] md:text-[60px] font-bold font-sans leading-tight text-center lg:w-10/12 mx-auto mb-3'>Our Partners and Clients Make Us the Most Outstanding Service Providers Today</h2>
                        </div>
                    </div>
                    <div className="mt-12"> 
                        <div className="slider1 border-b border-[#F91927] sm:mr-[-40px] pb-5 relative sm:before:content-[''] sm:before:bg-[url('../../public/icons/why-us-arrow.png')] sm:before:bg-no-repeat sm:before:absolute sm:before:left-[-90px] sm:before:bottom-[-15px] sm:before:w-[100px] sm:before:h-[100px] sm:before:-rotate-180">
                            <Image src={slide1} alt="Infinity Animation" className="lg:w-11/12 ml-auto" />
                        </div>
                        <div className="slider2 pt-14 sm:ml-[-40px] border-b border-[#F91927] pb-5 relative sm:before:content-[''] sm:before:bg-[url('../../public/icons/why-us-arrow.png')] sm:before:bg-no-repeat sm:before:absolute sm:before:right-[-80px] sm:before:bottom-[-82px] sm:before:w-[100px] sm:before:h-[100px]">
                            <Image src={slide2} alt="Infinity Animation" className="lg:w-11/12" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
