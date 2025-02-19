import React from 'react'
import Image from 'next/image'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// css
import styles from "./packages.module.css"
// ==== Images 
import pkgIcon from "media/infinity-studio/pkgIcon1.png"
import pkgIcon2 from "media/infinity-studio/pkgIcon2.png"
import pkgIcon3 from "media/infinity-studio/pkgIcon3.png"
import Check from "media/infinity-studio/pkgCheck.png"
import BtnImg from "media/infinity-studio/pkgCta.png"

const Packages = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='py-[50px] lg:py-[80px] packages'>
                <div className="px-4 lg:max-w-7xl mx-auto">
                    <div className="mb-[30px]">
                        <h2 className='text-[#A70A0E] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Pricing </h2>
                        <h3 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Types of Explainer Videos</h3>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all <br /> types of animation videos with the usage of modern devices and techniques, some are <br /> discussed below:</p>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-4">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon} alt='pkgIcon_image' className='  w-[100px] mx-3 my-5 hidden md:block' />
                                        <h3 className='w-full text-[#fff] poppins text-[17px] font-[500] uppercase bg-[#A70A0E] md:w-[80%] md:rounded-r-lg px-[20px] py-[8px] my-4 md:my-0'>Startup Package</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[60px] font-[500] poppins px-[25px]'>$199</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Custom Artwork</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Background Music</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 h-[32px] invisible">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 md:pt-[12px] px-[25px]">
                                        <div className="grid grid-cols-12  items-end">
                                            <div className='col-span-12 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-center items-center text-[16px] text-white font-[500] poppins bg-[#A70A0E] py-[12px] px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] w-full mb-[10px] md:mb-0'>
                                                    Get A Call For Free Consultation
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between pt-0 pb-[25px] md:pt-[25px]">
                                            <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-white poppins flex flex-col justify-center font-[700] bg-[#A70A0E] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                <span className=' text-[16px] font-normal'>012-345-6789</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[16px] font-normal leading-[20px] text-white poppins flex flex-col justify-center bg-[#A70A0E] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                Live Chat Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 ">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon2} alt='pkgIcon_image' className='  w-[100px] mx-3 my-5 hidden md:block' />
                                        <h3 className='w-full text-[#fff] poppins text-[17px] font-[500] uppercase bg-[#003262] md:w-[80%] md:rounded-r-lg px-[20px] py-[8px] my-4 md:my-0'>Classic Package</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[60px] font-[500] poppins px-[25px]'>$499</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Professional Voice-over & SFX</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>  Hand-drawn Illustrations</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Unlimited Revisions</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 md:pt-[12px] px-[25px]">
                                        <div className="grid grid-cols-12  items-end">
                                            <div className='col-span-12 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-center items-center text-[16px] text-white font-[500] poppins bg-[#003262] py-[12px] px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] w-full mb-[10px] md:mb-0'>
                                                    Get A Call For Free Consultation
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between pt-0 pb-[25px] md:pt-[25px]">
                                            <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-white poppins flex flex-col justify-center font-[700] bg-[#003262] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                <span className=' text-[16px] font-normal'>012-345-6789</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[16px] font-normal leading-[20px] text-white poppins flex flex-col justify-center bg-[#003262] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                Live Chat Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 ">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon3} alt='pkgIcon_image' className='  w-[100px] mx-3 my-5 hidden md:block' />
                                        <h3 className='text-[#003262] poppins text-[17px] font-[600] uppercase bg-[#FFCC00] md:w-[80%] md:rounded-r-lg px-[20px] py-[8px] my-4 md:my-0'>Premium Package</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[60px] font-[500] poppins px-[25px]'>$799</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Professional Voice-over & SFX</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Custom 2D Character Illustration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Unlimited Revisions</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className=' ' />
                                                </div>
                                                <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 md:pt-[12px] px-[25px]">
                                        <div className="grid grid-cols-12  items-end">
                                            <div className='col-span-12 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-center items-center text-[16px] text-white font-[500] poppins bg-[#FFCC00] py-[12px] px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] w-full mb-[10px] md:mb-0'>
                                                    Get A Call For Free Consultation
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between pt-0 pb-[25px] md:pt-[25px]">
                                            <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-white poppins flex flex-col justify-center font-[700] bg-[#FFCC00] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                <span className=' text-[16px] font-normal'>012-345-6789</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[16px] font-normal leading-[20px] text-white poppins flex flex-col justify-center bg-[#FFCC00] w-max py-[12px] px-[20px] rounded-[5px]'>
                                                Live Chat Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages
