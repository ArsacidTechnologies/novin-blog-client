import React, { FC } from 'react'
import JalaliUnit from '../../atoms/Calendar/JalaliUnit';
import AuthorUnit from '../../molecules/Post/AuthorUnit';
import { IGetPosts } from '@/src/shared/types/posts';
import Image from 'next/image';

export interface IAuthorComponentProps {
  post?: IGetPosts
}

const AuthorComponent: FC<IAuthorComponentProps> = ({ post }) => {
  return (
    <div className="grid gap-6 grid-cols-1 items-center w-full justify-start m-10">
      <div className='flex items-center'>
        <div>نویسنده :</div>
        <div><AuthorUnit authorName='مهران راستگار' /></div>
      </div>
      <div className='flex items-center'>
        <div>آخرین ویرایش :</div>
        <div><JalaliUnit date={post?.updatedDate} /></div>
      </div>
    </div>
  )
}

export default AuthorComponent;