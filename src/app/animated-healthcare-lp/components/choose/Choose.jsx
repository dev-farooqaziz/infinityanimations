//========== Imports
import Image from 'next/image';
//========== Import Components
import CTA from "../cta/CTA";
//========= Import Images 
import choose1 from "media/healthcare/icons/choose1.png";
import choose2 from "media/healthcare/icons/choose2.png";
import choose3 from "media/healthcare/icons/choose3.png";


const Choose = () => {
    return (
        <>
            <section className="py-10 lg:py-16 bg-white" id='WhyUs'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around mb-8 lg:mb-14'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Why <span className='text-[#F5090B]'>Choose</span> Us</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex flex-col gap-4 items-center px-8 py-6 5xl:py-10 shadow-custom">
                            <Image src={choose1} alt="Infinity Animations" />
                            <h4 className='text-[20px] tracking-wide poppins font-bold text-black text-center'>
                                Expertise In Medical Visualization
                            </h4>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black text-center'>Our team specializes in healthcare animation, ensuring accuracy, clarity, and visual appeal that align with medical standards.</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center px-8 py-6 5xl:py-10 shadow-custom">
                            <Image src={choose2} alt="Infinity Animations" />
                            <h4 className='text-[20px] tracking-wide poppins font-bold text-black text-center'>
                                Customized Patient- <br /> Centric Solutions
                            </h4>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black text-center'>We create tailored animations that resonate with your target audience, enhancing patient education and boosting engagement.</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center px-8 py-6 5xl:py-10 shadow-custom">
                            <Image src={choose3} alt="Infinity Animations" />
                            <h4 className='text-[20px] tracking-wide poppins font-bold text-black text-center'>
                                Fast Turnaround, <br /> High-Quality Results
                            </h4>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black text-center'>We deliver high-quality animations quickly, without compromising on the precision or effectiveness of your healthcare content.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 mt-8 lg:mt-12">
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
            </section>
        </>
    )
}

export default Choose
