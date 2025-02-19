"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// ===== CSS
import styles from '../../../styles/blogNew/InnerBanner.module.css';
// ===== Images
import open from 'media/blogs/open.png';
import close from 'media/blogs/close.png';

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
            {faqData.map(({ questions, answers }, index) => (
                <div key={index} className={styles.faqs}>
                    <div className={`${faqStates[index] ? 'touchFaq' : ''}`}>
                        <div onClick={() => toggleFaq(index)} className={styles.heading}>
                            <h3 className='fontsfprosemi'>
                                {questions}
                                <span className={styles.plus}>
                                    <Image
                                        quality={75}
                                        alt='Infinity Animations'
                                        src={faqStates[index] ? open : close}
                                        className='img-fluid'
                                    />
                                </span>
                            </h3>
                        </div>
                        <div className={faqStates[index] ? 'block' : 'hidden'}>
                            <p dangerouslySetInnerHTML={{ __html: answers }} className='fontsfprosemi'></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogFaqs;
