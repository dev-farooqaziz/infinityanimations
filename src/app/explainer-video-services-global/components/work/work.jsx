import React, { useState } from 'react';
import Image from 'next/image';
import ArrowUnfill from 'media/animating-studio/arrow-unfill.svg';
import ArrowFill from 'media/animating-studio/arrow-fill.svg';

function Work({ content }) {
    const { workList } = content;
    const [hoveredItem, setHoveredItem] = useState(null);
    const [clickedItem, setClickedItem] = useState(0);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
        setClickedItem(null)
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleClick = (index) => {
        setClickedItem(clickedItem === index ? null : index);
        setHoveredItem(null);
    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className="py-[50px] lg:py-[60px] bg-white">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="divide-y divide-cyan-900">
                    <div className="mb-[10px]">
                        <h2 className="text-[#000] font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]">
                            How We Work
                        </h2>
                        <p className="text-[#231F20] text-[16px] poppins font-[400] py-[17px] lg:w-[90%] leading-[20px] md:leading-[22px] mb-0">
                            We've simplified our video production process as much as possible thanks to our years of experience. <br className='lg:block hidden' /> We have got field experts in each process of video making.
                        </p>
                    </div>
                    {workList?.map((item, index) => (
                        <div
                            key={index}
                            className="py-[15px] flex items-center justify-between relative cursor-pointer "
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3 className={`${clickedItem === index || hoveredItem === index ? "text-[#A70A0E]" : "text-[#003262]"} font-[600] poppins text-[18px] md:text-[24px] lg:text-[28px]`}>
                                {item.listTitle}
                            </h3>
                            <a href="javascript:$zopim.livechat.window.show();">
                                <Image
                                    src={clickedItem === index || hoveredItem === index ? ArrowFill : ArrowUnfill}
                                    alt="Arrow"
                                    width={60}
                                    height={60}
                                />
                            </a>
                            <div className="hidden lg:block absolute right-[20%] md:right-[10%] z-[10]">
                                {clickedItem === index || hoveredItem === index ? (
                                    <Image src={item.listImage} alt="WorkImg" className='h-[120px] w-[120px] md:h-[150px] md:w-[150px]' />
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
