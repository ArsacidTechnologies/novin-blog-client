import { Image, LinkIcon } from '@nextui-org/react'
import Link from 'next/link'
import React, { FC } from 'react'
import AuthorUnit from './AuthorUnit'

export interface IPostFooterProps {
  authorName?: string
  authorImageSrc?: string
  postId?: number
  postTitle?: string
}

const PostFooter: FC<IPostFooterProps> = ({ authorName, authorImageSrc, postId, postTitle }) => {
  return (
    <section className="flex justify-between items-center mt-4">
      <Link
        className="font-Vazir text-blue-600 hover:underline" href={encodeURI(`/posts/${postId}/${postTitle}`)}>ادامه مطلب
        <LinkIcon></LinkIcon>
      </Link>
      <div>
        <AuthorUnit authorName='مهران راستگار' />
      </div>
    </section>
  )
}

export default PostFooter;
