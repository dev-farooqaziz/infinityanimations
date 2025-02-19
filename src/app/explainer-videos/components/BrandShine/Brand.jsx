import Image from 'next/image'
import React from 'react'

const Brand = ({ content }) => {
    const { title, subtitle, desc, branImage, isBranImage, btnTxt, css, positionCss, callTxt } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='py-[30px] md:py-[70px] lg:pt-0 lg:mb-[50px]'>
                <div className="mx-4 lg:max-w-7xl xl:mx-auto bg-[#EE8526] rounded-[20px] md:rounded-[40px] py-10 md:py-16 lg:py-10 px-4 sm:px-7 relative">
                    <div className="grid grid-cols-12">
                        {isBranImage ?
                            <div className="col-span-12 lg:col-span-7">
                                <h2 className='text-white font-bold font-sans text-[25px] md:text-[40px] leading-[35px] md:leading-[51px] mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[18px] md:text-[25px] lg:w-11/12 pb-[7px]'>{subtitle}</h5>
                                <p className='text-[16px] text-white font-sans leading-[23px]'>{desc}</p>
                                <div className='flex items-center gap-4'>
                                    <div className="btn mt-6 w-auto">
                                        <a href="javascript:$zopim.livechat.window.show();" className="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center">{btnTxt}</a>
                                    </div>
                                    <div className="btn mt-6 w-auto">
                                        <a className="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center" href="tel:012-345-6789">{callTxt}</a>
                                    </div>
                                </div>
                            </div> :
                            <div className="col-span-12 lg:col-span-6">
                                <h2 className='text-white font-bold font-sans text-[25px] md:text-[50px] xl:text-[70px] leading-tight xl:leading-[70px] mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[25px] lg:w-11/12 pb-[5px]'>{subtitle}</h5>
                                <p className='text-[17px] text-white font-sans leading-[22px]'>{desc}</p>
                                <div className="btn mt-6">
                                    <a href="javascript:$zopim.livechat.window.show();" className="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-full md:w-[410px] h-[44px] poppins flex items-center justify-center">Let's Begin Your Animated Journey Together!</a>
                                </div>
                            </div>}
                        {isBranImage ?
                            <div className="col-span-5">
                                <div className={`img ${positionCss} lg:block hidden`}>
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className={`${css}`} quality={85} />
                                </div>
                            </div> :
                            <div className="col-span-6">
                                <div className="img absolute bottom-0 right-0 lg:right-[-5px] xl:right-[-27px] lg:block hidden">
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className='lg:min-h-[400px] lg:w-full h-full ' quality={85} />
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
