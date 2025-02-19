import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioInner = ({ content }) => {
    const { title, gridThree, portfolioContent } = content;
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
                        {title}
                    </h3>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridThree ? "lg:grid-cols-3" : "lg:grid-cols-4"} pt-5 lg:pt-8 sm:gap-x-7 gap-y-5 sm:gap-y-12`}>
                    {portfolioContent.map((portfolioData, index) => (
                        <div key={index}>
                            <div className='group' >
                                <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#0000004b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                    <div className="image">
                                        <Image src={portfolioData.image} alt='Portfolio' className='h-full object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioInner
