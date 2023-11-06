import { Skeleton } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IPostCardSkeletonProps {

}

const PostCardSkeleton: FC<IPostCardSkeletonProps> = ({ }) => {
  return (
    <section className='font-Vazir w-full max-w-4xl px-10 my-4 py-6 bg-background rounded-medium shadow-medium '>
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex justify-between items-center" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </section>
  )
}

export default PostCardSkeleton;