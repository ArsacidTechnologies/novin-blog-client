import { Skeleton } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IPostPageSkeletonProps {

}

const PostPageSkeleton: FC<IPostPageSkeletonProps> = ({ }) => {
  return (
    <section className='flex flex-row row-auto min-h-screen'>
      <aside className='sticky top-20  hidden h-full justify-center lg:flex lg:w-1/4 mx-2 text-xl font-Vazir font-bold'>
        <Skeleton className='w-3/4 h-8 rounded-medium' />      </aside>
      <aside className='grid grid-cols-1 w-full justify-center items-start  max-w-[800px]'>
        <Skeleton className="h-[400px] max-h-[400px] w-full max-w-[800px] rounded-lg" />
        <div className='flex flex-wrap w-full mx-2 p-4 rounded-lg shadow-lg'>
          <Skeleton className='w-full h-4 rounded-medium my-10' />
          <Skeleton className='w-full h-4 rounded-medium my-10' />
          <Skeleton className='w-full h-4 rounded-medium my-10' />
          <Skeleton className='w-full h-4 rounded-medium ' />
        </div>
      </aside>
      <aside className='hidden justify-center items-start lg:flex flex-wrap lg:w-1/4 mx-2 text-xl font-Vazir font-bold'>
        <div className='sticky top-20 flex flex-wrap w-full justify-end'>
          <h1 className='flex w-full justify-center h-fit'><Skeleton className='w-3/4 h-8 rounded-medium' /></h1>
          <ul className='justify-end w-full h-fit'>
            <li className='flex justify-end p-4 hover:border-l border-green-400'><Skeleton className='w-full h-4 rounded-medium' /></li>
            <li className='flex justify-end p-4 hover:border-l border-green-400'><Skeleton className='w-full h-4 rounded-medium' /></li>
            <li className='flex justify-end p-4 hover:border-l border-green-400'><Skeleton className='w-full h-4 rounded-medium' /></li>
          </ul>
        </div>
      </aside>
    </section>
  )
}

export default PostPageSkeleton;