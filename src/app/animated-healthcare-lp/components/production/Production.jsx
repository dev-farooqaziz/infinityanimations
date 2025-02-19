//========== Import Components
import CTA from "../cta/CTA";
import Form from '../form/Form'

const Production = () => {
    return (
       <section className="py-10 lg:py-16 bg-white">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 items-center gap-y-10 sm:gap-y-16">
                    <div className='col-span-12 5xl:col-span-7'>
                        <div className='w-full mb-10'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center 5xl:text-left'>Animated <span className='text-[#F5090B]'>Healthcare</span> Video <br /> Production Company</h2>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black text-center 5xl:text-left w-full 5xl:w-11/12'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical information easily understandable.</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 ml-[20px] sm:ml-[40px] md:ml-[50px] lg:ml-[110px] 5xl:ml-0'>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className="text-[18px] poppins font-medium text-black">Total Projects:</h3>
                                    <p className='text-[16px] poppins font-normal text-black'>250+ Healthcare Animations</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className="text-[18px] poppins font-medium text-black">Total Success:</h3>
                                    <p className='text-[16px] poppins font-normal text-black'>98% Client Satisfaction</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className="text-[18px] poppins font-medium text-black">Years of Experience:</h3>
                                    <p className='text-[16px] poppins font-normal text-black'>10+ Years in Animation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center border border-[#F5090B] rounded-full p-1">
                                    <span className="bg-[#F5090B] rounded-full p-[6px]"></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className="text-[18px] poppins font-medium text-black">Global Reach:</h3>
                                    <p className='text-[16px] poppins font-normal text-black'>Serving Clients in 15+ Countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center 5xl:justify-start gap-8 mt-12">
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
                    <div className="col-span-1 hidden md:block 5xl:hidden"></div>
                    <div className="col-span-12 md:col-span-10 5xl:col-span-5">
                        <div className="bg-[#F3F3F3] px-8 py-8 md:px-10 md:py-12 relative">
                            <span className="hidden md:block before:absolute before:bg-[#D8D8D8] before:w-[1.5px] 5xl:before:w-[1px] xl:before:w-[1.5px] before:h-[108%] md:before:h-[112%] 5xl:before:h-[105%] xl:before:h-[112%] before:left-0 before:top-[-4%] md:before:top-[-6%] 5xl:before:top-[-2.5%] xl:before:top-[-6%] after:absolute after:bg-[#D8D8D8] after:w-[110%] 5xl:after:w-[106%] xl:after:w-[115%] after:h-[1.5px] 5xl:after:h-[1px] xl:after:h-[1.5px] after:left-[-5%] 5xl:after:left-[-3%] xl:after:left-[-7%] after:top-0"></span>
                            <div className="mb-8">
                                <h4 className="text-[25px] poppins font-semibold text-black text-center">Fill Your <span className='text-[#F5090B]'>Requirements</span></h4>
                                <p className='text-[14px] poppins font-normal text-black text-center'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement.</p>
                            </div>
                            <Form
                                bg="bg-white"
                            />
                            <span className="hidden md:block before:absolute before:bg-[#D8D8D8] before:w-[1.5px] md:before:w-[2px] 5xl:before:w-[1.5px] xl:before:w-[2px] before:h-[108%] md:before:h-[112%] 5xl:before:h-[105%] xl:before:h-[112%] before:right-0 before:bottom-[-4%] md:before:bottom-[-6%] 5xl:before:bottom-[-2.5%] xl:before:bottom-[-6%] after:absolute after:bg-[#D8D8D8] after:w-[110%] 5xl:after:w-[106%] xl:after:w-[115%] after:h-[2px] md:after:h-[1.5px] after:right-[-5%] 5xl:after:right-[-3%] xl:after:right-[-7%] after:bottom-0"></span>
                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block 5xl:hidden"></div>
                </div>
            </div>
        </section>
    )
}

export default Production 
