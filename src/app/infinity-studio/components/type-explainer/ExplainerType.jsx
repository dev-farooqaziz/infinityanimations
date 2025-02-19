import Image from 'next/image'
import React from 'react'
import usePopup from '@/app/configs/store/Popup'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images 
import Card1 from "media/infinity-studio/service1.png"
import Card2 from "media/infinity-studio/service2.png"
import Card3 from "media/infinity-studio/service3.png"
import Card4 from "media/infinity-studio/service4.png"
import Card5 from "media/infinity-studio/service5.png"
import Card6 from "media/infinity-studio/service6.png"

// icon
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ExplainerType = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
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

    return (
        <>
            <section className='pt-[40px] pb-0 md:py-[40px] lg:py-[80px]'>
                <div className="px-4 sm:px-8">
                    <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                        <div className="col-span-12 md:mb-[30px]">
                            <h2 className='text-[#A70A0E] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Services</h2>
                            <h3 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Types of Explainer Videos</h3>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all <br className='hidden lg:block' /> types of animation videos with the usage of modern devices and techniques, some are <br className='hidden lg:block' /> discussed below:</p>
                        </div>
                    </div>
                    <div>
                        <Slider {...testiSlider} className="typeSlider">
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#FFCC00] shadow-md pb-[15px] ">
                                    <Image src={Card1} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-black text-[18px] md:text-[22px] font-bold poppins pt-[10px] pb-[10px] leading-[23px] md:leading-[33px] '>board Animation Video</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#000] leading-[1.42857143] md:pr-[17px] lg:min-h-[115px]'>board videos entail simulating black-line graphics on a background while guiding viewers through the entire concept or idea.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#000] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#A70A0E] shadow-md  pb-[15px] ">
                                    <Image src={Card2} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-[#fff] text-[18px] md:text-[22px] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Motion Graphics</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] lg:min-h-[105px]'>Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#FFCC00] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#003262] shadow-md  pb-[15px] ">
                                    <Image src={Card3} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-[#fff] text-[18px] md:text-[22px] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>2D Character Animation Videos</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] lg:min-h-[105px]'>2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#FFCC00] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#FFCC00] shadow-md  pb-[15px] ">
                                    <Image src={Card4} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-black text-[18px] md:text-[22px] font-bold poppins pt-[10px] pb-[10px] md:pt-[30px] lg:pt-[20px] leading-[23px] md:leading-[33px] '>3D Animation Video</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#000] leading-[1.42857143] pr-[10px] lg:min-h-[105px]'>Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#000] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#A70A0E] shadow-md  pb-[15px] ">
                                    <Image src={Card6} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-[#fff] text-[18px] md:text-[22px] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Screencast Videos</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] lg:min-h-[105px]'>It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#FFCC00] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="card rounded-[15px] h-full bg-[#003262] shadow-md  pb-[15px] ">
                                    <Image src={Card5} alt='card-1' style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px 4px 16px 0px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                    <div className="content px-[25px] min-h-[200px] lg:h-full flex flex-col items-start justify-center">
                                        <h3 className='text-[#fff] text-[18px] md:text-[22px] font-bold poppins pt-[10px] md:pt-[30px] lg:pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Typography Videos</h3>
                                        <p className='text-[14px] sm:text-[15px] poppins text-[#fff] leading-[1.42857143] md:pr-[17px] lg:min-h-[105px]'>Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#FFCC00] font-[500] poppins py-[10px] tracking-[.3px] leading-[20px] duration-700 transition-all'>
                                            Get Started <span className='ps-2'><HiOutlineArrowLongRight size={28} /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExplainerType
