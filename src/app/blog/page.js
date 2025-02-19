import React from 'react'
//============
import BlogList from '@/components/blogs-new/BlogList'
import BlogHero from '@/components/blogs-old/BlogHero';

const page = () => {
    //=====Banner Fold=====//
    const hero = {
        title: (<> <span className='text-primary-100'>Our</span> Blogs </>),
        para: "A top-notch video animation production company in Austin helping brands to grow their business and drive more conversion with interactive animated videos.",
        btnBg: "bg-prime",
        subPara: "Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation. Our dedicated team, comprised"
    };

    return (
        <>
            <BlogHero content={hero} />
            <BlogList />
        </>
    )
}

export default page
