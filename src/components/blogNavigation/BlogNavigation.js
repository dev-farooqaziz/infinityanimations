"use client"
import React, { useEffect, useState } from 'react';
// ===== CSS
import styles from "./blogNavigation.module.css"
import { FaAngleDown } from 'react-icons/fa6';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const BlogNavigation = ({ postData }) => {
    const [h2Tags, setH2Tags] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const [isNavVisible, setIsNavVisible] = useState(true);

    //=============== Parse h2 tags ===============//
    useEffect(() => {
        if (postData && postData.content) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(postData.content, 'text/html');
            const h2Elements = doc.querySelectorAll('h2');

            let h2ElementLeft = document.querySelectorAll("#leftcontent h2");
            Array.from(h2ElementLeft).map((e, i) => {
                e.setAttribute("id", `heading${i + 1}`);
            });

            const h2TagsArray = Array.from(h2Elements).map(h2 => h2.innerText);
            setH2Tags(h2TagsArray);

            if (h2Elements.length > 0) {
                const firstHeadingId = `#${h2Elements[0].getAttribute('id')}`;
                setActiveHeading(firstHeadingId);
            }
        }
    }, [postData]);

    //=============== Handle heading ===============//
    const handleHeadingClick = (id) => {
        setActiveHeading(id);
        console.log(id);
    };

    //=============== Toggle navigation ===============//
    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <div className='col-span-12 w-full bg-[#4A4A4A] flex flex-col text-center rounded-[10px] '>
                <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight my-4 capitalize flex justify-center items-center`} onClick={toggleNavVisibility}>
                    Quick Links
                    <FaAngleDown
                        className={`ms-3 transition-transform ${isNavVisible ? "rotate-180" : ""
                            }`}
                    />
                </h5>
                {isNavVisible && (
                    <div class="grid grid-cols-1 divide-y-2 divide-gray-500 pb-[10px] ">
                        {h2Tags.map((item, index) => (
                            <div key={index}
                                className={`${styles.Diver} ${activeHeading === `#heading${index + 1}` ? styles.DiverActive : styles.DiverHover}`}
                            >
                                <a
                                    className="text-[14px] sm:text-[16px] px-[25px] py-[12px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start "
                                    href={`#heading${index + 1}`}
                                    onClick={() => handleHeadingClick(`#heading${index + 1}`)}
                                >
                                    {item}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogNavigation;
