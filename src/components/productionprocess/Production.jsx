import React from 'react'
import FirstComp from './FirstComp';

const Production = ({ content }) => {

    const { title, desc, firstCards, firstTwoCards, otherCards } = content;

    return (
        <>
            <section className='py-8 lg:py-16'>
                <div className="container">
                    <div className="grid grid-cols-12 mb-8 lg:mb-14">
                        <div className="col-span-12">
                            <h2 className='text-white text-[30px] md:text-[50px] font-sans font-bold leading-tight mb-3 lg:w-7/12'>{title}</h2>
                            <p className='text-white font-sans font-light text-[16px] lg:w-7/12'>{desc}</p>
                        </div>
                    </div>
                    {firstTwoCards ? <FirstComp content={firstCards} /> : null}
                    <div className="grid grid-cols-3 gap-5">
                        {otherCards.map((cardContent, index) => (
                            <div key={index} className='bg-white/15 backdrop-blur-md py-7 px-4 relative rounded-[20px]'>
                                <div className="number">
                                    <span className='text-white text-[30px] font-bold font-sans bg-primary-100 rounded-full h-[50px] w-[50px] flex items-center justify-center absolute right-[23px] top-[20px] ring-2 ring-white ring-offset-4 ring-offset-[#262626]'>{cardContent.cardNum}</span>
                                </div>
                                <div className="content mt-12">
                                    <div className="w-max">
                                        <h3 className='text-[28px] font-bold font-sans pb-[2px]'>{cardContent.cardTitle}</h3>
                                        <hr className='border border-white w-full' />
                                    </div>
                                    <p className='text-white font-[16px] font-sans leading-snug mt-4 w-10/12'>{cardContent.cardDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production
