import Image from 'next/image'
import React from 'react'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ==== Images
import Icon1 from "media/video-explainer/why-ex-icon1.png"
import Icon2 from "media/video-explainer/why-ex-icon2.png"
import Icon3 from "media/video-explainer/why-ex-icon3.png"

const Explainer = () => {

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className='pb-[90px] 2xl:pb-[80px] pt-[60px] bg-cover bg-center bg-[url("../../public/video-explainer/why-ex-bg.jpg")]'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto'>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 mb-[20px] sm:mb-[40px]">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Why Animated Explainer Videos Are Key To Digital Branding</h2>
                            <p className='text-[#231f20] text-[16px] md:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-10/12 mx-auto leading-[20px] md:leading-[22px] md:pb-[70px]'>Simple words and symbols can’t compete with the impact of dynamic video animation. As a premier Video Animation Company, we’re dedicated to making your product or service stand out. Our Video Animation Services are designed to captivate and engage your audience, ensuring your message shines brightly in the digital landscape. Let us transform your ideas into compelling animated videos that make a lasting impression.</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-4">
                                <div className="card">
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Corporate Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We craft corporate animated videos to improve your brand’s presence, and it requires a different approach to adopt..</p>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className="card">
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Product Animated Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We make compelling and highly engaging product animated videos in a variety of styles and at various level of difficulty.</p>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className="card">
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Commercial Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="explainSlider">
                            <div>
                                <div className="card">
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Corporate Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We craft corporate animated videos to improve your brand’s presence, and it requires a different approach to adopt..</p>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Product Animated Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We make compelling and highly engaging product animated videos in a variety of styles and at various level of difficulty.</p>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto' />
                                    <h2 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Commercial Videos</h2>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explainer
