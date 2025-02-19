import Image from 'next/image'
import React from 'react'
// ===== Images 
import Card1 from "media/illustration-experts/how-img-1.png"
import Card2 from "media/illustration-experts/how-img-2.png"
import Card3 from "media/illustration-experts/how-img-3.png"

const TreeStep = () => {

    return (
        <>
            <section className='pb-3 pt-16 bg-[#000000]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <h2 className='text-[#fff] text-center font-[700] montserrat text-[30px] lg:text-[35px] leading-[40px] pb-3'>Three Simple Steps To Get A Charming Illustrative Design!</h2>
                            <p className='text-[#f2f2f2] text-center text-[16px] lg:text-[15px] montserrat leading-[1.5]'>We are known for our outstanding, extraordinary quality illustrations and our dependable services at extremely affordable prices.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="pt-[25px] px-[20px] justify-center">
                                    <div className='flex justify-center '>
                                        <Image src={Card1} height={100} alt='card-1' />
                                    </div>
                                    <div className="content text-center">
                                        <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Sign Up</h3>
                                        <p className='text-[16px] lg:text-[15px] montserrat text-[#f2f2f2] leading-[1.5]'>Sign up now and share your exciting new innovative ideas about illustrative design. Consult with our highly trained consultants and explain to them about your needs and requirements. Please fill out our contact us form and get in touch with our consultant right away.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="pt-[25px] px-[20px] ">
                                    <div className='flex justify-center'>
                                        <Image src={Card2} height={100} alt='card-1' />
                                    </div>
                                    <div className="content text-center">
                                        <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Illustration Commences</h3>
                                        <p className='text-[16px] lg:text-[15px] montserrat text-[#f2f2f2] leading-[1.5]'>After you've finalized your favourite illustration design, our expert illustrators will commence the work right away on your custom illustration. Each illustration can take some time to prepare as they try to create something unique and charming.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="pt-[25px] px-[20px] justify-center">
                                    <div className='flex justify-center'>
                                        <Image src={Card3} height={100} alt='card-1' />
                                    </div>
                                    <div className="content text-center">
                                        <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] '>Final Delivery</h3>
                                        <p className='text-[16px] lg:text-[15px] montserrat text-[#f2f2f2] leading-[1.5]'>After we've finalized the design and got the designed approved by you, we then commence our final phase to provide you with the print-ready professional PDF files and finally, send you the complete formats and high-quality final files.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default TreeStep
