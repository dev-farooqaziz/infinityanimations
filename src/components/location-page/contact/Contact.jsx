"use client"
import Image from "next/image";
// Import Components
import Form from "../form/Form";
// Import Images
import contactImg from "media/location-page/contact-img.png";
// Import CSS
import styles from "./Contact.module.css"

const Contact = () => {

    return (
        <>
            <section className={`w-full h-full mt-8 md:mt-16 mb-10 flex items-center justify-start `}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center mb-6'>
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-3 capitalize`}>
                                Connect With Us
                            </h2>
                            <p className="w-full md:w-[70%] lg:w-[60%] mx-auto text-[15px] lg:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                            Let’s engage, share ideas, and explore together
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-4 bg-transparent relative z-50 mx-auto'>
                        <div className="px-6 py-8 md:py-12 border rounded-[30px]  lg:w-[90%]">
                            <Form />
                        </div>
                        <div className={`${styles.imgBefore} relative lg:block hidden`}>
                            <Image src={contactImg} className="absolute right-[-3.5%] xl:right-[-4%] 2xl:right-[-4%] xxl:right-[-15%] 3xl:right-[-29.5%] top-[-14.5%]" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
