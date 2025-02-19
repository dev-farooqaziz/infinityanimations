"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa'
//==========
import usePopup from '@/app/configs/store/Popup'
// imges  
import card1 from "media/infinity-studio-lp-new/package-1.png"
import card2 from "media/infinity-studio-lp-new/package-2.png"
import card3 from "media/infinity-studio-lp-new/package-3.png"
import Image1 from "media/infinity-studio-lp-new/packagesImage1.png"
import Image2 from "media/infinity-studio-lp-new/packagesImage2.png"
import Image3 from "media/infinity-studio-lp-new/packagesImage3.png"
import Tick from "media/infinity-studio-lp-new/tick.png"

const Packages = () => {

    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='bg-white py-[50px] lg:py-[90px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <p className='text-[18px] lg:text-[25px] text-center leading-[25px] lg:leading-[38px] poppins font-semibold text-black'>Pricing</p>
                        <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-2'>A Comprehensive Suite of <span className='text-[#FF0000]'>Video Animation</span> Packages</h2>
                        <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center lg:w-8/12 xl:px-[23px] mx-auto mb-4 md:mb-10'>Infinity Animations is a renowned name in the video animation industry. Our packages cover all the pre-production and post-production steps so that you walk away with an animated video that delivers results.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className='bg-gradient-to-r from-[#f3d86e] to-[#FFCC00] rounded-[30px] md:rounded-[40px] lg:rounded-[25px] group'>
                            <div className="image overflow-hidden rounded-t-[10px] lg:rounded-t-[20px]">
                                <Image src={card1} alt='Infinity Animation' className='w-full h-full object-cover lg:group-hover:translate-x-[-100px] ease-in-out group-hover:duration-1000 duration-1000 translate-x-0 lg:max-w-[500px] lg:min-w-[500px] lg:min-h-[150px] lg:max-h-[150px] xl:min-h-[200px] xl:max-h-[200px]' />
                            </div>
                            <Image src={Image1} alt='Infinfity Animation' className='mt-[-55px] mx-auto relative z-10' />
                            <div className='px-5 pb-2'>
                                <p className='text-center text-[17px] xl:text-[20px] font-semibold leading-[24px] xl:leading-[30px] poppins text-black'>Startup Package</p>
                                <h5 className='text-[50px] xl:text-[70px] font-bold poppins text-center leading-[60px] xl:leading-[85px] mb-2 text-black'>$195</h5>
                                <ul className='pb-4'>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>30 Seconds Duration</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Script Writing</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Custom Artwork</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Background Music</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>HD Format Video</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' width={14} height={14} />
                                        <span className='text-black text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Dedicated Support</span>
                                    </li>
                                </ul>
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center justify-center text-[11px] xl:text-[15px] text-white font-medium poppins bg-[#A70A0E] py-[12px] px-[10px] lg:px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-full'>
                                        Get A Call For Free Consultation
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-y-3 items-center justify-between mt-[20px] mb-[10px] xl:px-2">
                                    <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] montserrat flex justify-center items-center gap-x-2 font-normal'>
                                        <FaPhoneVolume className='rotate-[-45deg] text-black mt-1' />
                                        <span className='text-[#231f20] text-[16px] pt-2'>
                                            012-345-6789
                                        </span>
                                    </a>
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 leading-[20px] montserrat flex flex-col justify-center font-normal text-[#231f20] text-[16px] pt-2'>
                                        Live Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className='bg-gradient-to-r from-[#003262] to-[#005DB8] rounded-[30px] md:rounded-[40px] lg:rounded-[25px] overflow-hidden group shadow-sm lg:scale-[1.04]'>
                            <div className="image overflow-hidden rounded-t-[10px] lg:rounded-t-[20px]">
                                <Image src={card2} alt='Infinity Animation' className='w-full h-full lg:group-hover:translate-x-[-100px] ease-in-out group-hover:duration-1000 duration-1000 translate-x-0 lg:max-w-[500px] lg:min-w-[500px] lg:min-h-[150px] lg:max-h-[150px] xl:min-h-[200px] xl:max-h-[200px]' />
                            </div>
                            <Image src={Image2} alt='Infinfity Animation' className='mt-[-55px] mx-auto relative z-10' />
                            <div className='px-5 pb-2'>
                                <p className='text-center text-[17px] xl:text-[20px] font-semibold leading-[24px] xl:leading-[30px] poppins text-white'>Classic Package</p>
                                <h5 className='text-[50px] xl:text-[70px] font-bold poppins text-center leading-[60px] xl:leading-[85px] mb-2 text-white'>$499</h5>
                                <ul className='pb-4'>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>30 Seconds Duration</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Script Writing</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Professional Voice-over & SFX</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Hand-drawn Illustrations</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>HD Format Video</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Dedicated Support</span>
                                    </li>
                                </ul>
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center justify-center text-[11px] xl:text-[15px] text-[#0056AB] font-medium poppins bg-white py-[12px] px-[10px] lg:px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-full'>
                                        Get A Call For Free Consultation
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-y-3 items-center justify-between mt-[20px] mb-[10px] xl:px-2">
                                    <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] montserrat flex justify-center items-center gap-x-2 font-normal'>
                                        <FaPhoneVolume className='rotate-[-45deg] text-white mt-1' />
                                        <span className='text-white text-[16px] pt-2'>
                                            012-345-6789
                                        </span>
                                    </a>
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 leading-[20px] montserrat flex flex-col justify-center font-normal text-white text-[16px] pt-2'>
                                        Live Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className='bg-gradient-to-r from-[#C55F61] to-[#A70A0E] rounded-[30px] md:rounded-[40px] lg:rounded-[25px] group'>
                            <div className="image overflow-hidden rounded-t-[10px] lg:rounded-t-[20px]">
                                <Image src={card3} alt='Infinity Animation' className='w-full h-full lg:group-hover:translate-x-[-100px] ease-in-out group-hover:duration-1000 duration-1000 translate-x-0 lg:max-w-[500px] lg:min-w-[500px] lg:min-h-[150px] lg:max-h-[150px] xl:min-h-[200px] xl:max-h-[200px]' />
                            </div>
                            <Image src={Image3} alt='Infinfity Animation' className='mt-[-55px] mx-auto relative z-10' />
                            <div className='px-5 pb-2'>
                                <p className='text-center text-[17px] xl:text-[20px] font-semibold leading-[24px] xl:leading-[30px] poppins text-white'>Premium Package</p>
                                <h5 className='text-[50px] xl:text-[70px] font-bold poppins text-center leading-[60px] xl:leading-[85px] mb-2 text-white'>$799</h5>
                                <ul className='pb-4'>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>30 Seconds Duration</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Script Writing</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Professional Voice-over & SFX</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Hand-drawn Illustrations</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>HD Format Video</span>
                                    </li>
                                    <li className='flex items-center gap-2 mb-2'>
                                        <Image src={Tick} alt='Infinity Animation' className='invert-[1]' width={14} height={14} />
                                        <span className='text-white text-[15px] xl:text-[18px] font-normal leading-[25px] xl:leading-[35px] poppins'>Dedicated Support</span>
                                    </li>
                                </ul>
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center justify-center text-[11px] xl:text-[15px] text-[#AB1518] font-medium poppins bg-white py-[12px] px-[10px] lg:px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-full'>
                                        Get A Call For Free Consultation
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-y-3 items-center justify-between mt-[20px] mb-[10px] xl:px-2">
                                    <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] montserrat flex justify-center items-center gap-x-2 font-normal'>
                                        <FaPhoneVolume className='rotate-[-45deg] text-white mt-1' />
                                        <span className='text-white text-[16px] pt-2'>
                                            012-345-6789
                                        </span>
                                    </a>
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 leading-[20px] montserrat flex flex-col justify-center font-normal text-white text-[16px] pt-2'>
                                        Live Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages
