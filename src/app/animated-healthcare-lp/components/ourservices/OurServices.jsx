//========== Imports
import Image from 'next/image';
//========== Import Components
import CTA from "../cta/CTA";
//========= Import Images 
import service1 from "media/healthcare/services1.png";
import service2 from "media/healthcare/services2.png";
import service3 from "media/healthcare/services3.png";
import service4 from "media/healthcare/services4.png";
import service5 from "media/healthcare/services5.png";
import service6 from "media/healthcare/services6.png";
import service7 from "media/healthcare/services7.png";
import service8 from "media/healthcare/services8.png";
import service9 from "media/healthcare/services9.png";

//========= services Data 
const services = [
    {
        title: '3D Medical Animation',
        image: service1
    },
    {
        title: 'Medical Testimonials',
        image: service2
    },
    {
        title: 'Medical Motion Graphics',
        image: service3
    },
    {
        title: 'Medical Product Animations',
        image: service4
    },
    {
        title: 'Medical Explainer Videos',
        image: service5
    },
    {
        title: 'Medical Training Videos',
        image: service6
    },
    {
        title: 'Medical Live-Action Animations',
        image: service7
    },
    {
        title: 'Medical Product Modeling',
        image: service8
    },
    {
        title: 'Medical Education Videos',
        image: service9
    },
];

const OurServices = () => {
    return (
        <>
           <section className="py-10 lg:py-16 bg-white" id='Services'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Our Healthcare <span className='text-[#F5090B]'>Animation</span> Services</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-14">
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {services.map((item, index) => (
                                <div key={index} className="relative group overflow-hidden transition-all duration-300">
                                    <Image src={item.image} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[110px] 5xl:top-[132px] translate-x-[-50%] translate-y-[0px] group-hover:translate-y-[-75px] transition-all duration-300 flex flex-col gap-5 items-center justify-center">
                                        <p className='text-[16px] 5xl:text-[20px] tracking-wide poppins font-bold text-white text-center opacity-1 group-hover:opacity-0'>
                                            {item.title}
                                        </p>
                                        <CTA
                                            text="Get A Quote"
                                            bg="bg-prime"
                                            color={`text-white`}
                                            href="javascript:$zopim.livechat.window.show();"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices