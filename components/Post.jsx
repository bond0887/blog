"use client";

import react, { useState, useEffect } from 'react';
import { PostCard } from '@/components';
import { getPosts } from '@/services';


const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((result) => {
          setPosts(result);
        });
      }, []);

  return (
    <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => (
            <div key={post.node.title}>
              <PostCard post={post.node} />
            </div>
         ))}
    </div>
  )
}

export default Post;