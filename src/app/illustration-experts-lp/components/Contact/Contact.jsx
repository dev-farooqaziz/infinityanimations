import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// ==== Images 
import listLogo from "media/illustration-experts/list-logo.png"
import UpArrow from "media/video-explainer/up-arrow.png"

const Contact = () => {

    return (
        <>
            <section className='py-[20px] bg-[#f4f5f8]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <Image src={listLogo} alt='Infinity Animations' className='mx-auto' />
                </div>
            </section>
            <div className="copyright py-[20px]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <p className='text-[14px] pb-[12px] text-[#333] montserrat text-center'>© 2024 <p className='text-[14px] text-[#333] montserrat text-center inline'> - All Rights Reserved By</p> Dreamweave Media Inc </p>
                    <div className="top-icon absolute right-0 top-[-40px]">
                        <Link href="#" className='bg-[#18d689] w-[80px] h-[80px] text-center text-[#333] font-[500] uppercase rounded-[60%] align-middle border-[5px] border-white absolute right-0 lg:flex flex-col justify-center items-center md:block hidden'>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p className='text-[14px] text-center poppins'>Top</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
