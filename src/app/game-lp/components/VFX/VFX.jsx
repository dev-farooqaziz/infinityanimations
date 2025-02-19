import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import TwoDImage from "media/game-lp/vfxArt.png"
import ImageParticle1 from "media/game-lp/2dparticle.png"
import Images1 from "media/game-lp/vfx1.png"
import Images2 from "media/game-lp/vfx2.png"
import Images3 from "media/game-lp/vfx3.png"
import Images4 from "media/game-lp/vfx4.png"
import BtnBg from "media/game-lp/btn-bg1.png"

const VFX = () => {
    return (
        <>
            <section className='pt-[50px] lg:pt-0 pb-[20px] relative'>
                <div className="bgTxt absolute left-[-165px] top-[50%] translate-y-[-50%] z-[-1] -rotate-90">
                    <h6 className='text-[195px] leading-[290px] font-semibold poppins text-[#1A1A1A]'>VFX</h6>
                </div>
                <div className="px-4 md:px-8 lg:max-w-7xl mx-auto border-b border-b-[#B9B9B9] pb-[50px] lg:pb-[90px]">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="text-center lg:text-left">
                                <h2 className='text-[30px] md:text-[40px] lg:text-[50px] 5xl:text-[60px] font-semibold leading-[50px] lg:leading-[60px] 5xl:leading-[90px] poppins text-white sm:mb-3'><span className='text-[#FB1E30]'>Animation </span>& VFX</h2>
                                <p className='text-[13px] sm:text-[15px] xl:text-[17px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-9'>Infinity Animation Games team has strong expertise in creating 2D art for world-leading video game companies such as Paradox Interactive, Wargaming, and others. We partnered with our clients on a long-term basis, ensuring top-quality game art outsourcing services, massive scaling opportunities, and dedicated teams that fit your particular project.</p>
                                <ul className='pl-5 pb-3'>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        A team of 65 + skilled 2D artists that works under the creative supervision of Art Directors.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        Comprehensive service: concept art, illustrations, 2D environment & character art, game icons, backgrounds, UI/ UX design.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        Experience delivering 100+ successful 2D art projects in the last 8 years, including Paradox’s Crusader Kings III & Stellaris and award-winning Arcanium.
                                    </li>
                                </ul>
                                <a href="tel:012-345-6789" className=' text-white text-[16px] font-light poppins w-[190px] h-[50px] flex items-center justify-center relative z-10 mx-auto lg:ml-0'>
                                    <Image src={BtnBg} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                    Contact Us Now
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="absolute top-0 right-0 w-[60%] z-[-1] object-contain">
                                <Image src={TwoDImage} alt='2D Image' className='w-9/12 lg:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageParticle absolute right-0 bottom-[-63%] xl:bottom-[-57%] translate-y-[-46%] lg:block hidden">
                    <Image src={ImageParticle1} alt='Image Particle' />
                </div>
            </section>
            <section className='z-10 relative pb-[50px] lg:pb-[90px]'>
                <div className="px-4 md:px-8 lg:max-w-7xl mx-auto xl:px-0">
                    <div className="grid grid-cols-12 gap-y-5 md:gap-x-10">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative before:content-[''] before:absolute before:top-[-20px] before:right-[-22px] md:before:w-[1px] md:before:h-[102%] before:bg-[#B9B9B9] before:z-[9999] after:content-[''] after:absolute after:bottom-0 after:right-[-22px] md:after:w-[106%] after:h-[1px] md:after:bg-[#B9B9B9] after:bg-[#000] after:z-[9999] lg:after:hidden pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images1} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[18px] leading-[28px] font-normal poppins text-white '>2D Animation</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative lg:before:content-[''] before:absolute before:bottom-0 lg:before:top-[-20px] before:right-[-22px] md:before:w-[112%] lg:before:w-[1px] before:h-[1px] lg:before:h-[102%] md:before:bg-[#B9B9B9] before:bg-[#000] before:z-[9999] pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images2} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[18px] leading-[28px] font-normal poppins text-white '>3D Animation</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative lg:before:content-[''] before:absolute before:bottom-0 lg:before:top-[-20px] before:right-[-22px] md:before:w-[112%] lg:before:w-[1px] before:h-[1px] lg:before:h-[102%] md:before:bg-[#B9B9B9] before:bg-[#000] before:z-[9999] pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images3} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[18px] leading-[28px] font-normal poppins text-white '>Motion Capture</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images4} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[18px] leading-[28px] font-normal poppins text-white '>Visual Effects</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageParticle absolute left-0 bottom-[-5%] rotate-[-180deg] z-[-1] lg:block hidden">
                    <Image src={ImageParticle1} alt='Image Particle' className='' />
                </div>
            </section>
        </>
    )
}

export default VFX;
