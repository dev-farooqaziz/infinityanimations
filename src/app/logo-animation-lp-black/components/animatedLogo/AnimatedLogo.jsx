import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const AnimatedLogo = () => {
    return (
        <>
            <section className='pt-[60px] pb-[60px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="txt">
                            <h2 className="text-[#f5090b] text-[25px] md:text-[40px] font-[700] mb-[45px] text-center leading-[30px] font-sans relative before:absolute before:content-[''] before:top-[-15px] before:left-0 before:right-[35px] before:mx-auto before:h-[5px] before:w-[60px] before:bg-[#f5090b]">
                                ANIMATED LOGO
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        <div>
                            <div className="logoCardShadow border-[5px] border-[#f5090b] p-[20px] duration-700 ease-in-out hover:duration-700 h-full">
                                <div className="txt text-center">
                                    <h5 className='text-[#f5090b] text-[38px] uppercase font-[400] font-sans leading-[35px]  mb-[10%]'>
                                        BRONZE
                                    </h5>
                                    <p className='text-[13px] text-white leading-[1] font-[400] font-sans mb-[5%]'>ANIMATED LOGO</p>
                                    <span className='text-[#f5090b] text-[40px] pt-0 font-[400] font-sans'>$299</span>
                                </div>
                                <div className="lists mt-[11%]">
                                    <ul>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Up to 4 Seconds</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>HD Quality 1920 x1080</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>72 Hrs Delivery Time</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Dedicated Specialist Logo Animator</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Template Base Logo Animation</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Royalty free BG & SFX</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] text-center'>
                                            <span className='text-white text-[14px] poppins font-bold'>References</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-[#f5090b] pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn mt-[15%] lg:mt-[25%]">
                                    <a href="javascript:$zopim.livechat.window.show();" className='bg-[#f5090b] text-white py-[9px] px-[29px] text-[17px] font-[300] font-sans flex items-center justify-center w-9/12 mx-auto'>
                                        ORDER NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="logoCardShadow border-[5px] border-white p-[20px] duration-700 ease-in-out hover:duration-700 h-full">
                                <div className="txt text-center">
                                    <h5 className='text-white text-[38px] uppercase font-[400] font-sans leading-[35px]  mb-[10%]'>
                                        SILVER
                                    </h5>
                                    <p className='text-[13px] text-white leading-[1] font-[400] font-sans mb-[5%]'>ANIMATED LOGO</p>
                                    <span className='text-white text-[40px] pt-0 font-[400] font-sans'>$399</span>
                                </div>
                                <div className="lists mt-[11%]">
                                    <ul>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Up to 8 Secondss</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>HD Quality 1920 x1080</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>72 Hrs Delivery Time</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Dedicated Specialist Logo Animator</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Custom Animation
                                            </span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Text Base Logo Animation
                                            </span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Royalty free BG & SFX</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] text-center'>
                                            <span className='text-white text-[14px] poppins font-bold'>References</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn mt-[15%] lg:mt-[25%]">
                                    <a href="javascript:$zopim.livechat.window.show();" className='bg-white text-black py-[9px] px-[29px] text-[17px] font-[300] font-sans flex items-center justify-center w-9/12 mx-auto'>
                                        ORDER NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="logoCardShadow border-[5px] border-[#f5090b] p-[20px] duration-700 ease-in-out hover:duration-700 h-full">
                                <div className="txt text-center">
                                    <h5 className='text-[#f5090b] text-[38px] uppercase font-[400] font-sans leading-[35px]  mb-[10%]'>
                                        GOLD
                                    </h5>
                                    <p className='text-[13px] text-white leading-[1] font-[400] font-sans mb-[5%]'>ANIMATED LOGO</p>
                                    <span className='text-[#f5090b] text-[40px] pt-0 font-[400] font-sans'>$499</span>
                                </div>
                                <div className="lists mt-[11%]">
                                    <ul>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Up to 10 Seconds</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>HD Quality 1920 x1080</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>72 Hrs Delivery Time</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Dedicated Specialist Logo Animator</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>
                                                Tagline Voice Over
                                            </span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Custom motion graphic logo animation</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Royalty free BG & SFX</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] text-center'>
                                            <span className='text-white text-[14px] poppins font-bold'>References</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn mt-[15%] lg:mt-[25%]">
                                    <a href="javascript:$zopim.livechat.window.show();" className='bg-[#f5090b] text-white py-[9px] px-[29px] text-[17px] font-[300] font-sans flex items-center justify-center w-9/12 mx-auto'>
                                        ORDER NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="logoCardShadow border-[5px] border-white p-[20px] duration-700 ease-in-out hover:duration-700 h-full">
                                <div className="txt text-center">
                                    <h5 className='text-white text-[38px] uppercase font-[400] font-sans leading-[35px]  mb-[10%]'>
                                        PLATINUM
                                    </h5>
                                    <p className='text-[13px] text-white leading-[1] font-[400] font-sans mb-[5%]'>ANIMATED LOGO</p>
                                    <span className='text-white text-[40px] pt-0 font-[400] font-sans'>$899</span>
                                </div>
                                <div className="lists mt-[11%]">
                                    <ul>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Up to 20 Seconds</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>HD Quality 1920 x1080</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>72 Hrs Delivery Time</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Dedicated Specialist Logo Animator</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Custom Logo animation with element 3D effects</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] flex'>
                                            <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                            <span className='text-white text-[14px] poppins font-[300]'>Royalty free BG & SFX</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px] text-center'>
                                            <span className='text-white text-[14px] poppins font-bold'>References</span>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/o4jdybe127mxbhr/option%202%20final.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                        <li className='border-b border-[#d9c4b4] min-h-[22px] py-[2px]'>
                                            <Link href="https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0" className='text-ellipsis whitespace-nowrap flex items-center overflow-hidden'>
                                                <span>
                                                    <FaCheck className='text-primary-100 pr-[8px] text-[22px] font-[600]' />
                                                </span>
                                                <span className='text-[#f5090b] text-[14px] poppins font-[300]'>https://www.dropbox.com/s/4zeiplmcqq1sr57/The%20Living%20Logo%20Option%202%20HD%201080.mp4?dl=0</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn mt-[15%] lg:mt-[25%]">
                                    <a href="javascript:$zopim.livechat.window.show();" className='bg-white text-black py-[9px] px-[29px] text-[17px] font-[300] font-sans flex items-center justify-center w-9/12 mx-auto'>
                                        ORDER NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnimatedLogo
