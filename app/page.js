"use client";
import { PostCard, Categories, PostWidget } from '@/components';
import { FeaturedPosts } from '@/sections';
import { getPosts } from '@/services';
import { redirect, useSearchParams } from 'next/navigation';

async function getposts() {
  const posts = (await getPosts()) || [];
  return posts;
}

function checkredirect(){
    const searchParams = useSearchParams();
    const app = searchParams.get('app');
    if(!app){
      redirect('/post/react-testing?app=true');
    }
}

export default async function Home() {
  checkredirect();
  const posts = await getposts();
  return (
    <main className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => (
            <div key={post.node.title}>
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}
