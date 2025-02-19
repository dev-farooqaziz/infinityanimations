import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <section className='bg-black pt-[50px] pb-[25px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="socials_icons flex items-center justify-center gap-x-1 border-t border-white pt-[30px]">
                            <Link href="https://www.facebook.com/" className="facebook bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#6078ab] flex items-center justify-center">
                                <FaFacebookF className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://twitter.com/" className="twitter bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#31bbef] flex items-center justify-center">
                                <FaTwitter className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.linkedin.com/" className="google bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#e26d5f] flex items-center justify-center ">
                                <FaLinkedinIn className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.youtube.com/" className="youtube bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#b00] flex items-center justify-center">
                                <FaYoutube className='text-[23px] sm:text-[32px]' />
                            </Link>
                            {/* <Link href="https://www.vimeo.com/" className="printerest bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#cb2027] flex items-center justify-center">
                                <FaVimeoV className='text-[23px] sm:text-[32px]' />
                            </Link> */}
                            <Link href="https://www.instagram.com/" className="instagram bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#517fa4] flex items-center justify-center">
                                <FaInstagram className='text-[23px] sm:text-[32px]' />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-5 lg:w-9/12 mx-auto pt-8">
                            <div className="number">
                                <Link href="tel:012-345-6789" className='text-white font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2'>
                                    <FaPhoneAlt className='text-[#9545cc] text-[18px] sm:block hidden' />
                                    <span>012-345-6789</span>
                                </Link>
                            </div>
                            <div className="email">
                                <Link href="mailto:info@xyz.com" className='text-white font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2'>
                                    <FaEnvelope className='text-[#008c80] text-[18px] sm:block hidden' />
                                    <span>info@xyz.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer_bottom bg-black text-center">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto border-t border-white py-[10px]">
                    <span className='text-[14px] pb-[12px] text-white montserrat text-center '>© 2024 - <p className='text-[14px] lg:text-[16px] poppins text-center inline'> - All Rights Reserved By Dreamweave Media Inc </p></span>
                </div>
            </div>
        </>
    )
}

export default Footer
