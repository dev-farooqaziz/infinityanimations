import React from 'react'
import Image from 'next/image'
import { Star } from 'heroicons-react'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images 
import Testi1 from "media/infinity-studio/client1.png"
import Testi2 from "media/infinity-studio/client2.png"
import Testi3 from "media/infinity-studio/client3.png"
import Play from "media/infinity-studio/play.png"
import quote from "media/infinity-studio/quote.png"

const ClientThinking = () => {

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className='py-[40px] pb-[80px] md:py-[80px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 mb-[10px] md:mb-[50px]">
                            <h2 className='text-[#A70A0E] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Testimonials</h2>
                            <h3 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Hear From Our Clients Why Infinity Animations is the <br className='lg:block hidden' />
                            Right Video Partner For you</h3>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Our experts leave no stone unturned in providing the desired outcome of our clients</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-4 items-end ">
                            <div className="col-span-12 lg:col-span-4 ">
                                <div className='card rounded-[15px] shadow-lg relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] w-[90%] h-[450px] mx-auto'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                        <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi1} alt='testi1' className='  w-[60px]' />
                                        <p className='mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px] pt-0 sm:pt-[50px] xl:pt-[70px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Kelly Sparks</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className='card rounded-[15px] shadow-lg relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] w-[85%] h-[425px] mx-auto'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                        <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi2} alt='testi2' className='  w-[60px]' />
                                        <p className='mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px] pt-0 sm:pt-[30px] xl:pt-[50px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Edd Lockwood</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className='card rounded-[15px] shadow-lg relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] w-[85%] h-[395px] mx-auto'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                    <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi3} alt='testi3' className='  w-[60px]' />
                                        <p className='mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px] pt-0 sm:pt-[5px] xl:pt-[25px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Jason Gawkward</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="clientSlider">
                            <div className='px-2'>
                                <div className='card rounded-[15px] shadow-lg lg:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] m-auto w-full h-full lg:h-[430px]'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                    <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi1} alt='testi1' className='  w-[60px]' />
                                        <p className='md:mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Kelly Sparks</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='card rounded-[15px] shadow-lg lg:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] m-auto w-full h-full lg:h-[400px]'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                    <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi2} alt='testi2' className='  w-[60px]' />
                                        <p className='md:mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Edd Lockwood</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='card rounded-[15px] shadow-lg lg:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 bg-cover bg-center bg-[url("../../public/infinity-studio/reviewBg.svg")] pt-[15px] px-[10px] m-auto w-full h-full lg:h-[370px]'>
                                    <div className='flex text-end justify-end px-3 py-1'>
                                    <Image src={quote} alt='Quote' className='w-[75px]' />
                                    </div>
                                    <div className='flex flex-col items-center text-center justify-center px-3 py-1 ' >
                                        <Image src={Testi3} alt='testi3' className='  w-[60px]' />
                                        <p className='md:mb-[20px] py-[20px] text-[15px] text-[#fff] montserrat  mt-[13px]'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                            with the Infinity Animations squad. </p>
                                    </div>


                                    <div className="card-bottom flex items-center p-[20px]">
                                        <div className="img">
                                            <Image src={Play} alt='play' className='  w-[55px]' />
                                        </div>
                                        <div className="content pl-[15px]">
                                            <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-white'>Jason Gawkward</h4>
                                            <div className="reviews flex items-center">
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                                <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            </div>
                                        </div>
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

export default ClientThinking
