import React, { useEffect, useRef } from 'react'

const Animations = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.6 // Change this value according to your preference
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounters = () => {
        const counterElements = document.querySelectorAll('.counter');

        counterElements.forEach((item) => {
            let counterInnerText = parseInt(item.textContent);
            let count = 1;
            let speed = parseInt(item.dataset.speed) / counterInnerText;
            const stop = setInterval(() => {
                item.textContent = count++;
                if (counterInnerText < count) {
                    clearInterval(stop);
                    if (counterInnerText === 1) {
                        item.textContent += "M";
                    } else if (counterInnerText === 124) {
                        item.textContent += "%";
                    } else if (counterInnerText === 138) {
                        item.textContent += "%";
                    } else if (counterInnerText === 167) {
                        item.textContent += "%";
                    } else if (counterInnerText === 112) {
                        item.textContent += "%";
                    } else if (counterInnerText === 127) {
                        item.textContent += "%";
                    } else {
                        item.textContent += "";
                    }
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    return (
        <>
            <section className='py-[50px] lg:pt-[50px] xl:pb-[100px] relative bg-white' ref={sectionRef}>
                <div className='lg:max-w-7xl mx-auto '>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:mb-[40px]">
                            <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>Proven  <span className="text-[#A70A0E]"> Statistics</span> of Infinity Animations</h2>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Our habit of delivering quality explainer videos has cemented our position as one of the top  <br className='lg:block hidden' />video animation companies globally. </p>
                        </div>
                    </div>
                    <div className='px-[20px] rounded-[10px] relative'>
                        <div className="grid grid-cols-12 gap-0 lg:gap-6">
                            <div className={`col-span-12 sm:col-span-6 lg:col-span-3 py-[25px]`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] font-[700] montserrat text-center flex items-center justify-center'><span className='mb-0 d-inline counter' data-speed="1000"> 4 </span><span className='text-[36px] font-[700]'>+</span></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Years Of <br />
                                    Experience</p>
                            </div>
                            <div className={`border-t-2 sm:border-t-0 sm:border-l-2 border-slate-500 col-span-12 sm:col-span-6 lg:col-span-3 py-[25px]`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] font-[700] montserrat text-center flex items-center justify-center'><span className='mb-0 d-inline counter' data-speed="1000"> 1600 </span><span className='text-[36px] font-[700]'>+</span></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Videos <br />
                                    Delivered</p>
                            </div>
                            <div className={`border-t-2 lg:border-t-0 lg:border-l-2 border-slate-500 col-span-12 sm:col-span-6 lg:col-span-3 py-[25px]`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] font-[700] montserrat text-center flex items-center justify-center'><span className='mb-0 d-inline counter' data-speed="1000"> 1200 </span><span className='text-[36px] font-[700]'>+</span></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Clients <br />
                                    Across The World</p>
                            </div>
                            <div className={`border-t-2 lg:border-t-0 sm:border-l-2 border-slate-500 col-span-12 sm:col-span-6 lg:col-span-3 py-[25px]`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] font-[700] montserrat text-center flex items-center justify-center'><span className='mb-0 d-inline counter' data-speed="1000"> 15 </span><span className='text-[36px] font-[700]'>M+</span></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animations
