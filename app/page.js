import Image from 'next/image';
import { PostCard, Categories, PostWidget } from '@/components';
import { FeaturedPosts } from '@/sections';
import { getPosts } from '@/services';

async function getposts() {
  const posts = (await getPosts()) || [];
  return posts;
}

export default async function Home() {
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
