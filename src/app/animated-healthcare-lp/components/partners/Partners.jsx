//========== Imports
import Image from "next/image";
//========== Import Images
import partners from 'media/healthcare/icons/partners.png'

const Partners = () => {
    return (
        <section className="bg-white py-5">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <Image src={partners} alt='Infinity Animation' />
            </div>
        </section>
    )
}

export default Partners
