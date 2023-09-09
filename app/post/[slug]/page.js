"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { getPostDetails } from '@/services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '@/components';
import { AdjacentPosts } from '@/sections';
import { useRouter } from 'next/navigation';


async function getposts() {
    const params = useParams();
    const data = await getPostDetails(params.slug)
    return data;
}


export default async function PostDetails() {
    const router = useRouter();

    if (router.isFallback) {
      return <Loader />;
    }
    
    const post = await getposts();
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <AdjacentPosts slug={post.slug} createdAt={post.createdAt}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}