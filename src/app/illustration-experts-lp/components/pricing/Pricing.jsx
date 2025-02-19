"use client"
import React from 'react'
import Image from "next/image";
import usePopup from "@/app/configs/store/Popup";
import styles from "./packages.module.css";
// Import Images
import star from "media/icons/star.png"
import chat from "media/icons/chat.png"
import arrow from "media/icons/arrow-red.png"
import arrowB from "media/icons/arrow.png"
import tickP from "media/icons/tick-p.png"
import tickW from "media/icons/tick-w.png"

const packages = [
    {
        name: 'Basic',
        price: '$49',
        backgroundColor: '#2f2f2fd1',
        tickImage: tickP,
        color: "text-black",
        ctaColor: "text-black",
        titleColor: "text-black",
        features: [
            '1 Illustration Design',
            '1 Creative Designer',
            '1 Revision',
            'Money Back Guarantee',
            'Full Ownership',
            'Dedicated Project Manager',
            { text: 'Invisible Point', isVisible: true },
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-prime text-white border-0',
                image: arrow,
                href: "tel:012-345-6789",
                imgColor: "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
    {
        name: 'Silver',
        price: '$179',
        backgroundColor: '#262626',
        color: "text-white",
        tickImage: tickW,
        mblSpc: 'my-10 md:my-0',
        ctaColor: "text-white",
        titleColor: "text-white",
        features: [
            '4 Illustration Designs',
            '2 Creative Designer',
            '5 Revisions',
            'Money Back Guarantee',
            'Full Ownership',
            'Dedicated Project Manager',
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-white text-black font-semibold border-0',
                image: arrowB,
                href: "tel:012-345-6789",
                imgColor: "bg-black w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-[8.5px] rotate-[90deg]"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
    {
        name: 'Gold',
        price: '$399',
        backgroundColor: '#2f2f2fd1',
        color: "text-black",
        tickImage: tickP,
        ctaColor: "text-black",
        titleColor: "text-black",
        features: [
            '10 Illustration Designs',
            '4 Creative Designer',
            '100% vector based work',
            'Unlimited Revisions',
            'FREE Color Options',
            'File Format (JPEG, PNG, Ai, PSD, PDF)',
            'Money Back Guarantee',
            'Full Ownership',
            'Dedicated Project Manager',
            'Prioritized Support',
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-prime text-white border-0',
                image: arrow,
                imgColor: "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
    {
        name: 'Platinum',
        price: '$799',
        backgroundColor: '#262626',
        color: "text-white",
        tickImage: tickW,
        mblSpc: 'my-10 md:my-0',
        ctaColor: "text-white",
        titleColor: "text-white",
        features: [
            '20 Illustration Designs',
            '6 Creative Designer',
            '100% vector based work',
            'Unlimited Revisions',
            'FREE Color Options',
            'File Format (JPEG, PNG, Ai, PSD, PDF)',
            'Money Back Guarantee',
            'Full Ownership',
            'Dedicated Project Manager',
            'Prioritized Support',
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-white text-black font-semibold border-0',
                image: arrowB,
                href: "tel:012-345-6789",
                imgColor: "bg-black w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-[8.5px] rotate-[90deg]"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
];

const Pricing = ({ content }) => {
    const { title, para } = content;

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
            <section className={`w-full flex items-center justify-start pt-16 pb-3`}>
                <div className="container">
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <h1 className="text-[40px] md:text-[50px] font-semibold font-sans text-center leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5 pb-[80px]">
                                {para}
                            </p>
                            <div className={`${styles.cardsMainDiv}`}>
                                {packages.map((pkg, index) => (
                                    <div key={index} className={`relative ${pkg.mblSpc} h-full ${styles.cards}`}>
                                        <div className={`absolute top-[-7%] md:top-[-10%] lg:top-[-7%] xl:top-[-8%] left-[12%] h-[115px] w-[75%] -z-10 rounded-3xl flex items-start justify-center pt-4 gap-2 
                                            ${(index === 1 || index === 3) ? 'bg-[#262626]' : 'bg-third'}`}>
                                            {Array.from({ length: index + 1 }).map((_, i) => (
                                                <Image key={i} src={star} className="w-[6%]" alt="Infinity Animation" />
                                            ))}
                                        </div>
                                        <div className={`relative ${pkg.backgroundColor === '#262626' ? 'bg-second' : 'backdrop-blur-sm bg-[#2f2f2fd1]/75'} flex flex-col justify-start py-12 h-auto rounded-[35px]`}>
                                            <div className="border-b-2 px-6 pb-4">
                                                <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">{pkg.name}</h3>
                                                <h4 className={`text-[60px] font-extrabold font-sans ${pkg.backgroundColor === '#2f2f2fd1' ? 'text-secondary-100' : ''}`}>{pkg.price}</h4>
                                            </div>
                                            <ul className="pt-4 px-6 max-h-[230px] overflow-y-scroll">
                                                {pkg.features.map((feature, i) => (
                                                    typeof feature === 'string' ? (
                                                        <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                                            <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ) : (
                                                        (feature.isVisible && (
                                                            <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider invisible">
                                                                <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation" />
                                                                <span>{feature.text}</span>
                                                            </li>
                                                        ))
                                                    )
                                                ))}
                                            </ul>
                                            <div className="flex justify-between px-6 mt-5 pt-4">
                                                <div>
                                                    <p className="text-[15px] font-bold font-sans">Speak With Us</p>
                                                    <a href="tel:012-345-6789" className="font-sans text-[14px]">012-345-6789</a>
                                                </div>
                                                <div>
                                                    <p className="text-[15px] font-bold font-sans">Want To Discuss</p>
                                                    <a href="javascript:$zopim.livechat.window.show();" className="font-sans text-[14px]">Live Chat Now</a>
                                                </div>
                                            </div>
                                            <div className="flex justify-between px-6 mt-5">
                                                {pkg.buttons.map((button, i) => (
                                                    <React.Fragment key={i}>
                                                        {button.text === "Get Started" ? (
                                                            <button key={i} onClick={popupHandle} className={`flex items-center justify-between font-sans ${button.color} w-max px-3 xl:px-5 gap-2 rounded-lg py-[7px]`}>
                                                                <span className="text-[16px] xl:text-[18px] font-normal font-sans">{button.text}</span>
                                                                <Image className={`${button.imgColor}`} src={button.image} alt="Infinity Animations " />
                                                            </button>
                                                        ) : (
                                                            <a key={i} href={button.href} className={`flex items-center justify-between font-sans ${button.color} w-max py-2 px-3 xl:px-5 gap-2 rounded-lg text-[14px] xl:text-[16px]`}>
                                                                {button.text}
                                                                <Image src={button.image} className={`${button.imgColor} w-[30px]`} alt="Infinity Animation" />
                                                            </a>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing 
