import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Thumnail29 from "media/thumbnails/hybrid/5.png";
import quote from "media/testimonial-copy/testi-colon.webp";
import icon2 from "media/icons/stars.png";

export default function TestimonialCard() {
    return (
        <div className='flex bg-[#fff0f1] w-[500px] h-[179px] rounded-full '>
            <div className='w-[180px] h-[180px] '>
                <Image
                    // src={testimonial.thumbnail}
                    src={Thumnail29}
                    alt="Infinity Animations"
                    className='w-full h-full rounded-full ' />
            </div>
            <div className='w-[320px] px-4 flex flex-col justify-between py-3'>
                <div className='flex border'>
                    <Image
                        src={quote}
                        alt="Infinity Animations"
                        width={30}
                        height={30}
                        className='rounded-full ' />
                    <h3 className="text-[20px] font-semibold font-sans ps-3 text-black">
                        {/* {testimonial.name} */}
                        Edd Lockwood
                    </h3>
                </div>
                <div className='border'>
                    <p className="text-[11px] xl:text-[14px] font-sans font-normal text-black">
                        “Infinity Animation services earned my respect by providing high-quality,
                        aesthetically pleasing animated content. The group executed my project in a
                        unique and impressive manner.”
                    </p>
                </div>
                <div className='border'>
                    <Image 
                    // src={testimonial.stars}
                    src={icon2}
                     className="w-[30%]" alt='Infinity Animation' />
                </div>
            </div>
        </div>
    )
}
