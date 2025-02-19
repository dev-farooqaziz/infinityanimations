//========== Imports
import Image from "next/image";
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Images
import FolgBg from 'media/healthcare/helpBg.png'

const Help = () => {
    return (
        <section className="py-10 lg:py-16 flex items-center relative z-10 overflow-hidden">
            <Image src={FolgBg} alt="Infinity Animations" fill={true} className="hidden 5xl:block -z-10 object-cover object-center" />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className='grid grid-cols-1 5xl:grid-cols-2'>
                    <div>
                        <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins text-white'>Who We Help</h2>
                        <p className='text-[16px] poppins leading-relaxed font-normal text-white my-5'>We serve clients in industries spanning medical devices, pharmaceuticals, and biotechnology, as well as universities, research centers, medical marketing firms, healthcare agencies, and investor relations companies.</p>
                        <p className='text-[16px] poppins leading-relaxed font-normal text-white'>Depending on the project, our communication involves interaction with owners, founders, CEOs, CBOs, CSOs of biotech companies, marketing and communication managers, brand managers, product managers, and medical affairs managers in the pharmaceutical industry, as well as investor and PR managers.</p>
                        <p className='text-[16px] poppins leading-relaxed font-normal text-white my-5'>We assist healthcare leaders in effectively conveying their ideas to the world.</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8 my-12'>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Orthopedic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Cardiology</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Neurology</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Gynecology</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Dermatology</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Urology</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Dentistry</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Medical devices</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[16px] poppins font-normal text-white'>Surgery</p>
                                </div>
                            </div>
                        </div>
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
                                bg="bg-white"
                                color={`text-black`}
                                href="javascript:$zopim.livechat.window.show();"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help
