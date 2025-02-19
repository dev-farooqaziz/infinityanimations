import Image from 'next/image'
import React from 'react'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png"
import Portfolio1 from "media/game-lp/portfolio1.png"
import Portfolio2 from "media/game-lp/portfolio2.png"
import Portfolio3 from "media/game-lp/portfolio3.png"
import Portfolio4 from "media/game-lp/portfolio4.png"
import Portfolio5 from "media/game-lp/portfolio5.png"
import Portfolio6 from "media/game-lp/portfolio6.png"
import Portfolio7 from "media/game-lp/portfolio7.png"
import Portfolio8 from "media/game-lp/portfolio8.png"
import Portfolio9 from "media/game-lp/portfolio9.png"
import Portfolio10 from "media/game-lp/portfolio10.png"
import Portfolio11 from "media/game-lp/portfolio11.png"
import Portfolio12 from "media/game-lp/portfolio12.png"
import Portfolio13 from "media/game-lp/portfolio13.png"
import Portfolio14 from "media/game-lp/portfolio14.png"
import Portfolio15 from "media/game-lp/portfolio15.png"
import Portfolio16 from "media/game-lp/portfolio16.png"

const Portfolio = () => {
    const portfolio = [
        {
            image: Portfolio1,
            title: "JULIA: GAME-READY ANIMATED 3D CHARACTER",
            desc: "SCI-FI Game Character Mirroring Overwatch Style",
            border: 'border-r '
        },
        {
            image: Portfolio2,
            title: "CYRO CODA: GAME-READY 3D CHARACTER",
            desc: "SCI-FI Game Character Mirroring Overwatch Style",
            border: 'border-r '
        },
        {
            image: Portfolio3,
            title: "MATCH 3 GAME ART",
            desc: "Illustrations For Jewels Of The Wild West",
            border: 'border-r-0 xl:border-r '
        },
        {
            image: Portfolio4,
            title: "SOLITAIRE 3D PAINT-OVER BACKGROUNDS",
            desc: "Set Of 3D Paint-Over Backgrounds For Solitaire Game",
            border: 'border-r xl:border-r-0'
        },
        {
            image: Portfolio5,
            title: "FANTASY 2D ILLUSTRATIONS",
            desc: "Splash Arts For A 2D Dark Fantasy Game",
            border: 'border-r '
        },
        {
            image: Portfolio6,
            title: "3D SURVIVAL GAME PROTOTYPE",
            desc: "SCI-FI Game Character Reflecting Overwatch Style",
            border: 'border-r-0 xl:border-r '
        },
        {
            image: Portfolio7,
            title: <>3D LOCATIONS FOR <br className='lg:block hidden' />MOBILE GAME</>,
            desc: "Top-Down Survival Game In A Post-Apocalyptic Setting",
            border: 'border-r '
        },
        {
            image: Portfolio8,
            title: "3D LOW POLY GAME ASSETS",
            desc: "3D Game Interiors And Props",
            border: 'border-r xl:border-r-0'
        },
        {
            image: Portfolio9,
            title: "3D CHARACTERS FOR SURVIVAL GAME",
            desc: "Stylized 3D Characters For The Survival Game No Way",
            border: 'border-r-0 xl:border-r '
        },
        {
            image: Portfolio10,
            title: "3D ENVIRONMENT DESIGN IN UE5",
            desc: "Stylized 3D Environment Design Art Package For No Way Out",
            border: 'border-r '
        },
        {
            image: Portfolio11,
            title: "3D PROPS & MATERIALS",
            desc: "Stylized 3D Props And Materials Design",
            border: 'border-r '
        },
        {
            image: Portfolio12,
            title: "3D Stylized WEAPON MODELS",
            desc: "A Set Of 3D Weapon Models",
            border: 'border-r-0'
        },
        {
            image: Portfolio13,
            title: "3D GAME INTERIORS",
            desc: "3D Backgrounds And Game Interiors For AVA'S Manor",
            border: 'border-r '
        },
        {
            image: Portfolio14,
            title: "GAME BACKGROUNDS",
            desc: "Cozy And Warm 2D Backgrounds",
            border: 'border-r '
        },
        {
            image: Portfolio15,
            title: "2D GAME ILLUSTRATIONS",
            desc: "A Set Of Cartoony Art And Illustrations",
            border: 'border-r-0 xl:border-r '
        },
        {
            image: Portfolio16,
            title: "3D GUN MODELS",
            desc: "A Set Of 3D Gun Models Created In Blender",
             border: 'border-r xl:border-r-0'
        },
    ];
    return (
        <section className='pt-[0px] pb-[50px] lg:pt-[30px] lg:pb-[90px]' id='Portfolio'>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="content text-center px-4 md:px-0">
                        <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins md:mb-3 relative w-full md:w-6/12 lg:w-7/12 5xl:w-6/12 xl:w-5/12 mx-auto'>
                            <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-[20px] 5xl:left-0 top-[50%] translate-y-[-50%]' />
                            Our Portfolio
                            <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-[20px] 5xl:right-0 top-[50%] translate-y-[-50%] rotate-180' />
                        </h2>
                        <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins md:w-9/12 xl:w-7/12 mx-auto xl:px-4 mb-7 md:mb-12'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10">
                {portfolio.map((content, index) => (
                    <div key={index}>
                        <div className="image">
                            <Image src={content.image} alt='Portfolio' className='w-full' />
                        </div>
                        <div className={`txt py-4 px-4 border-r-[#707070] ${content.border}`}>
                            <h3 className="text-white text-[16px] xl:text-[20px] 2xl:text-[24px] leading-[26px] xl:leading-[30px] 2xl:leading-[36px] font-semibold poppins lg:w-11/12 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-full before:h-[1px] before:bg-[#707070] mb-3 sm:h-[50px] xl:h-[60px] 2xl:h-[70px] sm:text-left text-center">{content.title}</h3>
                            <p className='text-[12px] 2xl:text-[13px] leading-[20px] font-normal text-white poppins pt-[12px] sm:text-left text-center'>{content.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
