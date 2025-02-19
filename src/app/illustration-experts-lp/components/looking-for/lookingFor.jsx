import React from 'react'
import Image from 'next/image';
import leftImage from "media/illustration-experts/looking-bf.png"
import RightImage from "media/illustration-experts/looking-af.png"
import styles from "./looking.module.css"

function LookingFor() {
    return (

        <section className={` ${styles.whatLookingFor} hidden md:block`}>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className={`grid grid-cols-12 ${styles.whatFro}`}>
                    <div className="col-span-12 justify-content-center mb-8">
                        <h2 className='text-[#fff] text-center font-[700] montserrat text-[35px] pb-3'>What’re You Looking For?</h2>
                        <p className='text-[#f2f2f2] text-center text-[14px] sm:text-[15px] montserrat leading-[1.5]'>We exude passion in each project we take on. Our process is simple and the result of coordination, creative genius and professionalism of our creatives.</p>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center relative">
                        <div className=' w-1/2'>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Children </div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Fashion</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Architecture</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Food</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Animals</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Line Design</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Portraits</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Fantasy</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Retro</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>People</div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3  flex justify-center pt-[25x]">
                        <div className=' w-1/2'>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Animation</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Beauty</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Black And White</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Business</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Cartoon</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Character</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Collage</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Comic</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Communication</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Conceptual </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3  flex justify-center pt-[25x]">
                        <div className=' w-1/2'>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Contemporary</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Decorative</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Educational</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Gifs</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Graphic</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Historical</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Icon</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Infographic</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Jewellery</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Letters</div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3  flex justify-center pt-[25x]">
                        <div className=' w-1/2'>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Lifestyle</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Event</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Loose</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Manga</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Maps</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Medical</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Nature</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Painting</div>
                            <div className='text-[16px] font-[300] text-[#ABABAB] hover:text-[#fff] text-center py-3 montserrat border-b border-[#2d2d2d]'>Paper Art</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LookingFor