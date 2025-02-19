import React from 'react'
import Image from 'next/image'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images 
import Card1 from "media/animating-studio/2d.png"
import Card2 from "media/animating-studio/3d.png"
import Card3 from "media/animating-studio/screencast.png"
import Card4 from "media/animating-studio/typography.png"
import Card5 from "media/animating-studio/whiteboard.png"
import Card6 from "media/animating-studio/motion.png"

// icon
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ExplainerType = () => {
    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },


        ]
    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='pt-[30px] pb-[50px] md:pt-[50px] md:pb-[80px] bg-white'>
                <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                    <div className="px-4 sm:px-8 lg:px-0 col-span-12 md:mb-[30px]">
                        <h2 className='text-[#000000] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Services</h2>
                        <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>Types of  <span className="text-[#A70A0E]">Explainer Videos</span></h2>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of <br className='lg:block hidden' /> animation videos with the usage of modern devices and techniques, some are discussed below:</p>
                    </div>
                </div>
                <div className="px-4 lg:px-0 mx-auto">
                    <Slider {...testiSlider} className="typeSlider explainerTypeSlider">
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#FFCC00] shadow-md  pb-[15px] ">
                                <Image src={Card5} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-black text-[18px] xl:text-[22px] border-b-[1px] border-[#000] font-bold poppins pt-[10px] mb-[10px] md:pt-[30px] lg:pt-[20px] leading-[23px] md:leading-[33px] '><span className='text-[#A70A0E]'>Whiteboard Animation </span> Video</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#000] leading-[1.42857143] pr-[10px] explainerType-location  mt-[20px] mb-[30px]'>Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#A70A0E] text-[#fff] tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#A70A0E] shadow-md  pb-[15px] ">
                                <Image src={Card6} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-[#fff] text-[18px] xl:text-[22px] border-b-[1px] border-[#fff] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] mb-[10px] leading-[23px] md:leading-[33px] '> <span className='text-[#FFCC00]'>Motion </span> Graphics</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] explainerType-location mt-[20px] mb-[30px]'>Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#FFCC00] text-black tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#003262] shadow-md  pb-[15px] ">
                                <Image src={Card1} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-[#fff] text-[18px] xl:text-[22px] border-b-[1px] border-[#fff] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] mb-[10px] leading-[23px] md:leading-[33px] '><span className='text-[#FFCC00]'>2D Character</span> Animation Videos</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] explainerType-location mt-[20px] mb-[30px]'>2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#FFCC00] text-[#000] tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#FFCC00] shadow-md  pb-[15px] ">
                                <Image src={Card2} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-black text-[18px] xl:text-[22px] border-b-[1px] border-[#000] font-bold poppins pt-[10px] mb-[10px] md:pt-[30px] lg:pt-[20px] leading-[23px] md:leading-[33px] '><span className='text-[#A70A0E]'>3D Animation</span> Video</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#000] leading-[1.42857143] pr-[10px] explainerType-location mt-[20px] mb-[30px]'>Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#A70A0E] text-[#fff] tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#A70A0E] shadow-md  pb-[15px] ">
                                <Image src={Card3} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-[#fff] text-[18px] xl:text-[22px] border-b-[1px] border-[#fff] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] mb-[10px] leading-[23px] md:leading-[33px] '><span className='text-[#FFCC00]'>Screencast</span> Videos</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] explainerType-location mt-[20px] mb-[30px]'>It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#FFCC00] text-black tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className="card rounded-[25px] h-full bg-[#003262] shadow-md  pb-[15px] ">
                                <Image src={Card4} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className='w-full h-auto' />
                                <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center mt-2 sm:mt-0">
                                    <h3 className='text-[#fff] text-[18px] xl:text-[22px] border-b-[1px] border-[#fff] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] mb-[10px] leading-[23px] md:leading-[33px] '><span className='text-[#FFCC00]'>Typography</span> Videos</h3>
                                    <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] explainerType-location mt-[20px] mb-[30px]'>Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.</p>
                                    <div className='flex justify-end w-full mt-3 mb-2 sm:mb-0'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] font-[500] poppins py-[6px] px-[15px] rounded-[8px] bg-[#FFCC00] text-[#000] tracking-[.3px] leading-[20px] duration-700 transition-all '>
                                            Lets Talk <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default ExplainerType
