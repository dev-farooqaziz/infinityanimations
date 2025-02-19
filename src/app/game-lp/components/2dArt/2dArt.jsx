import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import TwoDImage from "media/game-lp/2dArt.png"
import BgImage from "media/game-lp/2dImagebg.png"
import ImageParticle1 from "media/game-lp/2dparticle.png"
import Images1 from "media/game-lp/2d1.png"
import Images2 from "media/game-lp/2d2.png"
import Images3 from "media/game-lp/2d3.png"
import Images4 from "media/game-lp/2d4.png"
import Images5 from "media/game-lp/2d5.png"
import Images6 from "media/game-lp/2d6.png"
import BtnBg from "media/game-lp/btn-bg1.png"

const TwoDArt = () => {
    return (
        <>
            <section className='pt-[50px] lg:pt-0 pb-[30px] lg:pb-[50px] relative' id='Services'>
                <Image src={BgImage} alt='Background Image' fill={true} className='z-[-1] object-contain object-right opacity-65' />
                <div className="bgTxt absolute left-[-300px] top-[50%] translate-y-[-50%] z-[-1] -rotate-90">
                    <h6 className='text-[195px] leading-[290px] font-semibold poppins text-[#1A1A1A]'>2D Art</h6>
                </div>
                <div className="px-4 md:px-8 lg:max-w-7xl mx-auto border-b border-b-[#B9B9B9] pb-[50px] lg:pb-[90px]">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="text-center lg:text-left">
                                <h2 className='text-[30px] md:text-[40px] lg:text-[50px] 5xl:text-[60px] font-semibold leading-[50px] lg:leading-[60px] 5xl:leading-[90px] poppins text-white sm:mb-3'><span className='text-[#FB1E30]'>2D </span>Art</h2>
                                <p className='text-[13px] sm:text-[15px] xl:text-[17px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-9'>Infinity Animation Games team has strong expertise in creating 2D art for world-leading video game companies such as Paradox Interactive, Wargaming, and others. We partnered with our clients on a long-term basis, ensuring top-quality game art outsourcing services, massive scaling opportunities, and dedicated teams that fit your particular project.</p>
                                <ul className='pl-5 pb-3'>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-10/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        A team of 65 + skilled 2D artists that works under the creative supervision of Art Directors.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-10/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        Comprehensive service: concept art, illustrations, 2D environment & character art, game icons, backgrounds, UI/ UX design.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-10/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
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
                            <Image src={TwoDImage} alt='2D Image' className='w-9/12 lg:w-full mx-auto' />
                        </div>
                    </div>
                </div>
                <div className="imageParticle absolute right-0 bottom-[-52%] 5xl:bottom-[-49.5%] translate-y-[-45%] lg:block hidden">
                    <Image src={ImageParticle1} alt='Image Particle' />
                </div>
            </section>
            <section className='z-10 relative pb-[50px] lg:pb-[90px]'>
                <div className="px-4 md:px-8 lg:max-w-7xl mx-auto xl:px-0">
                    <div className="grid grid-cols-12 gap-y-5 md:gap-x-10 pb-0 md:pb-[30px] md:border-b border-b-[#B9B9B9]">
                        <div className="col-span-12 md:col-span-6">
                            <div className="group relative md:before:content-[''] md:before:absolute md:before:bottom-[-30px] md:before:right-[-22px] md:before:w-[1px] md:before:h-[106%] md:before:bg-[#B9B9B9] md:before:z-[9999]">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images1} alt='2d Image' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Realism</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="group">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images2} alt='2d Image' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Stylized</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-y-5 md:gap-x-10 pt-[30px]">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative before:content-[''] before:absolute before:top-[-30px] before:right-[-22px] md:before:w-[1px] md:before:h-[102%] before:bg-[#B9B9B9] before:z-[9999] after:content-[''] after:absolute after:bottom-0 after:right-[-22px] md:after:w-[106%] after:h-[1px] md:after:bg-[#B9B9B9] after:bg-[#000] after:z-[9999] lg:after:hidden pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images3} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Characters</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative lg:before:content-[''] before:absolute before:bottom-0 lg:before:top-[-30px] before:right-[-22px] md:before:w-[112%] lg:before:w-[1px] before:h-[1px] lg:before:h-[102%] md:before:bg-[#B9B9B9] before:bg-[#000] before:z-[9999] pb-0 md:pb-[30px] lg:pb-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images4} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Environment</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group relative before:content-[''] before:absolute before:top-[-30px] before:right-[-22px] md:before:w-[1px] md:before:h-[102%] before:bg-[#B9B9B9] before:z-[9999] pt-[30px] lg:pt-0">
                                <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-gradient-to-b from-[#cacaca00] to-[#000] w-full h-full">
                                    <div className="image">
                                        <Image src={Images5} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Illustrations</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="group">
                                <div className="relative w-full h-full pt-[30px] lg:pt-0">
                                    <div className="image">
                                        <Image src={Images6} alt='2d Image' className='w-full' />
                                    </div>
                                    <div className="txt absolute bottom-[25px] z-[99999] left-[50%] translate-x-[-50%]">
                                        <h3 className='text-[22px] leading-[33px] font-normal poppins text-white '>Interfaces</h3>
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

export default TwoDArt
