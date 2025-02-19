import React from 'react'
import Image from 'next/image'
//====== Images
import Icon1 from 'media/icons/core-icon1.png'
import Icon2 from 'media/icons/core-icon2.png'
import Icon3 from 'media/icons/core-icon3.png'
import Icon4 from 'media/icons/core-icon4.png'
import Icon5 from 'media/icons/core-icon5.png'
import coreImage from 'media/why-us/core-bg.gif'

const Features = () => {
    return (
        <>
            <section className='relative pb-8 lg:pb-16'>
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <div className="col-span-12">
                            <div className="mb-3 lg:mb-[150px]">
                                <h2 className='text-[40px] md:text-[60px] font-semibold font-sans leading-tight text-center mb-3'>Our Core Features</h2>
                                <p className='text-[16px] font-normal font-sans leading-snug tracking-wider text-center lg:w-8/12 mx-auto'>Our core objectives remain to seamlessly blend creativity and precision. Crafting visually captivating animations that not only tell compelling stories but also exceed the expectations of our clients.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="grid grid-cols-12 gap-4 relative z-50">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon1} alt='Infinity Animation' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Creative Collaboration</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>We prioritize collaborative partnerships, working closely with our clients to understand their visions and preferences, ensuring a shared journey towards achieving the best creative outcomes.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon2} alt='Infinity Animation' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Strategic Storytelling</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>Emphasizing the importance of strategic storytelling, we infuse narratives with depth and meaning, ensuring that each animation not only engages but resonates with the audience on a profound level.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon3} alt='Infinity Animation' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Technical Precision</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>At the core of our approach is technical precision. Whether it's animation techniques, audio integration, or the final polish, we uphold a commitment to meticulous craftsmanship, delivering animations of the highest quality.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon4} alt='Infinity Animation' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Client-Centric Focus</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>Placing clients at the forefront, we maintain transparent communication, flexible solutions, and a dedication to exceeding expectations, ensuring that every client feels valued and involved throughout the creative process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="absolute right-0 lg:right-[170px] top-[18%] -z-1 md:block hidden">
                                <Image src={coreImage} alt='Infinity Animation' className='w-full' width={1263} height={800} />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="col-span-6">
                                <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                    <Image src={Icon5} alt='Infinity Animation' width={64} height={67} />
                                    <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Continuous Innovation</h3>
                                    <p className='text-white text-[14px] font-sans font-light'>To stay at the forefront of the animation industry, we embrace continuous innovation. From exploring new animation techniques to incorporating the latest trends, we strive to deliver cutting-edge and impactful results for our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features