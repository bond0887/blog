import React from 'react';
import Image from 'next/image';
import { grpahCMSImageLoader } from '@/util';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14' style={{textAlign: '-webkit-center'}}>
        <Image loader={grpahCMSImageLoader} unoptimized alt={author.name} style={{width: '100px',height: '100px'}} width={100} height={100} className='align-middle rounded-full' src={author.photo.url} />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-ls'>{author.bio}</p>
    </div>
  )
}

export default Author;