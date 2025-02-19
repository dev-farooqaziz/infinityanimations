import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NewPortfolio = ({ content }) => {
    const { portfolioContent } = content;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 lg:pt-16 sm:gap-x-7 gap-y-5 sm:gap-y-12">
                    {portfolioContent.map((portfolioData, index) => (
                        <div className='group' key={index}>
                            <div className="card relative h-full overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-[#ff2d4c4b] before:duration-700 before:opacity-0 group-hover:before:opacity-[1] ease-in-out group-hover:duration-700">
                                <div className="image">
                                    <Image src={portfolioData.image} alt='Portfolio' className='h-full object-cover' />
                                </div>
                                <div className="txt px-6 absolute bottom-[20px] left-0 right-0 translate-y-[10px] group-hover:translate-y-0 group-hover:duration-700 duration-700 ease-in-out">
                                    <h3 className='text-[17px] xl:text-[20px] font-bold font-sans uppercase tracking-wider text-center mb-[-35px] group-hover:mb-[13px]'>
                                        {portfolioData.title}
                                    </h3>
                                    <div className="btn opacity-0 scale-y-0 group-hover:scale-y-[1] group-hover:opacity-[1] origin-bottom group-hover:max-h-full">
                                        <Link href={portfolioData.href} target='_blank' className='border font-sans text-[13px] xl:text-[16px] font-semibold w-full py-[8px] block text-center leading-[20px] xl:leading-[25px] tracking-wider hover:bg-black hover:duration-700 duration-700 ease-in-out lg:w-10/12 mx-auto'>
                                            View More
                                        </Link>
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

export default NewPortfolio
