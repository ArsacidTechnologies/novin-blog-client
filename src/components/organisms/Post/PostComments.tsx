"use client"
import { getCommentsByIdApi, getCommentsWithLikesByIdApi } from '@/src/store/api/commentApi'
import { getPostByIdWithComments } from '@/src/store/api/userApi'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import CommentOrganism from '../Comment/CommentOrganism'

export interface IPostCommentsProps {
  postId: number
}

const PostComments: FC<IPostCommentsProps> = ({ postId }) => {
  const { data, status } = useQuery({ queryKey: ['comments'], queryFn: () => getCommentsWithLikesByIdApi(postId), refetchInterval: 10000 })


  return (
    <div className='mt-10'>
      {status === 'success' ?
        <div className='grid gap-6 grid-cols-1 mx-2 '>
          {Array.isArray(data) && data?.map((commentWithLike, index) =>
            <CommentOrganism key={index} commentWithLike={commentWithLike} />
          )}
        </div> :
        <div>
          ...loading
          {/* <CommentRepositorySkeleton/> */}
        </div>
      }

    </div>
  )
}

export default PostComments;