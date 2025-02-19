import React from 'react'
import { Star } from 'heroicons-react'
// ===== Video 
const banVideo = [
    [
        "https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095",
    ]
];

const Banner = () => {
    return (
        <>
            <section className="pt-[30px] md:pb-[70px] h-[100vh] relative before:content-[''] before:absolute before:top-[-100px] before:left-0 before:right-0 before:w-full before:h-[118vh] before:bg-black before:opacity-[0.7] before:z-[1]" id='banner'>
                <div className="bannervideo absolute top-[-100px] z-[0] left-0 right-0 w-full">
                    {banVideo.map((item, index) => (
                        <div key={index}>
                            <video className={` w-full h-full`} loop={true} muted={true} autoPlay={true} src={item}></video>
                        </div>
                    ))}
                </div>
                <div className="px-5 lg:max-w-7xl mx-auto relative z-10 flex flex-col items-center mt-[100px] xl:mt-[30px] 2xl:mt-[70px] h-[100vh]">

                    <div className="flex items-center justify-center" data-aos="zoom-in" data-wow-duration="3s">
                        <div className="reviews flex items-center justify-center gap-x-1">
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                        </div>
                        <div className="content">
                            <p className='text-[13px] sm:text-[16px] text-white font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                        </div>
                    </div>
                    <h1 className='text-[30px] sm:text-[35px] lg:text-[45px] font-bold text-white font-sans text-center leading-[35px] sm:leading-[45px] lg:leading-[55px] pt-2 md:pt-4 pb-2 md:pb-5' data-aos="fade-up" data-wow-duration="3s">Boost Sales with 3D Animation Services. <br className='md:block hidden' />
                        Instantaneously Forge Explainer Videos!</h1>
                    <p className='text-center text-[13px] sm:text-[16px] font-sans text-white leading-[19px] pb-6' data-aos="fade-up" data-wow-duration="3s">Our repertoire spans the spectrum from 2D animation services to 3D animation services, with the timeless allure<br /> of whiteboard animation bringing your visions to life.</p>
                </div>
            </section>
        </>
    )
}

export default Banner
