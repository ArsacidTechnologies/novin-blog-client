import { Image, Link, LinkIcon } from '@nextui-org/react'
import React, { FC } from 'react'

export interface IPostFooterProps {
  authorName?: string
  authorImageSrc?: string
}

const PostFooter: FC<IPostFooterProps> = ({ authorName, authorImageSrc }) => {
  return (
    <section className="flex justify-between items-center mt-4">
      <Link
        className="font-Vazir text-blue-600 hover:underline" href="">ادامه مطلب
        <LinkIcon></LinkIcon>
      </Link>
      <div>
        <div className="flex items-center" >
          <Image className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
          <h1 className="text-foreground font-Vazir">{authorName ?? "مهران راستگار"}</h1>
        </div>
      </div>
    </section>
  )
}

export default PostFooter;
