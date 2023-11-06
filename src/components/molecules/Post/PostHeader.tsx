import React, { FC } from 'react'
import JalaliUnit from '../../atoms/Calendar/JalaliUnit';
import { IGetPosts } from '@/src/shared/types/posts';
import { useAppSelector } from '@/src/store/hooks';
import { selectUserRole } from '@/src/store/slices/userSlice';
import ApproveUnit from './ApproveUnit';

export interface IPostHeaderProps {
  post: IGetPosts

}

const PostHeader: FC<IPostHeaderProps> = ({ post }) => {
  return (
    <section className="flex justify-between items-center">
      <JalaliUnit date={post.updatedDate} />
      <ApproveUnit postId={post.postId} postStatus={post.status} />
    </section>
  )
}

export default PostHeader;