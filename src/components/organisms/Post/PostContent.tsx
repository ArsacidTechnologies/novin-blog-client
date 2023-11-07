import { Textarea } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IPostContentProps {
  postContent?: string
}

const PostContent: FC<IPostContentProps> = ({ postContent }) => {
  return (
    <div className='flex w-full mx-2 p-4 rounded-lg shadow-lg'>
      <p className='text-justify'>
        {postContent}
      </p>
    </div>
  )
}

export default PostContent;