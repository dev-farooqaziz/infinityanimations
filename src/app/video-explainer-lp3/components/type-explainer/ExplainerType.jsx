import Image from 'next/image'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// ===== Images 
import Card1 from "media/video-explainer2/ty-ex-icon-1.png"
import Card2 from "media/video-explainer2/ty-ex-icon-2.png"
import Card3 from "media/video-explainer2/ty-ex-icon-3.png"
import Card4 from "media/video-explainer2/ty-ex-icon-4.png"
import Card5 from "media/video-explainer2/ty-ex-icon-5.png"
import Card6 from "media/video-explainer2/ty-ex-icon-6.png"

const ExplainerType = () => {

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <>
            <section className='py-[50px] lg:py-[80px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Types of Explainer Videos</h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-10/12 mx-auto leading-[22px] pb-[20px] sm:pb-[40px] md:pb-[70px]'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card1} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Whiteboard <br /> Animation Video</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card2} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Motion <br /> Graphics</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card3} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>2D Character <br /> Animation Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card4} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>3D Animation <br /> Video</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] pr-[10px] lg:h-[125px]'>Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card6} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Screencast <br /> Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-full">
                                    <Image src={Card5} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Typography <br /> Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="typeSlider typeSlider2">
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card1} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Whiteboard <br /> Animation Video</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Transforming complex ideas into simple drawings, Whiteboard Explainer Videos unfold like a visual story, engaging audiences through the art of illustration. Ideal for breaking down intricate concepts with a touch of creativity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card2} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Motion <br /> Graphics</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Dynamic Motion Graphics Explainer Videos use animated elements, text, and visuals to create a visually striking narrative. Perfect for adding excitement and modern flair to your brand story, capturing attention and enhancing understanding.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card3} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>2D Character <br /> Animation Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Dive into immersive storytelling with 2D Character Animation. Characters take center stage, adding depth and personality to your brand's tale. This format is excellent for creating memorable and visually stunning narratives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card4} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>3D Animation <br /> Video</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] pr-[10px] lg:h-[125px]'>Bursting with vibrant colors and fluid animations, 2D Animation Explainer Videos offer a visually appealing journey through your brand story. This classic format is versatile and ideal for conveying a wide range of messages with charm and simplicity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card6} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Screencast <br /> Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Dive into the Screen Saga! Our Screencast Explainer Videos simplify the intricate, making your brand shine in the digital realm. Let’s narrate your story seamlessly through our industry leading animated video production.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="card rounded-[10px] bg-[#091416] shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                    <Image src={Card5} alt='card-1' />
                                    <div className="content">
                                        <h3 className='text-white text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] lg:h-[96px]'>Typography <br /> Videos</h3>
                                        <p className='text-[14px] montserrat text-white h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px]'>Typography Explainer Videos turn words into art, with text taking the spotlight. Every letter becomes a visual element, enhancing the storytelling experience and leaving a lasting impression on viewers who appreciate the artistry of language.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExplainerType
