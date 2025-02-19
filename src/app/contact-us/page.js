import React from "react";
import Script from 'next/script';
// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Contact from '@/components/contact/Contact';

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Contact Us </>),
        para: "Ready to turn your ideas into reality? Reach out!",
        btnBg: "bg-prime",
    };
    return (
        <>
            <Hero content={hero} />
            <Review />
            <Contact />
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Contact Us | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.b05f4518.gif",
                        "description": "Reach out to Infinity Animations today to discuss your animation project. Whether it's 2D, 3D, or motion graphics, our team is here to help you elevate your vision.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Infinity Animations"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "1174"
                        }
                    }
                `}
            </Script>
        </>
    )
}