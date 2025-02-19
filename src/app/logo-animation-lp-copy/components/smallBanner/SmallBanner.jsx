import React from 'react' 
import { FaExternalLinkAlt } from 'react-icons/fa'
import usePopup from '@/app/configs/store/Popup';

const SmallBanner = () => {
    // PopUp Code
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className="md:mt-[70px] bg-[url('../../public/logo-animation-lp/small-banner.jpg')] bg-no-repeat bg-center bg-cover py-[60px]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="txt">
                            <h2 className='text-center text-[25px] sm:text-[35px] md:text-[45px] leading-[30px] sm:leading-[45px] font-[700] my-[2%] font-sans lg:w-10/12 mx-auto'>Get An Animated Logo For Your Business That Outshines!</h2>
                            <p className='text-center text-[17px] md:text-[20px] tracking-[1px] leading-[22px] uppercase font-[300] font-sans mt-[1%] '>ORDER DIRECTLY OR CONTACT US FOR A QUOTE.</p>
                            <div className="btn group px-[15px] pt-[1%]">
                                <button onClick={popupHandle} className='text-[17px] font-bold poppins group-hover:text-white text-[#f5090b] border-[#f5090b] border-2 rounded-[5px] leading-[19px] mt-[20px] py-[10px] px-[35px] w-full sm:w-[50%] lg:w-[20%] mx-auto text-center duration-700 group-hover:duration-700 ease-in-out group-hover:bg-[#f5090b] flex items-center justify-center overflow-hidden relative'>
                                    <FaExternalLinkAlt className='absolute top-[50%] translate-y-[-50%] ml-[-110%] group-hover:ml-[-70%] duration-700 group-hover:duration-700 ease-in-out text-[17px] font-bold poppins group-hover:text-white' />
                                    <span>Get Free Quote</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SmallBanner
