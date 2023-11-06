import PostCardSkeleton from '@/src/components/organisms/Post/PostCardSkeleton';
import PostTemplate from '@/src/components/templates/post/PostTemplate';
import React, { FC } from 'react'

export interface IPostsLoadingProps {

}

const PostsLoading: FC<IPostsLoadingProps> = ({ }) => {
  return (
    <main className=''>
      <div className="flex-col w-full">
        <div className='table w-full justify-center'>
          <div className='table w-full justify-center'>
            <PostCardSkeleton />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PostsLoading;