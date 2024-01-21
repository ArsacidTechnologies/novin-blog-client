import PostPageSkeleton from '@/src/components/organisms/Post/PostPageSkeleton';
import React, { FC } from 'react'

export interface IPostsLoadingProps {

}

const PostsLoading: FC<IPostsLoadingProps> = ({ }) => {
  return (
    <PostPageSkeleton />
  )
}

export default PostsLoading;