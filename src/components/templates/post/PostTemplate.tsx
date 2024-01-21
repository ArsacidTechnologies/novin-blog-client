'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPosts } from '@/src/store/api/userApi'
import { IGetPosts } from '@/src/shared/types/posts'
import PostCard from '../../organisms/Post/PostCard'
// import dynamic from "next/dynamic";
// const PostCard = dynamic(() => import("../../organisms/Post/PostCard"));

PostCard
export interface IPostTemplateProps {
  postData: IGetPosts[];
}
const PostTemplate: FC<IPostTemplateProps> = ({ postData }) => {
  // const queryClient = useQueryClient()
  // const { data, status, isSuccess, error } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  return (
    <div className="flex-col w-full">
      <div className='table w-full justify-center'>
        {postData.length &&
          postData?.map((post, index) =>
            <PostCard key={index} post={post} />
          )}
      </div>
    </div>
  )
}

export default PostTemplate;