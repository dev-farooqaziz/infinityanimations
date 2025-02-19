"use client"
import Image from "next/image";
// Import Images
import trustPlatforms from "media/icons/partners.png";

const Review = () => {
    return (
        <>
            <section className="flex items-center justify-center sm:pt-5 sm:pb-8 md:mb-0 lg:pb-16 mt-[115px] md:mt-[95px] lg:mt-0">
                <Image src={trustPlatforms} className="w-[80%]" alt="Infinity Animation" />
            </section>
        </>
    )
}

export default Review
