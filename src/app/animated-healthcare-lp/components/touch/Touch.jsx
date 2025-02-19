//========== Imports
import Image from "next/image";
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Images
import FolgBg from 'media/healthcare/touchBg.png'

const Touch = () => {
    return (
        <section className="py-10 lg:py-20 flex items-center relative z-10 overflow-hidden">
            <Image src={FolgBg} alt="Infinity Animations" fill={true} className="-z-10 object-cover object-center" />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className='5xl:w-8/12 mx-auto'>
                    <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins text-white text-center'>Get In <span className='text-[#F5090B]'>Touch</span> With Our <span className='text-[#F5090B]'>Animation</span> Team</h2>
                    <p className='text-[16px] poppins leading-relaxed font-normal text-white text-center mt-5'>Get In Touch With Our Healthcare Animation Team To Discuss Your Project Needs. We're Here To Bring Your Vision To Life With Impactful, Engaging Animations.</p>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 pt-6 lg:pt-8">
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
                            bg="bg-white"
                            color={`text-black`}
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Touch
