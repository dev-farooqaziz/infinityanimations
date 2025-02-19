import React from 'react'
import Image from 'next/image'
//===== Images 
import ButtonIcon from 'media/icons/arrow-right.png'

const NewsLetter = () => {
    return (
        <>
            <section className='pb-8 lg:pb-16 py-16'>
                <div className='container'>
                    <div className='bg-prime rounded-3xl md:bg-none'>
                        <div className='bg-none md:bg-[url("../../public/blogs/update-bg.png")] bg-[length:100%_100%] bg-center bg-no-repeat'>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="px-4 md:px-4 lg:px-8 py-[20px] md:py-[30px] lg:py-[40px] xl:py-[60px] 2xl:py-[76px]">
                                        <h2 className='text-white text-[24px] lg:text-[35px] lg:leading-[45px] xl:leading-[50px] xl:text-[40px] 2xl:text-[50px] 2xl:leading-[55px] font-bold font-sans mb-5 lg:mb-7 xl:w-11/12'>Animate Your Ideas – Let's Craft Visual Brilliance!</h2>
                                        <form className='flex items-center'>
                                            <input type="text" placeholder='Type your email' className='w-8/12 border-2 border-white rounded-l-[5px] h-[50px] bg-transparent placeholder:opacity-[0.8] focus:outline-none font-sans  px-4 placeholder:font-[400]' />
                                            <button type='submit' className='bg-white rounded-r-[5px] text-[16px] text-[#FB1F32] font-sans h-[50px] w-[160px] flex items-center justify-center gap-2 lg:gap-3'>
                                                Subscribe
                                                <Image src={ButtonIcon} alt='Infinity Animation' width={45} height={45} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-span-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
