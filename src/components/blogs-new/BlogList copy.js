"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
//===== Components
import { getPostList } from "@/lib/posts";
import FeaturedImage from "@/src/components/FeaturedImage";
//===== Images
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import profile from "media/newblogs/blog-client.png"


const BlogList = () => {
    const [posts, setPosts] = useState({ nodes: [], pageInfo: {} });
    const [buttonText, setButtonText] = useState('Load More');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchPosts = async (endCursor = null) => {
        try {
            setLoading(true);
            const newPosts = await getPostList(endCursor);
            return newPosts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return { nodes: [], pageInfo: {} };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            const initialPosts = await fetchPosts();
            setPosts(initialPosts);
            setInitialLoad(false);
        })();
    }, []);

    const handleLoadMore = async () => {
        setButtonText('Loading...');
        setButtonDisabled(true);

        const morePosts = await fetchPosts(posts.pageInfo?.endCursor);

        setPosts((prevPosts) => ({
            pageInfo: morePosts.pageInfo,
            nodes: [...prevPosts.nodes, ...morePosts.nodes],
        }));

        if (morePosts.pageInfo?.hasNextPage) {
            setButtonText('Load More');
            setButtonDisabled(false);
        } else {
            setButtonText('No more posts to load');
            setButtonDisabled(true);
        }
    };
    // ===========Search Code===========

    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.form}>
                                <form>
                                    <select className={styles.search}>
                                        <option defaultValue="All">All</option>
                                        <option value="Blockchain" className='fontsfregular'>Blockchain</option>
                                        <option value="eCommerce" className='fontsfregular'>eCommerce</option>
                                        <option value="General" className='fontsfregular'>General</option>
                                        <option value="Mobile Application" className='fontsfregular'>Mobile Application</option>
                                        <option value="News" className='fontsfregular'>News</option>
                                    </select>
                                    <input type="text" />
                                    <button type='button' className='fontsfregular'>Search</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.tabs}>
                                <ul className='pt-5'>
                                    <li className={`${styles.active} fontsfregular`}>
                                        All
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        Blockchain
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        eCommerce
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        General
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        Mobile Application
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={12} className='mt-md-4'>
                            <Row className='gy-3'>
                                {(loading && initialLoad) && (
                                    <Col lg={12} className='text-center'>
                                        <div className={styles.loader}>
                                            <div className={styles.loaderRoller}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className={styles.loaderTxt}>Loading...</div>
                                        </div>
                                    </Col>
                                )}
                                {
                                    posts.nodes.map((post, i) => (
                                        <Col key={i} md={6} lg={4} className='p-2 order-3 order-lg-1'>
                                            <div className={styles.card}>
                                                <FeaturedImage post={post} className="w-100" />
                                                <div className={styles.cardContent}>
                                                    {
                                                        post.categories.nodes.map((category) => (
                                                            <p className={`fontsfregular ${styles.categoriesPara}`} key={category.slug}>
                                                                {category.name}
                                                            </p>
                                                        ))
                                                    }
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <h5 className='fontsfregular text-black'>{post.title}</h5>
                                                    </Link>
                                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                    </div>
                                                    <div className={styles.btn}>
                                                        <Link href={`/blog/${post.slug}`} className='text-black'>
                                                            Read More
                                                            <Image src={Arrow} alt='Infinity Animations' className='ms-2' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardBottom}>
                                                    <div className={styles.cardBottomImg}>
                                                        <Image src={profile} width={50} height={50} alt='Infinity Animations' className='img-fluid' />
                                                    </div>
                                                    <div className={styles.cardbottomContent}>
                                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                                            <h3 className='fontsfregular text-black'> {post.author.node.name}
                                                            </h3>
                                                            <Image src={verifies} alt='Infinity Animations' width={13} height={13} />
                                                        </div>
                                                        <p className='fontsfregular text-black'>{post.author.node.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <button
                                className={styles.loadMore}
                                onClick={handleLoadMore}
                                disabled={buttonDisabled}
                            >
                                {buttonText}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogList
