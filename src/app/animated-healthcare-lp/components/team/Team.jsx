//========== Imports
import Image from "next/image";
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Images
import FolgBg from 'media/healthcare/teamBg.png'

const Team = () => {
    return (
       <section className="py-10 lg:py-16 flex items-center lg:h-screen relative z-10 overflow-hidden">
            <Image src={FolgBg} alt="Infinity Animations" fill={true} className="-z-10 object-cover object-center" />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className='lg:w-9/12 mx-auto'>
                    <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins text-white text-center'>Get In <span className='text-[#F5090B]'>Touch</span> With Our <span className='text-[#F5090B]'>Animation</span> Team</h2>
                    <p className='text-[16px] poppins leading-relaxed font-normal text-white text-center my-5'>Connect with our expert animation team to bring your creative ideas to life! Whether it's for healthcare, explainer videos, or game art, we're here to turn your vision into engaging, high-quality animations.</p>
                    <p className='text-[16px] poppins leading-relaxed font-normal text-white text-center'>Have a question or need guidance on your next project? Get in touch today, and let's collaborate to make your project stand out with stunning visuals and captivating storytelling.</p>
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

export default Team
