"use client"
import React from 'react'
import Image from "next/image";
// import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
// ===== CSS
import styles from "@/styles/blogNew/InnerBanner.module.css"
// ===== Images
import Share from "media/newblogs/shareIcon.png"
import social1 from "media/newblogs/linkedin.png"
import social2 from "media/newblogs/twitter.png"
import social3 from "media/newblogs/facebook.png"


const BlogShare = () => {

    const shareArticle = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            console.log('Web Share API not supported');
        }
    };

    return (
        <>
            <ul className={`p-0 mb-4 ${styles.share}`}>
                <li className={`d-flex align-items-center justify-content-center gap-3 ${styles.shareIcon}`} onClick={shareArticle}>
                    <Image src={Share} alt='Infinity Animations' width={20} height={20} />
                    <p className='mb-0'>Share This Article</p>
                </li>
                <li className={`${styles.icons}`}>
                    <LinkedinShareButton className="w-100 h-100" url="https://www.linkedin.com/">
                        <Image src={social1} alt='Infinity Animations' width={20} height={20} />
                    </LinkedinShareButton>
                </li>
                <li className={`${styles.icons}`}>
                    <TwitterShareButton className="w-100 h-100" url="https://twitter.com/">
                        <Image src={social2} alt='Infinity Animations' width={25} height={20} />
                    </TwitterShareButton>
                </li>
                <li className={`${styles.icons}`}>
                    <FacebookShareButton className="w-100 h-100" url="https://www.facebook.com/">
                        <Image src={social3} alt='Infinity Animations' width={10} height={20} />
                    </FacebookShareButton>
                </li>
            </ul>
        </>
    )
}

export default BlogShare
