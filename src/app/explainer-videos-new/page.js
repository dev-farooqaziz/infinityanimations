"use client"
import React, { useState, useEffect } from "react";
// Import Page Components
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Creativity from './components/Creativity/Creativity'
import BadgeSlider from '@/components/badgeSlider2/BadgeSlider2'
import VideoAnimation from './components/VideoAnimation/VideoAnimation'
import Streamed from './components/Streamed/Streamed'
import Packages from './components/Packages/Packages'
import Unmatched from './components/Unmatched/Unmatched'
import Testinomials from './components/Testinomials/Testinomials'
import Footer from './components/Footer/Footer'

const page = () => {
    const [showDesktopComponents, setShowDesktopComponents] = useState(true);
    const [showMobileComponents, setShowMobileComponents] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Show desktop components after 1 second
        const desktopTimer = setTimeout(() => {
            setShowDesktopComponents(true);
        }, 500);

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearTimeout(desktopTimer);
        };
    }, []);

    useEffect(() => {
        const handleTouchOrScroll = () => {
            setShowMobileComponents(true);
            // Remove event listeners after mobile components are shown
            window.removeEventListener("scroll", handleTouchOrScroll);
            window.removeEventListener("touchstart", handleTouchOrScroll);
        };

        // Add event listeners for touch and scroll events
        window.addEventListener("scroll", handleTouchOrScroll);
        window.addEventListener("touchstart", handleTouchOrScroll);

        return () => {
            window.removeEventListener("scroll", handleTouchOrScroll);
            window.removeEventListener("touchstart", handleTouchOrScroll);
        };
    }, []);

    const banner = {
        bannerImage: "https://player.vimeo.com/progressive_redirect/playback/925117975/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dab6eeb220f8cc1b556236864b3498d5113da0f28574fc660097a9326366334d",
    }

    return (
        <div className='bg-white'>
            <Header />
            <Banner content={banner} />
            {
                isMobile ? (
                    showMobileComponents && (
                        <>
                            <Creativity />
                            <div className='mb-12 md:mb-20'>
                                <BadgeSlider />
                            </div>
                            <VideoAnimation />
                            <Streamed />
                            <Packages />
                            <Unmatched />
                            <Testinomials />
                            <Footer />
                        </>
                    )
                ) : (
                    showDesktopComponents && (
                        <>
                            <Creativity />
                            <div className='mb-12 md:mb-20'>
                                <BadgeSlider />
                            </div>
                            <VideoAnimation />
                            <Streamed />
                            <Packages />
                            <Unmatched />
                            <Testinomials />
                            <Footer />
                        </>
                    )
                )
            }
        </div>
    )
}

export default page