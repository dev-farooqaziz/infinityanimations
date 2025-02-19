import React from 'react'
import Image from 'next/image'
// Images
import Portfolio1 from "media/new-portfolio/book-illustration/portfolio-1.png"
import Portfolio2 from "media/new-portfolio/book-illustration/portfolio-2.png"
import Portfolio3 from "media/new-portfolio/book-illustration/portfolio-3.png"
import Portfolio4 from "media/new-portfolio/book-illustration/portfolio-4.png"
import Portfolio5 from "media/new-portfolio/book-illustration/portfolio-5.png"
import Portfolio6 from "media/new-portfolio/book-illustration/portfolio-6.png"
import Portfolio7 from "media/new-portfolio/book-illustration/portfolio-7.png"
import Portfolio8 from "media/new-portfolio/book-illustration/portfolio-8.png"
import Portfolio9 from "media/new-portfolio/book-illustration/portfolio-9.png"
import Portfolio10 from "media/new-portfolio/book-illustration/portfolio-10.png"
import Portfolio11 from "media/new-portfolio/book-illustration/portfolio-11.png"
import Portfolio12 from "media/new-portfolio/book-illustration/portfolio-12.png"
import Portfolio13 from "media/new-portfolio/book-illustration/portfolio-13.png"
import Portfolio14 from "media/new-portfolio/book-illustration/portfolio-14.png"
import Portfolio15 from "media/new-portfolio/book-illustration/portfolio-15.png"
import Portfolio16 from "media/new-portfolio/book-illustration/portfolio-16.png"
import Portfolio17 from "media/new-portfolio/book-illustration/portfolio-17.png"
import Portfolio18 from "media/new-portfolio/book-illustration/portfolio-18.png"
import Portfolio19 from "media/new-portfolio/book-illustration/portfolio-19.png"
import Portfolio20 from "media/new-portfolio/book-illustration/portfolio-20.png"
import Portfolio21 from "media/new-portfolio/book-illustration/portfolio-21.png"
import Portfolio22 from "media/new-portfolio/book-illustration/portfolio-22.png"
import Portfolio23 from "media/new-portfolio/book-illustration/portfolio-23.png"
import Portfolio24 from "media/new-portfolio/book-illustration/portfolio-24.png"
import Portfolio25 from "media/new-portfolio/book-illustration/portfolio-25.png"
import Portfolio26 from "media/new-portfolio/book-illustration/portfolio-26.png"
import Portfolio27 from "media/new-portfolio/book-illustration/portfolio-27.webp"
const PortfolioInner = () => {
    return (
        <section className='pb-[50px] lg:pb-[90px]  pt-[150px]'>
            <div className="container">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div>
                        <p className='text-[15px] font-normal text-center md:text-left font-sans'>
                            Office abc street, New York
                        </p>
                    </div>
                    <div>
                        <h2 className='text-[35px] lg:text-[50px] font-sans font-bold tracking-wider text-[#ff2d4b]'>PORTFOLIO</h2>
                    </div>
                </div>
                <div className="txt">
                    <h3 className='text-[25px] lg:text-[45px] font-sans font-bold tracking-wider capitalize text-white text-center mt-4 lg:mt-14'>
                        Book illustrations
                    </h3>
                </div>
                <div className="grid grid-cols-12 gap-5 pt-5 lg:pt-8 ">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6">
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio21} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio8} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio12} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio4} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio19} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio23} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6">
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio1} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio6} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio10} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio14} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio16} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio27} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio26} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6">
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio2} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio5} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio9} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio13} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio17} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio20} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio24} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6">
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio3} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio7} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio11} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio15} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio18} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio22} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={Portfolio25} alt='Portfolio' className='h-full object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioInner