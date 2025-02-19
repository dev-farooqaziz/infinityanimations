
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import ctaImg from "media/infinity-studio/ctaImg.png"

const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='pt-0 md:pt-[50px] lg:pt-[80px] lg:relative px-4 xl:px-0'>
                <div className='px-5 sm:px-8 xl:max-w-7xl mx-auto bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl pt-[25px]  '>
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-6 pb-4 pt-2 lg:py-[25px] xl:py-[50px]'>
                            <div className="content">
                                <h2 className='text-[#fff] font-[700] poppins text-[20px] lg:text-[25px] xl:text-[36px] leading-[28px] lg:leading-[35px] xl:leading-[56px]'>
                                    {title} <br />
                                </h2>
                                <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] pt-[13px] pb-[20px] xl:pt-[20px] xl:pb-[30px] leading-[25px]'>
                                    {desc}
                                </p>
                            </div>
                            <div className="btns flex-wrap flex items-center justify-center lg:justify-start gap-5 mt-0">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[16px] text-[#003262] font-[600] poppins bg-[#FFCC00] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get A Free Quote
                                    </button>
                                </div>
                                <div className="btn">
                                    <a href='tel:012-345-6789' className='flex items-center text-[15px] text-black font-[700] font-sans bg-[#f6c501] ml-[10px] py-[12px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl '>
                                        Toll Free: 012-345-6789
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 flex justify-center'>
                            <div className='lg:absolute lg:top-[1%] w-[450px] lg:w-[50%] xl:w-[50%] 2xl:w-[44%] xxl:w -[39%] 3xl:w-[36%] h-full lg:h-auto mb-0 flex items-end bottom-0 right-0 xl:right-auto'>
                                <Image src={ctaImg} alt='Infinity Animations ' className='  mb-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands