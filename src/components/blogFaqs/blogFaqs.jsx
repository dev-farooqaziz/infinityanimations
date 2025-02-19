"use client"
import { useState } from "react";
import Image from "next/image";
// Import Images
import arrowDown from "media/icons/arrow-down.png";
import arrowUp from "media/icons/arrow-up.png";
// Import CSS
import styles from "./blogFaqs.module.css"

const BlogFaqs = ({ faqData }) => {

    const [faqStates, setFaqStates] = useState(Array(faqData.length).fill(false));
    const [isClassAdded, setClassAdded] = useState(false);
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
        setClassAdded(true);
    };
    return (
        <>
                    <div className="grid">
                        {faqData.map(({ questions, answers }, index) => (
                            <div key={index} className={`py-1 ${faqStates[index] ? 'border-primary-100' : ' border-white'} border-b-2`}>
                                <div className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}>
                                    <h4 className={`text-[18px] sm:text-[21px] font-bold font-sans`}>{questions}</h4>
                                    <span>
                                        <Image
                                            quality={75}
                                            alt='Infinity Animations'
                                            src={faqStates[index] ? arrowDown : arrowUp}
                                            className=' '
                                        />
                                    </span>
                                </div>
                                <div className={`text-[14px] sm:text-[16px] font-normal font-sans pb-1 ${styles.ani} ${faqStates[index] ? 'block' : 'hidden'}`}>
                                    <p dangerouslySetInnerHTML={{ __html: answers }}></p>
                                </div>

                            </div>
                        ))}
                    </div>
        </>
    )
}

export default BlogFaqs