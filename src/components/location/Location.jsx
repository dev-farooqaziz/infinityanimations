"use client"
import React from 'react'
import Link from 'next/link'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Location = () => {
    const locationSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('../../public/images/locationWorld.png')] bg-contain bg-center bg-no-repeat pt-[50px] pb-[70px] lg:pb[50px] relative hidden lg:block">
                <div className="relative z-[99]">
                    <div className='container'>
                        <div className='grid'>
                            <h3 className="text-[20px] font-sans font-bold text-center uppercase mb-0">
                                Areas We Serve
                            </h3>
                            <h3 className="text-[30px] md:text-[50px] font-sans font-bold text-center leading-[55px]">
                                Our Locations Globally
                            </h3>
                            <div className='mt-8'>
                                <div className="mt-0">
                                    <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-4">USA</h4>
                                    <div className='grid gap-10'>
                                        <div className='divide-y-[1px]'>
                                            <div>
                                                <h5 className="text-[18px] font-sans font-bold uppercase border-b-[2px] border-white py-1 my-2 w-max">
                                                    California
                                                </h5>
                                                <div className='grid grid-cols-3 gap-10 divide-x-[1px]'>
                                                    <div className="flex flex-col gap-y-1 py-4 px-8 mb-5">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Folsom
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/cPupbW9ydYCBdZNs5'>
                                                            Office abc street, Canada, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:8336666689">
                                                            +1 012-345-6789
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col gap-y-1 py-4 px-8 mb-5">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            San Francisco
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/ZjaN1qLpG9f9SYn1A'>
                                                            The Paramount, 95 3rd St 3rd Floor, San Francisco, CA 94103, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:7163179552">
                                                            +1 716-317-9552
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col gap-y-1 py-4 px-8 mb-5">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Culver City
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/DLTQtBaoz8Dxr5np9'>
                                                            3415 S Sepulveda Blvd, Culver City, CA 90034, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:8336666689">
                                                            +1 012-345-6789
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-[18px] font-sans font-bold uppercase border-b-[2px] border-white py-1 my-2 w-max">
                                                    Texas
                                                </h5>
                                                <div className='grid grid-cols-3 gap-10 divide-x-[1px]'>
                                                    <div className="flex flex-col gap-y-1 py-4 px-8 mb-5">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Dallas
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/HDrY2Kug9GPhAnfX6'>
                                                            2626 Cole Ave suite 486, Dallas, TX 75204, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:7163001135">
                                                            +1 716-300-1135
                                                        </Link>
                                                    </div>

                                                    <div className="flex flex-col gap-y-1 py-4 px-8 mb-5">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Houston
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/Wh1U3jEdXDYj3dK16'>
                                                            4300 Main St, Houston, TX 77002, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:8336666689">
                                                            +1 012-345-6789
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-3 gap-10 divide-x-[1px]'>
                                                <div className='mt-5'>
                                                    <h5 className="text-[18px] font-sans font-bold uppercase border-b-[2px] border-white py-1 my-2 w-max">
                                                        Illinois
                                                    </h5>
                                                    <div className="flex flex-col gap-y-1 py-4 px-8">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Chicago
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/E2bxzHJdit6C5HE29'>
                                                            Chicago Temple Building, 70 W Madison St, Chicago, IL 60602, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:7163179552">
                                                            +1 716-317-9552
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='mt-5 pl-5'>
                                                    <h5 className="text-[18px] font-sans font-bold uppercase border-b-[2px] border-white py-1 my-2 w-max">
                                                        Florida
                                                    </h5>
                                                    <div className="flex flex-col gap-y-1 py-4 px-4">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Miami
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/HeNH71959j1s22iv9'>
                                                            80 SW 8th St ste 2000, Miami, FL 33130, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:7163001135">
                                                            +1 716-300-1135
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='mt-5 pl-5'>
                                                    <h5 className="text-[18px] font-sans font-bold uppercase border-b-[2px] border-white py-1 my-2 w-max">
                                                        Maryland
                                                    </h5>
                                                    <div className="flex flex-col gap-y-1 py-4 px-4">
                                                        <h5 className="text-[18px] font-sans font-bold uppercase">
                                                            Towson
                                                        </h5>
                                                        <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/YuHV1k6LVgmXyocW7'>
                                                            100 West Road suite 301, Towson, MD 21204, United States
                                                        </Link>
                                                        <Link className="text-[14px] font-sans font-bold" href="tel:8336666689">
                                                            +1 012-345-6789
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-2 uppercase">MALAYSIA</h4>
                                    <div className='grid grid-cols-3 gap-10'>
                                        <div className='divide-y-[1px]'>
                                            <div className="py-4 flex flex-col gap-y-1">
                                                <h5 className="text-[18px] font-sans font-bold uppercase">
                                                    LABUAN
                                                </h5>
                                                <Link className='text-[16px] font-sans' target='_blank' href='https://maps.app.goo.gl/1mv6ah2q2UHqYsWe7'>
                                                    Office 13 A, Main Office Tower, Financial Park, 87000 Labuan, Wilayah Persekutuan Labuan, Malaysia
                                                </Link>
                                                <Link className="text-[14px] font-sans font-bold" href="tel:8336666689">
                                                    +1 012-345-6789
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black pt-[50px] pb-[70px] lg:pb[50px] relative block lg:hidden">
                <div className="relative z-[99]">
                    <div className='container'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                            <div>
                                <h3 className="text-[20px] font-sans font-bold text-center lg:text-left uppercase mb-0">
                                    Areas We Serve
                                </h3>
                                <h3 className="text-[30px] md:text-[50px] font-sans font-bold text-center lg:text-left leading-[55px]">
                                    Our Locations Globally
                                </h3>
                                <Slider {...locationSlider} className="locationSlider">
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">California</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Folsom
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/cPupbW9ydYCBdZNs5'>
                                                Office abc street, Canada, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:8336666689">
                                                +1 012-345-6789
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">California</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                San Francisco
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/ZjaN1qLpG9f9SYn1A'>
                                                The Paramount, 95 3rd St 3rd Floor, San Francisco, CA 94103, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:7163179552">
                                                +1 716-317-9552
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">California</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Culver City
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/DLTQtBaoz8Dxr5np9'>
                                                3415 S Sepulveda Blvd, Culver City, CA 90034, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:8336666689">
                                                +1 012-345-6789
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">Texas</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Dallas
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/HDrY2Kug9GPhAnfX6'>
                                                2626 Cole Ave suite 486, Dallas, TX 75204, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:7163001135">
                                                +1 716-300-1135
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">Texas</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Houston
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/Wh1U3jEdXDYj3dK16'>
                                                4300 Main St, Houston, TX 77002, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:8336666689">
                                                +1 012-345-6789
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">Illinois</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Chicago
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/E2bxzHJdit6C5HE29'>
                                                Chicago Temple Building, 70 W Madison St, Chicago, IL 60602, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:7163179552">
                                                +1 716-317-9552
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">Florida</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Miami
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/HeNH71959j1s22iv9'>
                                                80 SW 8th St ste 2000, Miami, FL 33130, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:7163001135">
                                                +1 716-300-1135
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-0 uppercase">USA</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h4 className="w-max mx-auto text-[20px] font-sans font-bold text-center border-b-[1px] border-white py-1 mb-2 uppercase">Maryland</h4>
                                            <h5 className="text-[18px] font-sans font-bold uppercase text-center">
                                                Towson
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/YuHV1k6LVgmXyocW7'>
                                                100 West Road suite 301, Towson, MD 21204, United States
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:8336666689">
                                                +1 012-345-6789
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-sans font-bold text-center border-t-[1px] border-b-[1px] border-white py-1 mb-2 uppercase">Malaysia</h4>
                                        <div className="py-4 flex flex-col gap-y-1 w-10/12 md:w-[38%] mx-auto">
                                            <h5 className="text-[20px] font-sans font-bold uppercase text-center">
                                                Labuan
                                            </h5>
                                            <Link className='text-[16px] font-sans text-center' target='_blank' href='https://maps.app.goo.gl/1mv6ah2q2UHqYsWe7'>
                                                Office 13 A, Main Office Tower, Financial Park, 87000 Labuan, Wilayah Persekutuan Labuan, Malaysia
                                            </Link>
                                            <Link className="text-[14px] font-sans font-bold text-center" href="tel:8336666689">
                                                +1 012-345-6789
                                            </Link>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location
