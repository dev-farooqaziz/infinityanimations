import Image from "next/image"
// Media
import TestimonialSlider from "./TestimonialSlider"
import TestiImg from 'media/illustration-experts/testi-img.png'

const Testimonials = () => {
    return (
        <section id="testimonialsCMP" className="bg-[#000] h-screen overflow-y-hidden illustrationTestimonials">
            <div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 items-center">
                        <div className="lg:block hidden">
                            <Image src={TestiImg} alt="testimonialImg" className="block mx-auto " height={450} />
                        </div>
                        <div className="w-[95%] lg:w-[90%] mx-auto">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials