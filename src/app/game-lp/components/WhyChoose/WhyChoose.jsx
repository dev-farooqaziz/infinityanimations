import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png"
import BtnBg1 from "media/game-lp/disableBtnbg.png"
import BtnBg2 from "media/game-lp/btn-bg1.png"

const WhyChoose = () => {
    const chooseContent = [
        {
            title: "Expert Game Artists",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
        {
            title: "Customized Visuals",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
        {
            title: "Diverse Art Styles",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
        {
            title: "Collaborative Approach",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
        {
            title: "Diverse Art Styles",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
        {
            title: "Collaborative Approach",
            desc: "Our expert game artists bring your vision to life with stunning visuals, immersive environments, and captivating character designs that elevate your game's overall experience."
        },
    ]
    return (
        <section className='pt-[50px] md:pt-0 pb-[50px] lg:pb-[90px]' id='whyUs'>
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                <div className="grid-cols-12">
                    <div className="txt text-center">
                        <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins relative w-full md:w-7/12 lg:w-8/12 5xl:w-7/12 mx-auto mb-4 md:mb-7 lg:mb-10'>
                            <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-0 xl:left-[25px] top-[50%] translate-y-[-50%]' />
                            Why Choose Us
                            <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-0 xl:right-[25px] top-[50%] translate-y-[-50%] rotate-180' />
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {chooseContent.map((content, index) => (
                        <div key={index} className="group">
                            <div className='border border-[#3D3D3D] px-4 md:px-6 py-5 group-hover:bg-white group-hover:duration-1000 ease-in-out duration-1000'>
                                <h3 className='text-[20px] leading-[30px] poppins font-semibold group-hover:text-black group-hover:duration-1000 ease-in-out duration-1000'>{content.title}</h3>
                                <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-normal text-white group-hover:text-black group-hover:duration-1000 ease-in-out duration-1000 poppins 5xl:pr-4 pt-2 md:pt-3 pb-4 md:pb-6'>{content.desc}</p>
                                <div className="btn">
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-white text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                        <Image src={BtnBg1} alt='Btn Background' fill={true} className='object-cover object-center z-[-1] group-hover:opacity-0 opacity-100 group-hover:duration-1000 ease-in-out duration-1000' />
                                        <Image src={BtnBg2} alt='Btn Background' fill={true} className='object-cover object-center z-[-1] group-hover:opacity-100 opacity-0 group-hover:duration-1000 ease-in-out duration-1000' />
                                        Contact Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
