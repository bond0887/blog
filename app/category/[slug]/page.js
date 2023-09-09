"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { getCategoryPost } from '@/services';
import { PostCard, Categories, Header } from '@/components';



async function getcategoryposts() {
    const params = useParams();
    const data = await getCategoryPost(params.slug)
    return data;
}


export default async function PostDetails() {
    const posts = await getcategoryposts();
    return (
        <div className='container mx-auto px-10 mb-8'>
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                   {posts.map((post, index) => (
                       <PostCard key={index} post={post.node} />
                   ))}
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}
