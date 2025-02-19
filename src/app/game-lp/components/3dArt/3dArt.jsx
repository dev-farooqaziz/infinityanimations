import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import TwoDImage from "media/game-lp/3dArt.png"
import ImageParticle1 from "media/game-lp/2dparticle.png"
import Images1 from "media/game-lp/3d1.png"
import Images2 from "media/game-lp/3d2.png"
import Images3 from "media/game-lp/3d3.png"
import Images4 from "media/game-lp/3d4.png"
import Images5 from "media/game-lp/3d5.png"
import Images6 from "media/game-lp/3d6.png"
import BtnBg from "media/game-lp/btn-bg1.png"

const ThreeDArt = () => {
    return (
        <>
            <section className='pb-[30px] lg:pb-[50px] md:pt-[30px] relative overflow-hidden'>
                <div className="bgTxt absolute right-[-275px] top-[50%] translate-y-[-50%] z-[-1] -rotate-90">
                    <h6 className='text-[195px] leading-[290px] font-semibold poppins text-[#1A1A1A]'>3D Art</h6>
                </div>
                <div className="px-4 md:px-8 lg:max-w-7xl mx-auto border-b border-b-[#B9B9B9] pb-[50px] lg:pb-[90px]">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                            <Image src={TwoDImage} alt='2D Image' className='w-9/12 lg:w-full mx-auto' />
                        </div>
                        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                            <div className="text-center lg:text-left">
                                <h2 className='text-[30px] md:text-[40px] lg:text-[50px] 5xl:text-[60px] font-semibold leading-[50px] lg:leading-[60px] 5xl:leading-[90px] poppins text-white sm:mb-3'><span className='text-[#FB1E30]'>3D </span>Art</h2>
                                <p className='text-[13px] sm:text-[15px] xl:text-[17px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-8'>Our team develops compelling 3D characters and mesmerizing environments for video games. Infinity Animation Games can accelerate your production by creating 3D models of creatures, vehicles, weapons, and hard-surface objects in broad styles — from high-fidelity photorealistic art to stylized, retro & cartoony.</p>
                                <ul className='pl-5 pb-3'>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        1000+ 3D models created for games, including legendary titles like World of Tanks, Sniper: Ghost Warrior Contracts 2, VRChat, and others.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        3D art production for different platforms — from mobile to desktop and high-end consoles.
                                    </li>
                                    <li className="text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] text-white poppins mb-4 xl:w-11/12 relative before:content-[''] before:absolute before:top-[8px] before:left-[-20px] before:w-[9px] before:h-[9px] before:bg-[#FB1E30] before:rounded-full">
                                        A robust pipeline & versatility. We can create 3D game assets from scratch starting from concepts or precisely work using your specifications.
                                    </li>
                                </ul>
                                <div className="btn w-full sm:block hidden mb-[30px] lg:mb-0">
                                    <a href="tel:012-345-6789" className=' text-white text-[16px] font-light poppins w-[190px] h-[50px] flex items-center justify-center relative z-10 mx-auto lg:ml-0'>
                                        <Image src={BtnBg} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                        Contact Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageParticle absolute right-0 bottom-[-58%] 5xl:bottom-[-60%] xl:bottom-[-57%] translate-y-[-55%] lg:block hidden">
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
                                        <Image src={Images1} alt='2d Image' className='w-full' />
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
                                        <Image src={Images2} alt='2d Image' className='w-full' />
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

export default ThreeDArt
