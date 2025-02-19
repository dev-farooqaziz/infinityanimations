"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/logo/logo.module.css';
import icon1 from "media/banner/trusted.png"

const Banner = () => {

    return (
        <>
            <section className={`newcon ${styles.logo}`}>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1 ${styles.animate}`}>
                        <Image src={icon1} className={styles.newtoen} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
