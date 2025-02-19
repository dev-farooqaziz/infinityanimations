import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png"
import tech1 from "media/game-lp/tech1.png"
import tech2 from "media/game-lp/tech2.png"
import tech3 from "media/game-lp/tech3.png"
import tech4 from "media/game-lp/tech4.png"
import tech5 from "media/game-lp/tech5.png"
import tech6 from "media/game-lp/tech6.png"
import tech7 from "media/game-lp/tech7.png"
import tech8 from "media/game-lp/tech8.png"
import tech9 from "media/game-lp/tech9.png"
import tech10 from "media/game-lp/tech10.png"
import tech11 from "media/game-lp/tech11.png"
import tech12 from "media/game-lp/tech12.png"
import tech13 from "media/game-lp/tech13.png"
import tech14 from "media/game-lp/tech14.png"
import tech15 from "media/game-lp/tech15.png"
import BtnBg1 from "media/game-lp/btn-bg1.png"
import BtnBg2 from "media/game-lp/btn-bg2.png"

const TechStack = () => {
    const techImage = [
        {
            image: tech1,
            text: "Maya"
        },
        {
            image: tech2,
            text: "3DS MAX"
        },
        {
            image: tech3,
            text: "Substance Painter"
        },
        {
            image: tech4,
            text: "Modo"
        },
        {
            image: tech5,
            text: "Substance Designer"
        },
        {
            image: tech6,
            text: "Unity"
        },
        {
            image: tech7,
            text: "Blender"
        },
        {
            image: tech8,
            text: "Marvelous Designer"
        },
        {
            image: tech9,
            text: "Marmoset Toolbag"
        },
        {
            image: tech10,
            text: "Unreal Engine"
        },
        {
            image: tech11,
            text: "Adobe Illustrator"
        },
        {
            image: tech12,
            text: "Adobe Photoshop"
        },
        {
            image: tech13,
            text: "3D Coat"
        },
        {
            image: tech14,
            text: "Key Shot"
        },
        {
            image: tech15,
            text: "Spine"
        },
    ]
    return (
        <section className='pb-[50px] 5xl:py-[90px]'>
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins md:mb-3 relative w-full md:w-9/12 lg:w-8/12 5xl:w-7/12 xl:w-6/12 mx-auto'>
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-[110px] lg:left-[60px] xl:left-[30px] top-[50%] translate-y-[-50%]' />
                                Tech Stack
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-[110px] lg:right-[60px] xl:right-[30px] top-[50%] translate-y-[-50%] rotate-180' />
                            </h2>
                            <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins md:w-9/12 mx-auto xl:px-4 mb-7 md:mb-10'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-5 lg:gap-x-2 xl:gap-x-5 gap-y-5 sm:gap-y-7 lg:gap-y-12 xl:gap-y-16">
                            {techImage.map((content, index) => (
                                <div key={index} >
                                    <div className='flex items-center justify-center bg-[#1C1C1C] rounded-[5px] h-[130px] w-[130px] mx-auto border hover:border-[#FB1E30] hover:duration-1000 duration-1000 ease-in-out border-[#1C1C1C]'>
                                        <Image src={content.image} alt='Tech' />
                                    </div>
                                    <h3 className='text-[14px] xl:text-[16px] leading-[22px] xl:leading-[25px] font-normal poppins text-center mt-[13px] w-10/12 mx-auto h-[55px]'>{content.text}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-[20px] sm:mt-[40px] xl:mt-[65px]">
                            <div className="btn">
                                <a href="tel:012-345-6789" className=' text-white text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                    <Image src={BtnBg1} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                    Contact Us Now
                                </a>
                            </div>
                            <div className="btn">
                                <a href="javascript:$zopim.livechat.window.show();" className=' text-black text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                    <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                    Get A Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
