import Image from "next/image";
import Link from "next/link";


export default function FeaturedImage({ post }) {

    let defaultFeaturedImage = "https://inhouse.cryscampus.com/wordpress/animation/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";

    if (post.featuredImage) {
        defaultFeaturedImage = `https://inhouse.cryscampus.com/wordpress/animation/wp-content/uploads/${post?.featuredImage?.node?.mediaDetails?.file}`;
    }

    return (
        <Link href={`/blog/${post.slug}`}>
            <Image quality={75} width="480" height="350" src={defaultFeaturedImage}  alt={post.title}  className={`  rounded-[18px]`}/>
        </Link>
    )
}