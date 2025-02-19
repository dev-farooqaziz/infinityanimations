import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import CardBg from "media/game-lp/cards-bg.png"
import CardBg1 from "media/game-lp/cards-bg1.png"
import BtnBg2 from "media/game-lp/btn-bg2.png"
import Particle1 from "media/game-lp/process-bg1.png"
import Particle2 from "media/game-lp/process-bg2.png"

const OurProcess = () => {
    const steps = [
        {
            number: '01',
            title: "Ideation",
            desc: "Every great game starts with a vision! Through brainstorming sessions, we collaborate closely with our clients to understand their artistic direction and expectations for the game's visuals.",
        },
        {
            number: '02',
            title: "Sketching",
            desc: "Every great game starts with a vision! Through brainstorming sessions, we collaborate closely with our clients to understand their artistic direction and expectations for the game's visuals.",
        },
        {
            number: '03',
            title: "Sketching",
            desc: "Every great game starts with a vision! Through brainstorming sessions, we collaborate closely with our clients to understand their artistic direction and expectations for the game's visuals.",
        },
        {
            number: '04',
            title: "Sketching",
            desc: "Every great game starts with a vision! Through brainstorming sessions, we collaborate closely with our clients to understand their artistic direction and expectations for the game's visuals.",
        },
        {
            number: '05',
            title: "Sketching",
            desc: "Every great game starts with a vision! Through brainstorming sessions, we collaborate closely with our clients to understand their artistic direction and expectations for the game's visuals.",
        },
    ]

    return (
        <section className='pt-[50px] pb-0 lg:pb-[90px] relative' id='Process'>
            <div className="particle1 absolute right-0 top-0 xl:top-[-182px] z-[-1]">
                <Image src={Particle1} alt='Particle' />
            </div>
            <div className="particle2 absolute left-0 bottom-[-80px] z-[-1]">
                <Image src={Particle2} alt='Particle' />
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt">
                            <h2 className='text-[30px] sm:text-[50px] lg:text-[50px] 5xl:text-[60px] leading-[40px] sm:leading-[60px] lg:leading-[60px] 5xl:leading-[70px] font-semibold text-white poppins mb-2'>
                                Our Process
                            </h2>
                            <p className='text-[17px] leading-[33px] font-normal poppins lg:w-10/12 xl:w-8/12 pr-2 mb-3 md:mb-8'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                        </div>
                        <div className="steps">
                            {steps.map((content, index) => (
                                <div key={index} className="step flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 relative px-4 lg:px-8 py-4 lg:py-6 group mb-4">
                                    <Image src={CardBg} alt='Card Background' fill={true} className='object-fill object-center z-[-1] opacity-0 group-hover:opacity-100 group-hover:duration-1000 ease-in-out duration-1000' />
                                    <Image src={CardBg1} alt='Card Background' fill={true} className='object-fill object-center z-[-1] opacity-100 group-hover:opacity-0 group-hover:duration-1000 ease-in-out duration-1000' />
                                    <div className="number">
                                        <h3 className='text-[45px] leading-[50px] font-semibold poppins text-center sm:text-start'>{content.number}</h3>
                                        <p className='text-[20px] leading-[30px] font-normal poppins text-center'>Step</p>
                                    </div>
                                    <div className="desc">
                                        <h4 className='text-[17px] xl:text-[20px] leading-[27px] xl:leading-[30px] font-semibold poppins mb-2 text-center sm:text-start'>{content.title}</h4>
                                        <p className='text-[13px] xl:text-[15px] leading-[22px] xl:leading-[25px] font-normal poppins lg:w-10/12 text-center sm:text-start'>{content.desc}</p>
                                    </div>
                                    <div className="btn translate-y-[20px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] group-hover:duration-1000 ease-in-out duration-1000">
                                        <a href="javascript:$zopim.livechat.window.show();" className=' text-black text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                            <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                            Get A Quote
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProcess
