import React, { useState } from 'react'
import Image from 'next/image';
import usePopup from '@/app/configs/store/Popup';

import { FaExternalLinkAlt } from "react-icons/fa";

const Startups = ({ content }) => {
    const { tabInfo, tabContents } = content;
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // PopUp Code
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className='py-[30px] md:py-[60px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="txt">
                            <h2 className='text-primary-100 text-[25px] md:text-[40px] font-[700] mb-0 leading-[30px] md:leading-[45px] font-sans text-center'>Tailor Made Services For Startups, SMEs And Entrepreneurs.</h2>
                            <p className='text-[#676a6b] lg:w-10/12 text-[14px] text-center mx-auto py-[20px] tracking-[1px] font-[600] poppins'>Our Design And Development Teams Contain Almost Two Decades Of Experience. We Cover The Multiple Business Niches Worldwide That Make Us Proud In The Digital Industry.</p>
                        </div>
                        <div>
                            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto mb-[25px] md:mb-0">
                                {tabInfo.map((tab, index) => (
                                    <li key={index}
                                        className={`inline-block p-[12px] text-[14px] font-[600] font-sans border rounded-[6px] cursor-pointer hover:border-[#f5090b] border-2 ${activeTab === index ? 'bg-[#f5090b] text-white' : 'border-[#f5090b] text-black'}`}
                                        onClick={() => handleTabClick(index)}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                            <div className="tabs-content pt-7 hidden md:block">
                                {tabContents[activeTab].map((item, index) => (
                                    <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8'>
                                        <div className='pl-[22px]'>
                                            <h3 className='text-primary-100 lg:text-[37px] font-sans leading-[45px] font-[700] px-[15px] mb-[25px]'>{item.tabTxt}</h3>
                                            <p className='text-black text-[16px] px-[15px] leading-[20px] text-justify font-light poppins mb-[35px]'>{item.tabDesc}</p>
                                            <div className="btn group px-[15px]">
                                                <button onClick={popupHandle} className='text-[17px] font-bold poppins group-hover:text-white text-primary-100 border-[#f5090b] border-2 rounded-[5px] leading-[19px] mt-[20px] py-[10px] px-[35px] w-[50%] md:w-[70%] lg:w-[36%] text-center duration-700 group-hover:duration-700 ease-in-out group-hover:bg-[#f5090b] flex items-center justify-center overflow-hidden relative'>
                                                    <FaExternalLinkAlt className='absolute top-[50%] translate-y-[-50%] ml-[-110%] group-hover:ml-[-68%] duration-700 group-hover:duration-700 ease-in-out text-[17px] font-bold poppins group-hover:text-white' />
                                                    <span>Get A Quote</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            {item.isVideo ? (
                                                <video src={item.tabVideo} loop={true} muted={true} autoPlay={true}></video>
                                            ) : (
                                                <Image src={item.tabImage} alt='Infinity Animations' />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="block md:hidden">
                                {tabContents[activeTab].map((item, index) => (
                                    <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                        <div className='md:pl-[22px]'>
                                            <h3 className='text-primary-100 text-[25px] lg:text-[37px] font-sans leading-[30px] font-[700] px-[15px] mb-[15px]'>{item.tabTxt}</h3>
                                            <p className='text-black text-[16px] px-[15px] leading-[20px] text-justify font-light poppins mb-[35px]'>{item.tabDesc}</p>
                                            <div className="btn group px-[15px]">
                                                <button onClick={popupHandle} className='text-[17px] font-bold poppins group-hover:text-white text-primary-100 border-[#f5090b] border-2 rounded-[5px] leading-[19px] mt-[20px] py-[10px] px-[35px] md:w-[50%] lg:w-[36%] text-center duration-700 group-hover:duration-700 ease-in-out group-hover:bg-[#f5090b] flex items-center justify-center overflow-hidden relative'>
                                                    <FaExternalLinkAlt className='absolute top-[50%] translate-y-[-50%] ml-[-110%] group-hover:ml-[-60%] duration-700 group-hover:duration-700 ease-in-out text-[17px] font-bold poppins group-hover:text-white' />
                                                    <span>Get A Quote</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            {item.isVideo ? (
                                                <video src={item.tabVideo} loop={true} muted={true} autoPlay={true}></video>
                                            ) : (
                                                <Image src={item.tabImage} alt='Infinity Animations' />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Startups
