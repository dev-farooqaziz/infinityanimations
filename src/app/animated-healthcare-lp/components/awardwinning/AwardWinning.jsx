//========== Imports
import Image from "next/image";
//========== Import Slider
import { AutoScroll } from '@/components/sliders';
//========== Import Images
import icon1 from "media/infinity-studio/partner1.png";
import icon2 from "media/infinity-studio/partner1b.png";
import icon3 from "media/infinity-studio/partner2.png";
import icon4 from "media/infinity-studio/partner3.png";
import icon5 from "media/infinity-studio/partner4.png";
import icon6 from "media/infinity-studio/partner5.png";
import icon7 from "media/infinity-studio/partner6.png";
import icon8 from "media/infinity-studio/partner7.png";

const AwardWinning = () => {
    return (
        <section className="pt-10 lg:pt-16 pb-5 lg:pb-10 bg-white">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Clients <span className='text-[#F5090B]'>We</span> Serve</h2>
                        <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure</p>
                    </div>
                </div>
            </div>
            <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                {
                    [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8,].map((e, i) => (
                        <div key={i} className="shrink-0 grow-0 basis-1/3 md:basis-1/4 lg:basis-1/5 mr-5">
                            <Image src={e} alt="logo" className='aspect-[15/10] object-contain w-[200px]' />
                        </div>
                    ))
                }
            </AutoScroll>
        </section>
    )
}

export default AwardWinning
