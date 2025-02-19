import Image from 'next/image'
import React from 'react'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png"
import Client1 from "media/game-lp/clients-1.png"
import Client2 from "media/game-lp/clients-2.png"
import Client3 from "media/game-lp/clients-3.png"
import Client4 from "media/game-lp/clients-4.png"
import Client5 from "media/game-lp/clients-5.png"
import Client6 from "media/game-lp/clients-6.png"
import Client7 from "media/game-lp/clients-7.png"
import Client8 from "media/game-lp/clients-8.png"
import Client9 from "media/game-lp/clients-9.png"
import Client10 from "media/game-lp/clients-10.png"
import Client11 from "media/game-lp/clients-11.png"
import Client12 from "media/game-lp/clients-12.png"
import Client13 from "media/game-lp/clients-13.png"
import Client14 from "media/game-lp/clients-14.png"
import Client15 from "media/game-lp/clients-15.png"
import Client16 from "media/game-lp/clients-16.png"
import Client17 from "media/game-lp/clients-17.png"
import Client18 from "media/game-lp/clients-18.png"
import Client19 from "media/game-lp/clients-19.png"
import Client20 from "media/game-lp/clients-20.png"
import Client21 from "media/game-lp/clients-21.png"
import Client22 from "media/game-lp/clients-22.png"
import Client23 from "media/game-lp/clients-23.png"
import Client24 from "media/game-lp/clients-24.png"
import Client25 from "media/game-lp/clients-25.png"
import Client26 from "media/game-lp/clients-26.png"
import Client27 from "media/game-lp/clients-27.png"
import Client28 from "media/game-lp/clients-28.png"
import Client29 from "media/game-lp/clients-29.png"
import Client30 from "media/game-lp/clients-30.png"
import Client31 from "media/game-lp/clients-31.png"
import IconsBg from "media/game-lp/icons-bg.png"

const Clients = () => {
    const clientImages = [
        Client1,
        Client2,
        Client3,
        Client4,
        Client5,
        Client6,
        Client7,
        Client8,
        Client9,
        Client10,
        Client11,
        Client12,
        Client13,
        Client14,
        Client15,
        Client16,
        Client17,
        Client18,
        Client19,
        Client20,
        Client21,
        Client22,
        Client23,
        Client24,
        Client25,
        Client26,
        Client27,
        Client28,
        Client29,
        Client30,
        Client31
    ]
    return (
        <section className='py-[50px] 5xl:py-[90px]'>
            <div className="lg:max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="content text-center">
                            <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins md:mb-3 relative w-full md:w-10/12 5xl:w-7/12 xl:w-6/12 mx-auto'>
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-[140px] 5xl:left-[60px] xl:left-[30px] top-[50%] translate-y-[-50%]' />
                                Our Clients
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-[140px] 5xl:right-[60px] xl:right-[30px] top-[50%] translate-y-[-50%] rotate-180' />
                            </h2>
                            <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins lg:w-9/12 mx-auto xl:px-4 mb-7 md:mb-10'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                        </div>
                        <div className="clientImages flex flex-wrap items-center justify-center gap-5 relative">
                            <Image src={IconsBg} alt='Background Image' fill={true} className='z-[-1] object-contain object-center' />
                            {clientImages.map((content, index) => (
                                <div className="box w-[140px] lg:w-[120px] h-[140px] lg:h-[120px] backdrop-blur-sm bg-white/15  flex items-center justify-center   " key={index}>
                                    <Image src={content} alt='Client Image' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
