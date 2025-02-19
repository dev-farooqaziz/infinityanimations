import Image from 'next/image'
import React from 'react'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ==== Images
import Icon1 from "media/video-explainer2/why-ex-icon1.png"
import Icon2 from "media/video-explainer2/why-ex-icon2.png"
import Icon3 from "media/video-explainer2/why-ex-icon3.png"

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
            <section className='py-[50px] lg:py-[60px] bg-cover bg-center bg-[url("../../public/video-explainer/why-ex-bg.jpg")]'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto'>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 mb-[20px] sm:mb-[40px]">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Vital Role of Explainer Videos in Modern Marketing</h2>
                            <p className='text-[#231f20] text-[16px] md:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-10/12 mx-auto leading-[20px] md:leading-[22px] md:pb-[70px]'>Unleash your brand's potential with top-notch animated video production, where animation transforms complex ideas into engrossing stories. Drive engagement, boost conversions!</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 xl:col-span-4">
                                <div className="card">
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Brand Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>From storytelling to showcasing features, captivate your audience and leave a lasting impression through animated marketing video!</p>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <div className="card">
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>2D, 3D Animated Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>Bring your brand to life with vibrant 2D and 3D animated videos. From visual appeal to storytelling, create an immersive brand experience.</p>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <div className="card">
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Commercial Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>Make a lasting impact with animated commercial videos that sell more than just products. Craft narratives that resonate, turning viewers into loyal customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="explainSlider explainSlider2">
                            <div>
                                <div className="card">
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Brand Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>From storytelling to showcasing features, captivate your audience and leave a lasting impression through animated marketing video!</p>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>2D, 3D Animated Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>Bring your brand to life with vibrant 2D and 3D animated videos. From visual appeal to storytelling, create an immersive brand experience.</p>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto' />
                                    <h3 className='text-[#231f20] text-[20px] md:text-[30px] font-[700] pt-[20px] pb-[10px] text-center montserrat'>Commercial Videos</h3>
                                    <p className='text-[#424242] opacity-[0.9] text-[16px] montserrat w-10/12 mx-auto text-center leading-[1.42857143]'>Make a lasting impact with animated commercial videos that sell more than just products. Craft narratives that resonate, turning viewers into loyal customers.</p>
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
