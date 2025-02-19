import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/blogNew/Blognavigations.module.css';
import { getPostList } from "../../../lib/posts";
import Image from 'next/image';

export default async function BlogsRelevant() {
    // =============== Post Data ===============
    let featuredImageUrl = "https://inhouse.cryscampus.com/wordpress/animation/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    const posts = await getPostList(); 

    return (
        <div className={`${styles.sidebar} ${styles.relevent}`}>
            <div className={styles.articles}>
                <h3 className='fontsfprosemi'>Relevant Articles</h3>
                {
                    posts.nodes.map((post, index) => (
                        <ul key={index} className={`${styles.noList} mt-4`}>
                            <li className='flex items-center pb-3 gap-3'>
                                <div className='image'>
                                    {post.featuredImage ? (
                                        <Image
                                            quality={75}
                                            src={`https://inhouse.cryscampus.com/wordpress/animation/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`}
                                            alt="Infinity Animation"
                                            width={135}
                                            height={67}
                                            className="rounded-[5px]"
                                        />
                                    ) : (
                                        <Image
                                            quality={75}
                                            src={featuredImageUrl}
                                            alt="Infinity Animation"
                                            width={85}
                                            height={67}
                                            className="rounded-[5px]"
                                        />
                                    )}
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <h6 className='fontsfprosemi text-white'>{post.title}</h6>
                                </Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
}