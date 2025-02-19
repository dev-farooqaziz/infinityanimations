//========== Imports
import Image from 'next/image';
//========== Import Components
import CTA from "../cta/CTA";
//========= Import Images 
import proces from "media/healthcare/process.png";


const Process = () => {
    return (
        <>
            <section className="py-10 lg:py-16 bg-white">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around mb-10 5xl:mb-14'>
                        <div className='w-full'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black'>Our <span className='text-[#F5090B]'>Healthcare</span> Animation Process</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black'>Get In Touch With Our Healthcare Animation Team To Discuss Your Project Needs. We're Here To Bring Your Vision To Life With Impactful, Engaging Animations.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 5xl:grid-cols-2 items-center gap-10 lg:gap-12">
                        <div className="flex flex-col gap-8">
                            <Image src={proces} alt="Infinity Animations" />
                            <div className="flex items-center gap-6 md:gap-8">
                                <CTA
                                    text="Contact Us"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    href="tel:012-345-6789"
                                    icon="/healthcare/icons/call.png"
                                    iconCss="flex items-center justify-center w-[20px] h-[20px]"
                                />
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-transparent"
                                    color={`text-black`}
                                    border={`border-2 border-[#000000]`}
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <h4 className='text-[18px] md:text-[20px] tracking-wide poppins font-bold text-black'>
                                    <span className='text-[#F5090B]'>01.</span> Consultation & Strategy:
                                </h4>
                                <p className='text-[16px] poppins leading-relaxed font-normal text-black'>We begin by understanding your healthcare objectives and developing a tailored animation strategy to meet your goals.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className='text-[18px] md:text-[20px] tracking-wide poppins font-bold text-black'>
                                    <span className='text-[#F5090B]'>02.</span> Script & Storyboard Development:
                                </h4>
                                <p className='text-[16px] poppins leading-relaxed font-normal text-black'>Our team crafts a clear, engaging script and detailed storyboard to visually outline your message.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className='text-[18px] md:text-[20px] tracking-wide poppins font-bold text-black'>
                                    <span className='text-[#F5090B]'>03.</span> Animation & Production:
                                </h4>
                                <p className='text-[16px] poppins leading-relaxed font-normal text-black'>We transform your ideas into dynamic animations, ensuring accuracy, clarity, and engagement throughout the video.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className='text-[18px] md:text-[20px] tracking-wide poppins font-bold text-black'>
                                    <span className='text-[#F5090B]'>04.</span> Review & Delivery:
                                </h4>
                                <p className='text-[16px] poppins leading-relaxed font-normal text-black'>After refining the animation based on feedback, we deliver the final product, ready to elevate your healthcare communication.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process
