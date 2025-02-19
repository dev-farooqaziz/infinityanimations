"use client"
import { useState } from "react";
import { getPostList } from "../../../lib/posts";


export default function LoadMore({ posts, setPosts, taxonomy = null }) {
    const bT = posts.pageInfo?.hasNextPage ? 'Load More' : 'No more posts to load';
    const bD = posts.pageInfo?.hasNextPage ? false : true;

    const [buttonText, setButtonText] = useState(bT);
    const [buttonDisabled, setButtonDisabled] = useState(bD);

    const handleOnclick = async (event) => {
        setButtonText('Loading...');
        setButtonDisabled(true);

        const morePosts = await getPostList(posts.pageInfo?.endCursor, taxonomy);

        let updatedPosts = {
            pageInfo: {

            },
            nodes: []
        }

        updatedPosts.pageInfo = morePosts.pageInfo;

        posts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        morePosts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        setPosts(updatedPosts);

        if (morePosts.pageInfo?.hasNextPage) {
            setButtonText('Load more posts');
            setButtonDisabled(false);
        }
        else {
            setButtonText('No more posts to load');
            setButtonDisabled(true);
        }
    }

    return (
        <button
            className="text-[16px] font-sans bg-prime text-white w-max px-12 py-3 rounded-lg"
            onClick={handleOnclick}
            disabled={buttonDisabled}>
            {buttonText}
        </button>  
    );
}