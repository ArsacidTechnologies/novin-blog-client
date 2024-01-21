import { Skeleton } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IPostCardSkeletonProps {

}

const PostCardSkeleton: FC<IPostCardSkeletonProps> = ({ }) => {
  return (
    <div className="flex w-full justify-center ">
      <section className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 transition-transform-background motion-reduce:transition-none font-Vazir w-full max-w-4xl px-10 my-4 py-6 bg-background rounded-medium shadow-medium">
        <div className="flex-row  w-full flex items-center gap-3">
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-6 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
            <Skeleton className="h-6 w-2/5 rounded-lg" />
          </div>
          <div className="flex flex-wrap w-full h-full justify-end   gap-2">
            <div className='flex w-full justify-end'>
              <Skeleton className="h-6 w-3/5 rounded-lg" />
            </div>
            <div className='h-[60px]  '></div>
            <div className='flex w-full justify-end'>
              <Skeleton className="h-8 w-8 rounded-full" /> <Skeleton className="h-8 w-2/5 rounded-lg" /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostCardSkeleton;