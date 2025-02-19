"use client"

import Image from "next/image"
import usePopup from "@/app/configs/store/Popup"
import arrowRed from "media/icons/arrow-red.png"

const CTA = ({ text, icon, bg, color, border, hover, href, iconCss }) => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            {href ? <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans flex items-center gap-x-2 ${color} ${bg} ${hover} ${border} z-[2]"> 
                ${text}
                <img src=${icon} alt="Icons" class="object-contain z-[1] ${iconCss}" />
                </a>`
            }} /> : <a href="tel:012-345-6789" className='bg-prime text-white border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">{text}</span>
                <Image className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 object-contain" src={arrowRed} alt="Infinity Animations " />
            </a>}
        </>
    );
}

export default CTA