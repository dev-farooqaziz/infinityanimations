import Image from "next/image";
import styles from "./Testimonials.module.css"
// Media
import Quote from "media/illustration-experts/quote.png"
// Components
import { StarIcon } from "@heroicons/react/24/solid"

const TestimonialCard = ({ title, desc, }) => {
    return (
        <div className={`${styles.review}`}>
            <div className="text-[#fff] font-sans sm:p-5 p-3">
                <Image src={Quote} alt="Quote" className="block -mt-20 ms-auto w-[55px]" />
                <h3 className="text-2xl font-bold py-3">{title}</h3>
                <p className="text-sm font-normal leading-normal sm:pb-4 pb-1">{desc}</p>
                <div className="flex justify-end items-center">
                    <StarIcon className="block w-4 h-4 text-yellow-600" />
                    <StarIcon className="block w-4 h-4 text-yellow-600" />
                    <StarIcon className="block w-4 h-4 text-yellow-600" />
                    <StarIcon className="block w-4 h-4 text-yellow-600" />
                    <StarIcon className="block w-4 h-4 text-yellow-600" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
