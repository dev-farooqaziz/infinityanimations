
// import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from "./Blogs.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
//===== Images 
import author from "media/blogs/author.png"
import verified from "media/blogs/verified.png"
import Blog1 from "media/blogs/blog1.png"
import Blog2 from "media/blogs/blog2.png"
import Blog3 from "media/blogs/blog3.png"
// ==== config

import { getPostList } from "../../../lib/posts";
import LoadMore from "../loadmore/LoadMore";
import FeaturedImage from "../featuredImage/FeaturedImage";

const blogList = [
    { label: "All", index: 0 },
    { label: "2D Animations", index: 1 },
    { label: "3D Animation", index: 2 },
    { label: "Architectural Animation", index: 3 },
    { label: "CGI & VFX", index: 4 },
    { label: "Infographics", index: 5 },
    { label: "Motion Graphics", index: 6 },
];

const blogCards = [
    {
        id: 1,
        category: "Architectural Animation",
        image: Blog1,
        title: "Be the First to Hire Our Professional Animators",
        description: "Discover unparalleled creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin.",
        author: "James D. Surratt",
        role: "Animation Manager",
        authorImage: author,
    },
    {
        id: 2,
        category: "3D Animation",
        image: Blog2,
        title: "Be the First to Hire Our Professional Animators",
        description: "Join our team of expert 3D animators to create stunning visual effects and animations that captivate audiences.",
        author: "Emily R. Johnson",
        role: "3D Animation Lead",
        authorImage: author,
    },
    {
        id: 3,
        category: "2D Animations",
        image: Blog3,
        title: "Be the First to Hire Our Professional Animators",
        description: "Learn from our top animators about the techniques and tools used to create engaging 2D animations.",
        author: "Michael B. Thompson",
        role: "2D Animation Expert",
        authorImage: author,
    },
    {
        id: 4,
        category: "CGI & VFX",
        image: Blog3,
        title: "Be the First to Hire Our Professional Animators",
        description: "Delve into the world of CGI and VFX with our experienced team, bringing imagination to life.",
        author: "Sarah L. Parker",
        role: "VFX Specialist",
        authorImage: author,
    },
    {
        id: 5,
        category: "Infographics",
        image: Blog1,
        title: "Be the First to Hire Our Professional Animators",
        description: "Transform complex data into visually appealing infographics with our step-by-step guide.",
        author: "John D. Riley",
        role: "Infographic Designer",
        authorImage: author,
    },
    {
        id: 6,
        category: "Motion Graphics",
        image: Blog2,
        title: "Be the First to Hire Our Professional Animators",
        description: "Stay ahead of the curve with the latest trends and techniques in motion graphics.",
        author: "Lisa M. Brown",
        role: "Motion Graphics Artist",
        authorImage: author,
    },
    {
        id: 7,
        category: "Architectural Animation",
        image: Blog1,
        title: "Be the First to Hire Our Professional Animators",
        description: "Architectural animations that bring your designs to life, created by our expert team.",
        author: "James D. Surratt",
        role: "Animation Manager",
        authorImage: author,
    },
    {
        id: 8,
        category: "3D Animation",
        image: Blog2,
        title: "Be the First to Hire Our Professional Animators",
        description: "A comprehensive guide to getting started with 3D animation for aspiring animators.",
        author: "Emily R. Johnson",
        role: "3D Animation Lead",
        authorImage: author,
    },
    {
        id: 9,
        category: "2D Animations",
        image: Blog3,
        title: "Be the First to Hire Our Professional Animators",
        description: "Take your 2D animation skills to the next level with advanced techniques and tips.",
        author: "Michael B. Thompson",
        role: "2D Animation Expert",
        authorImage: author,
    },
];



const Blogs = async () => {

    // const [selectedCategory, setSelectedCategory] = useState("All");
    // const handleCategoryClick = (category) => {
    //     setSelectedCategory(category);
    // };
    // const filteredBlogCards = selectedCategory === "All"
    //     ? blogCards
    //     : blogCards.filter(blog => post.category === selectedCategory);

    const posts = await getPostList();

    return (
        <>
            <section className={`w-full flex py-8 lg:py-16 mt-[125px] lg:mt-0`}>
                <div className="container">
                    <div className="w-full md:w-[75%] lg:w-[90%] mx-auto">
                        <ul className="bg-[#4A4A4A] h-full lg:h-[50px] flex flex-wrap justify-around text-sm font-medium text-center gap-3 md:gap-5 rounded-xl">
                            {blogList.map((tab, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center py-3 h-full text-[15px] font-normal font-sans text-white cursor-pointer px-5 rounded-lg hover:bg-primary-100
                                        }`}
                                    // onClick={() => handleCategoryClick(tab.label)}
                                >
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col md:grid grid-cols-12 gap-10 mt-10 md:mt-16 lg:mt-20">
                            {
                                posts.nodes.map((post) => (
                                    <div className="w-full md:col-span-6 lg:col-span-4 blogCard" key={post}>
                                        <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                            <div className="blogImg">
                                                <FeaturedImage post={post}  />
                                            </div>
                                            <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                                {
                                                    post.categories.nodes.map((category) => (
                                                        <h5 className="text-[14px] md:text-[16px] text-primary-100 font-normal font-sans tracking-wider mb-0" key={category.slug}>{category.name}</h5>
                                                    ))
                                                }
                                                <Link href={`/blog/${post.slug}`} className="text-[20px] md:text-[25px] text-white leading-tight font-bolder font-sans mb-0">
                                                    <h4 classzName={`text-[20px] md:text-[25px] text-white leading-tight font-bolder font-sans mb-0 `}>{post.title}</h4>
                                                </Link>
                                                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} className="text-[14px] md:text-[16px] text-white font-normal font-sans mb-0">{post.description}</p>
                                            </div>
                                            <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                                <div className="author flex flex-row items-center w-full gap-3">
                                                    <div className="w-[20%]">
                                                        <Image src={author} alt={author} />
                                                    </div>
                                                    <div className="relative">
                                                        <Image src={verified} alt="Verified" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                        <h4 className="text-[15px] xl:text-[16px] text-white font-semibold font-sans mb-0">{post.author.node.name}</h4>
                                                        <h5 className="text-[12px] xl:text-[14px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                                    </div>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                                    <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                        <p className="text-[14px] xl:text-[16px] font-sans font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                            Read More
                                                        </p>
                                                        <FaArrowRightLong />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-12 text-center">
                            <LoadMore posts={posts} setPosts={posts} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs