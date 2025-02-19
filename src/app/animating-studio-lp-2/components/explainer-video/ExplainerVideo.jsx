"use client"
import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
// Images
import Chats from "media/infinity-studio-lp-new/chat-icon.svg";
import Logos from "media/infinity-studio-lp-2/animations-logos.png"

const ExplainerVideo = () => {
    const animationVideo = "https://player.vimeo.com/progressive_redirect/playback/973456427/rendition/1080p/file.mp4?loc=external&signature=bec01dc8250d19fddde8de57be2a91813d578dfc4f31dbe5a25fa58857a4113e";
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='bg-white pt-[50px] lg:pt-[90px] pb-[40px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2'>
                                Best <span className='text-[#F5090B]'>Animated</span> Explainer Video <span className='text-[#f50908]'>Creation</span> Services
                            </h2>
                            <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-10/12 mx-auto'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure our clients are fully aware of the project progress and are completely satisfied too. We cater a strong relationship with clients, starting from your ideas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#F5090B] relative'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6">
                            <div className="pt-[50px] pb-[25px] lg:py-[90px]">
                                <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] mb-3'>Explain Better. Drive <br className='xl:block hidden' /> Engagement. Get More Sales.</h2>
                                <h6 className='text-[15px] lg:text-[18px] text-white leading-[24px] lg:leading-[28px] font-semibold poppins mb-4 lg:pr-8'>
                                    Don't settle for ordinary—capture your audience’s attention with the irresistible allure of animated videos.
                                </h6>
                                <p className='text-white text-[13px] lg:text-[14px] xxl:text-[15px] pr-[10px] poppins mb-7 lg:pr-10'>Our explainer videos simplify complex ideas and engage viewers like never before. Studies show that explainer videos can boost sales by up to 49%, so investing in our animations is a game-changer for your ROI. At Infinity Animations, we deliver innovative, high-quality videos on tight deadlines and at competitive prices. Join top industry leaders who have already reaped the rewards of our exceptional service. Elevate your business with the power of explainer videos today!</p>
                                <div className="flex flex-col md:flex-row items-center justify-start gap-3">
                                    <div className='w-full md:w-max'>
                                        <a href="tel:012-345-6789" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-black font-semibold poppins h-[45px] w-full md:w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-white hover:duration-700 hover:transition-all'>
                                            <FaPhoneAlt className='text-black' />
                                            Call Now
                                        </a>
                                    </div>
                                    <div className='w-full md:w-max'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-full md:w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all'>
                                            <Image src={Chats} alt='Infinity Animation' className='brightness-200 invert-0' />
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-black h-full w-full md:w-6/12 ml-auto md:absolute right-0 clipPath pb-[25px] md:mb-0">
                                <video src={animationVideo} autoPlay={true} loop={true} muted={true} className='w-full h-full mt-0'>
                                    Your Browser doesn't support video
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white pt-4 lg:pt-8'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <Image src={Logos} alt='Infinity Animation' className='mx-auto' />
                </div>
            </section>
        </>
    )
}

export default ExplainerVideo