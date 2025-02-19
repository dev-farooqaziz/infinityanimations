import Link from 'next/link';
import Image from 'next/image';
import styles from "../../../styles/blogNew/BlogContent.module.css"
//
import { getPostList } from "../../../lib/posts";
// Images
// import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/blogs/verified.png"
import profile from "media/blogs/author.png"
import FeaturedImage from './FeaturedImage';
import { FaArrowRightLong } from 'react-icons/fa6';


const BlogArticle = async () => {

    const posts = await getPostList();

    return (
        <>
            <section className={styles.blogcontent}>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <h2 className={`fontsfprosemi ${styles.heading}`}>Related Post</h2>
                        </div>
                        <div className='col-span-12'>
                            <div className='mt-md-4'>
                                <div className='grid grid-cols-12 gy-3'>
                                    {
                                        posts.nodes.map((post) => (
                                            <div className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
                                                <div className={styles.card}>
                                                    <FeaturedImage post={post} className="w-100" />
                                                    <div className={styles.cardContent}>
                                                        <div>
                                                            {
                                                                post.categories.nodes.map((category) => (
                                                                    <p className={`block text-[#F32F53] font-semibold mr-md:text-base text-sm leading-normal capitalize font-sans pt-5 mb-2`} key={category.slug}>
                                                                        {category.name}
                                                                    </p>
                                                                ))
                                                            }
                                                            <Link href={`/blog/${post.slug}`}>
                                                                <h5 className='md:text-[20px] text-base leading-normal font-normal text-white fontsfprosemi'>{post.title}</h5>
                                                            </Link>
                                                        </div>
                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cardBottom}>
                                                        <div className='flex items-center w-[50%]'>
                                                            <div className='w-[32%]'>
                                                                <Image src={profile} width={50} height={50} alt='Infinity Animations' className='img-fluid w-100' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='flex items-center gap-2 pb-1'>
                                                                    <h3 className='font-sans text-white'> {post.author.node.name}
                                                                    </h3>
                                                                    <Image src={verifies} alt='Infinity Animations' width={13} height={13} />
                                                                </div>
                                                                {/* <p className='font-sans text-black'>{post.author.node.description}</p> */}
                                                            </div>
                                                        </div>
                                                        <div className={`border-b-2 pb-1 ${styles.btn}`}>
                                                            <Link href={`/blog/${post.slug}`} className='text-white font-sans flex items-center gap-3'>
                                                                Read More
                                                                <FaArrowRightLong />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArticle
