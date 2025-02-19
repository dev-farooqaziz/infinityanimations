//========== Imports
import Image from "next/image";
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Icons
import { FaStar } from 'react-icons/fa';
//========== Import Images
import Before from 'media/healthcare/icons/before.png'
import After from 'media/healthcare/icons/after.png'
import BanImg from 'media/healthcare/banner.png'
import BannerLogos from 'media/healthcare/icons/bannerLogos.png'

const Banner = () => {
    return (
        <section className="bg-white md:bg-none flex items-center h-screen lg:h-auto pt-12 pb-0 lg:pt-44 lg:pb-28 relative z-10 overflow-hidden" id="Home">
            <Image src={BanImg} alt="Infinity Animations" fill={true} className="hidden md:block -z-10 object-cover object-center" />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0'>
                    <div className="flex flex-col items-center gap-2 relative">
                        <Image src={Before} alt="Infinity Animations" className='hidden lg:block absolute top-[-70%] right-[-90%]' />
                        <div className="flex gap-1">
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                        </div>
                        <p className='text-[16px] poppins font-normal text-black text-center'>“These guys are brilliant”</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 lg:mt-[-5%]">
                        <div className="flex gap-1">
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                        </div>
                        <p className='text-[16px] poppins font-normal text-black text-center'>“We L-O-V-E working with Infinity Animation”</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 relative">
                        <Image src={After} alt="Infinity Animations" className='hidden lg:block absolute bottom-[-80%] left-[-50%] 5xl:left-[-85%] w-[70%] 5xl:w-[90%] rotate-[-5deg]' />
                        <div className="flex gap-1">
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                            <FaStar className='text-[#FFBB00] text-[14px]' />
                        </div>
                        <p className='text-[16px] poppins font-normal text-black text-center'>“Infinity Animation is a no-brainer”</p>
                    </div>
                </div>
                <div className='mt-5 md:mt-8 lg:mt-14'>
                    <h1 className='text-[25px] lg:text-[45px] xl:text-[50px] leading-[35px] lg:leading-[60px] xl:leading-[70px] font-extrabold poppins mb-4 text-black text-center'>Engage, Educate, And <span className='text-[#F5090B]'>Empower</span> With <br /> <span className='text-[#F5090B]'>Healthcare</span> Video Animation</h1>
                    <p className='text-[16px] lg:text-[18px] poppins leading-normal font-normal text-black text-center w-full md:w-[90%] lg:w-[80%] mx-auto'>
                        Our healthcare animations make complex information clear and engaging, helping patients and professionals understand and retain vital information.
                    </p>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 pt-5 lg:pt-8">
                        <CTA
                            text="Contact Us"
                            bg="bg-prime"
                            color={`text-white`}
                            href="tel:012-345-6789"
                            icon="/healthcare/icons/call.png"
                            iconCss="flex items-center justify-center w-[20px] h-[20px]"
                        />
                        <CTA
                            text="Get A Quote"
                            bg="bg-transparent"
                            color={`text-black`}
                            border={`border-2 border-[#000000]`}
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                    <div className='mt-10'>
                        <Image src={BannerLogos} alt='Infinity Animation' className='w-12/12 md:w-9/12 mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
