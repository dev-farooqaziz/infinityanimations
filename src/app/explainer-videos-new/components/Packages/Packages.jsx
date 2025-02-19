import usePopup from '@/app/configs/store/Popup';
import React from 'react'
// icons
import { FaCheck, FaRegCommentDots } from "react-icons/fa";

const Packages = () => {
    // Form Code Start
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className="py-[50px] lg:py-[100px]">
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-black text-center font-[700] poppins text-[20px] md:text-[25px] lg:text-[40px] mb-1'>Featured <span className='text-[#F36E21]'>Packages</span> To Fit Every Budget</h2>
                            <p className='text-[16px] lg:text-[18px] text-[#333] text-center font-[300] font-sans lg:w-9/12 mx-auto mb-6 lg:mb-16'>
                                We like to serve the industry with persuasive and conceptual designs that rock the market. Creating an impact is what we do
                                best and what we like to provide to every client with our pocket-friendly design packages.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 lg:gap-9">
                        <div className="col-span-12 lg:col-span-4 group">
                            <div className="card relative border-[#ccc] border rounded-[15px] pt-[25px] mb-[1.5rem] group-hover:bg-gradient-to-t from-[#5c1dff] to-[#1f0c4a] duration-700 ease-in-out group-hover:duration-700 ">
                                <div className="header border-b-2 border-[#ccc] mb-[20px] pb-[20px] mx-[25px]">
                                    <h2 className='text-[#333] text-[28px] md:text-[35px] md:leading-[40px] font-[700] poppins group-hover:text-white'>$499 <br />
                                        Basic Videos</h2>
                                    <p className='text-[#666] text-[16px] lg:text-[18px] font-sans group-hover:text-white'>Text & Image Compilation</p>
                                </div>
                                <div className="card_main relative mx-[10px] group-hover:mx-[8px] group-hover:duration-700 duration-700">
                                    <div className="pr-[10px] pl-[25px] bg-[#eee] duration-700 ease-in-out pt-[20px] group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] rounded-[15px] group-hover:shadow-2xl">
                                        <ul className='max-h-[271px] overflow-hidden group-hover:overflow-y-scroll overflow-x-hidden packagesScroll pr-[0] group-hover:pr-[35px] group-hover:duration-700 duration-700 ease-in-out pb-[20px]'>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>30 Seconds Duration </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Script Writing </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Custom Artwork </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Animation </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Professional Voice-over </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Background Music & Sound Effects </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>HD Format Video </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Dedicated Support </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-[35px] mb-[30px] px-[40px]">
                                    <div className="btnOne">
                                        <button onClick={popupHandle} className='group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] group-hover:shadow-2xl group-hover:text-[#1c214e] bg-[#1c214e] duration-700 ease-in-out group-hover:duration-700 text-white text-[16px] md:text-[18px] py-[10px] px-[25px] md:px-[40px] poppins cursor-pointer rounded-[30px] font-[700]'>
                                            Order Now
                                        </button>
                                    </div>
                                    <div className="livechat">
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-[16px] md:text-[20px] text-[#333] group-hover:text-white duration-700 ease-in-out group-hover:duration-700  leading-[1.2] font-[700] poppins'>
                                            <span className='text-[#1c214e] group-hover:text-white duration-700 ease-in-out group-hover:duration-700 text-[12px] md:text-[14px] font-[300] font-sans flex items-center'>
                                                Click here to
                                                <FaRegCommentDots className='text-[#009245] ml-[5px]' />
                                            </span>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                                <div className="card_bottom md:block hidden bg-[#eee] text-center py-[6px] rounded-b-[14px]">
                                    <a href="tel:012-345-6789;" className='text-[#333] text-[12px] md:text-[14px] font-[400] poppins'>
                                        Call us <span className='font-[600]'>+012-345-6789</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 group">
                            <div className="card relative border-[#ccc] border rounded-[15px] pt-[25px] mb-[1.5rem] group-hover:bg-gradient-to-t from-[#5c1dff] to-[#1f0c4a] duration-700 ease-in-out group-hover:duration-700">
                                <div className="header border-b-2 border-[#ccc] mb-[20px] pb-[20px] mx-[25px]">
                                    <h2 className='text-[#333] text-[28px] md:text-[35px] md:leading-[40px] font-[700] poppins group-hover:text-white'>$799 <br />
                                        Premium Videos</h2>
                                    <p className='text-[#666] text-[16px] lg:text-[18px] font-sans group-hover:text-white'>Whiteboard or Motion Graphic Animation</p>
                                </div>
                                <div className="card_main relative mx-[10px] group-hover:mx-[8px] group-hover:duration-700 duration-700">
                                    <div className="pr-[10px] pl-[25px] bg-[#eee] duration-700 ease-in-out pt-[20px] group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] rounded-[15px] group-hover:shadow-2xl">
                                        <ul className='max-h-[271px] overflow-hidden group-hover:overflow-y-scroll overflow-x-hidden packagesScroll pr-[0] group-hover:pr-[35px] group-hover:duration-700 duration-700 ease-in-out pb-[20px]'>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>30 Seconds Duration </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Script Writing </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Hand-drawn Illustrations</span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Animation </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Professional Voice-over </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Background Music & Sound Effects </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Unlimited Revisions</span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>HD Format Video </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Dedicated Support </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-[35px] mb-[30px] px-[40px]">
                                    <div className="btnOne">
                                        <button onClick={popupHandle} className='group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] group-hover:shadow-2xl group-hover:text-[#1c214e] bg-[#1c214e] duration-700 ease-in-out group-hover:duration-700 text-white text-[16px] md:text-[18px] py-[10px] px-[25px] md:px-[40px] poppins cursor-pointer rounded-[30px] font-[700]'>
                                            Order Now
                                        </button>
                                    </div>
                                    <div className="livechat">
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-[16px] md:text-[20px] text-[#333] group-hover:text-white duration-700 ease-in-out group-hover:duration-700  leading-[1.2] font-[700] poppins'>
                                            <span className='text-[#1c214e] group-hover:text-white duration-700 ease-in-out group-hover:duration-700 text-[12px] md:text-[14px] font-[300] font-sans flex items-center'>
                                                Click here to
                                                <FaRegCommentDots className='text-[#009245] ml-[5px]' />
                                            </span>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                                <div className="card_bottom md:block hidden bg-[#eee] text-center py-[6px] rounded-b-[14px]">
                                    <a href="tel:012-345-6789;" className='text-[#333] text-[12px] md:text-[14px] font-[400] poppins'>
                                        Call us <span className='font-[600]'>+012-345-6789</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 group">
                            <div className="card relative border-[#ccc] border rounded-[15px] pt-[25px] mb-[1.5rem] group-hover:bg-gradient-to-t from-[#5c1dff] to-[#1f0c4a] duration-700 ease-in-out group-hover:duration-700">
                                <div className="header border-b-2 border-[#ccc] mb-[20px] pb-[20px] mx-[25px]">
                                    <h2 className='text-[#333] text-[28px] md:text-[35px] md:leading-[40px] font-[700] poppins group-hover:text-white'>$999 <br />
                                        Basic Videos</h2>
                                    <p className='text-[#666] text-[16px] lg:text-[18px] font-sans group-hover:text-white'>Text & Image Compilation</p>
                                </div>
                                <div className="card_main relative mx-[10px] group-hover:mx-[8px] group-hover:duration-700 duration-700">
                                    <div className="pr-[10px] pl-[25px] bg-[#eee] duration-700 ease-in-out pt-[20px] group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] rounded-[15px] group-hover:shadow-2xl">
                                        <ul className='max-h-[271px] overflow-hidden group-hover:overflow-y-scroll overflow-x-hidden packagesScroll pr-[0] group-hover:pr-[35px] group-hover:duration-700 duration-700 ease-in-out pb-[20px]'>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>30 Seconds Duration </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Script Writing </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Hi-Tech Character Illustrations</span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Animation </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Professional Voice-over </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Background Music & Sound Effects </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Unlimited Revisions</span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>HD Format Video </span>
                                            </li>
                                            <li className='text-[#171b41] text-[16px] md:text-[18px] mb-[10px] font-[400] poppins flex'>
                                                <FaCheck className='text-[#F36E21] mr-[8px] font-[900]' />
                                                <span className='inline'>Dedicated Support </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-[35px] mb-[30px] px-[40px]">
                                    <div className="btnOne">
                                        <button onClick={popupHandle} className='group-hover:bg-white group-hover:translate-x-[-15px] lg:group-hover:translate-x-[-24px] group-hover:shadow-2xl group-hover:text-[#1c214e] bg-[#1c214e] duration-700 ease-in-out group-hover:duration-700 text-white text-[16px] md:text-[18px] py-[10px] px-[25px] md:px-[40px] poppins cursor-pointer rounded-[30px] font-[700]'>
                                            Order Now
                                        </button>
                                    </div>
                                    <div className="livechat">
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-[16px] md:text-[20px] text-[#333] group-hover:text-white duration-700 ease-in-out group-hover:duration-700  leading-[1.2] font-[700] poppins'>
                                            <span className='text-[#1c214e] group-hover:text-white duration-700 ease-in-out group-hover:duration-700 text-[12px] md:text-[14px] font-[300] font-sans flex items-center'>
                                                Click here to
                                                <FaRegCommentDots className='text-[#009245] ml-[5px]' />
                                            </span>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                                <div className="card_bottom md:block hidden bg-[#eee] text-center py-[6px] rounded-b-[14px]">
                                    <a href="tel:012-345-6789;" className='text-[#333] text-[12px] md:text-[14px] font-[400] poppins'>
                                        Call us <span className='font-[600]'>+012-345-6789</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages
