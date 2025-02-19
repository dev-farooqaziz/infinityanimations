"use client"
//========== Imports
import Image from 'next/image'
import Link from 'next/link'
//========== Import Components
import Form from '../form/Form'
// ==== Images 
import Payment from "media/healthcare/payment.png"
import map from "media/healthcare/icons/map.png"
import phone from "media/healthcare/icons/phone.png"
import email from "media/healthcare/icons/email.png"

const Contact = () => {
    return (
        <>
            <section className='py-[50px] lg:py-[90px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-y-20">
                        <div className="col-span-12 5xl:col-span-6">
                            <div className="address_detail">
                                <div className="mb-5">
                                    <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-white'>Get In <span className='text-[#F5090B]'>Touch</span> Now!</h2>
                                    <p className='text-[16px] poppins leading-relaxed font-normal text-white w-full 5xl:w-11/12'>Ready to elevate your healthcare communications? Our expert team is here to create engaging and informative animations that make complex medical topics easy to understand.</p>
                                </div>
                                <ul>
                                    <li className='py-[12px]'>
                                        <a href="javascript:;" target='_blank' className='text-[16px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Image src={map} alt='Infinity Animations' className='w-[18px] h-[25px]' />
                                            <span>Office abc street, New York</span>
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="javascript:;" target='_blank' className='text-[16px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Image src={map} alt='Infinity Animations' className='w-[18px] h-[25px]' />
                                            <span>Office abc street, Canada</span>
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="javascript:;" target='_blank' className='text-[16px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Image src={map} alt='Infinity Animations' className='w-[18px] h-[25px]' />
                                            <span className='w-full 5xl:w-8/12'>Office abc street, London</span>
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="tel:012-345-6789" className='text-[16px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Image src={phone} alt='Infinity Animations' className='w-[20px] h-[25px]' />
                                            <span>012-345-6789</span>
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="mailto:info@xyz.com" className='text-[16px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Image src={email} alt='Infinity Animations' className='w-[20px] h-[15px] 5xl:h-[20px]' />
                                            <span>info@xyz.com</span>
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-8/12 sm:w-5/12 lg:w-8/12 mt-5 lg:mt-10 object-contain' />
                            </div>
                        </div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-12 md:col-span-10 5xl:col-span-5">
                            <div className="bg-white px-8 py-8 md:px-10 md:py-12 relative">
                                <span className="hidden md:block before:absolute before:bg-[#D8D8D8] before:w-[1.5px] 5xl:before:w-[1px] xl:before:w-[1.5px] before:h-[108%] md:before:h-[112%] 5xl:before:h-[105%] xl:before:h-[112%] before:left-0 before:top-[-4%] md:before:top-[-6%] 5xl:before:top-[-2.5%] xl:before:top-[-6%] after:absolute after:bg-[#D8D8D8] after:w-[110%] 5xl:after:w-[106%] xl:after:w-[115%] after:h-[1.5px] 5xl:after:h-[1px] xl:after:h-[1.5px] after:left-[-5%] 5xl:after:left-[-3%] xl:after:left-[-7%] after:top-0"></span>
                                <div className="mb-8">
                                    <h4 className="text-[25px] poppins font-semibold text-black text-center mb-2">Fill Your <span className='text-[#F5090B]'>Requirements</span></h4>
                                    <p className='text-[14px] poppins font-normal text-black text-center'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement.</p>
                                </div>
                                <Form
                                    bg="bg-form"
                                />
                                <span className="hidden md:block before:absolute before:bg-[#D8D8D8] before:w-[1.5px] md:before:w-[2px] 5xl:before:w-[1.5px] xl:before:w-[2px] before:h-[108%] md:before:h-[112%] 5xl:before:h-[105%] xl:before:h-[112%] before:right-0 before:bottom-[-4%] md:before:bottom-[-6%] 5xl:before:bottom-[-2.5%] xl:before:bottom-[-6%] after:absolute after:bg-[#D8D8D8] after:w-[110%] 5xl:after:w-[106%] xl:after:w-[115%] after:h-[2px] md:after:h-[1.5px] after:right-[-5%] 5xl:after:right-[-3%] xl:after:right-[-7%] after:bottom-0"></span>
                            </div>
                        </div>
                        <div className="col-span-1 hidden md:block 5xl:hidden"></div>
                    </div>
                </div>
            </section>
            <div className="copyright py-[20px] bg-[#292929] ">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <p className='text-[14px] text-[#fff] px-5 font-normal poppins text-center'>Copyright © 2024,  <Link target="_blank" className="no-underline" href="javascript:;">Infinity Animations All Rights Reserved</Link></p>
                </div>
            </div>
        </>
    )
}

export default Contact

