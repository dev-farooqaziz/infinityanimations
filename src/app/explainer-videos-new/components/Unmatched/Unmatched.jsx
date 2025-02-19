import usePopup from '@/app/configs/store/Popup';
import Image from 'next/image';
import React from 'react'

import { FaAngleRight } from "react-icons/fa";
// Images
import Combo from "media/explainer-videos-new/combo.png"
import Link from 'next/link';

const Unmatched = () => {
    // Form Code Start
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
            <section className="py-[80px] md:py-[100px] bg-[url('../../public/explainer-videos-new/unmatched-bg.png')] bg-cover bg-no-repeat">
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-7 items-center">
                        <div className="col-span-12 lg:col-span-7">
                            <span className='text-[#230d55] bg-white py-[5px] px-[12px] font-[500] md:w-[400px] text-[16px] md:text-[24px] mb-[10px] poppins block'>Claim your Video of more than</span>
                            <h2 className='text-[50px] md:text-[85px] text-white font-[600] leading-[1] poppins mb-4 lg:mb-9'><span className='text-[#f36e16] font-[900]'>60 Sec</span> At Unmatched Prices</h2>
                            <p className='text-[19px] md:text-[24px] lg:text-[27px] text-white mb-[30px] leading-[1.43] font-sans'>We create indulging animations that will</p>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <ul>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Convey Your Story Clearly
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Outperform Your Competition
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Enhance Your Brand Visibility
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Increase Customer Loyalty
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="combo-pack relative rounded-md bg-[#f36e16] lg:w-10/12 mx-auto">
                                <div className="pt-[35px] px-[20px] mb-[20px]">
                                    <Image src={Combo} alt='Infinity Animations' className='mx-auto block' />
                                    <h3 className='text-white font-[700] text-[24px] md:text-[30px] lg:text-[37px] m-0 leading-[1.1] text-center poppins'>Get a Custom Quote</h3>
                                    <p className='text-[16px] lg:text-[23px] leading-[1.43] font-sans text-center'>For Your Next Animation Video</p>
                                </div>
                                <div className="order bg-[#e4b90b] py-[4px] text-center">
                                    <h5 className='text-[#333] text-[24px] md:text-[30px] font-[700] poppins'>
                                        <span className='text-white mr-[10px] md:mr-[0px]'>20% OFF</span> Next Order
                                    </h5>
                                </div>
                                <div className="flex items-center justify-center gap-5 lg:gap-12 relative before:content-[''] before:absolute before:w-[1px] before:bg-white before:h-full before:top-0 before:left-[54%] md:before:left-[52%] before:translate-x-[-52%] mt-[30px]">
                                    <div className="LinkOne">
                                        <a href="tel:012-345-6789;" className='text-white text-[16px] font-[600] poppins text-right'>
                                            <span className='text-[14px] font-[400] block'>
                                                Speak with us
                                            </span>
                                            +012-345-6789
                                        </a>
                                    </div>
                                    <div className="LinkTwo">
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-white text-[16px] font-[600] poppins text-left'>
                                            <span className='text-[14px] font-[400] block'>
                                                Want to discuss?
                                            </span>
                                            Live Chat Now
                                        </a>
                                    </div>
                                </div>
                                <div className="btn flex justify-center mt-[30px] pb-[30px]">
                                    <button onClick={popupHandle} className='bg-white text-black text-[18px] py-[10px] px-[40px] poppins cursor-pointer rounded-[30px] font-[700] uppercase'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section Start */}
            <section className="py-[50px] md:py-[140px] bg-[url('../../public/explainer-videos-new/cta-bg.png')] bg-cover bg-no-repeat mt-[-75px] lg:mt-[-60px]">
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 md:gap-y-7 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <h3 className='text-white text-[35px] leading-[37px] md:leading-[45px] md:text-[42px] font-[700] poppins mb-3 md:mb-0 text-center md:text-left'>What are you waiting for?</h3>
                            <p className='text-[18px] md:text-[24px] lg:text-[25px] text-white md:mb-[30px] leading-[1.43] font-sans text-center md:text-left'>Let’s animate a Kickass Animation Today!</p>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="btn flex justify-center mt-[30px] pb-[30px]">
                                <button onClick={popupHandle} className='bg-[#230d55] text-white text-[14px] md:text-[16px] py-[10px] px-[25px] md:px-[35px] poppins cursor-pointer rounded-[30px] font-[700] uppercase'>
                                    MAKE AN ANIMATION
                                </button>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="Link">
                                <a href="tel:012-345-6789;" className='text-white text-[14px] md:text-[16px] lg:text-[24px] leading-[1.3] poppins text-center'>
                                    <span className='text-[16px] block'>
                                        Discuss with our <span className='font-[600]'>strategists</span>
                                    </span>
                                    <span className='font-[700] text-center block pt-2'>
                                        +012-345-6789
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section End */}
        </>
    )
}

export default Unmatched
