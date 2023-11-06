import React, { FC } from 'react'

export interface IPostBodyProps {
  postTitle?: string
  postContent?: string
}

const PostBody: FC<IPostBodyProps> = ({ postTitle, postContent }) => {
  return (
    <section className="mt-2">
      <a className="text-2xl text-foreground/70 font-Vazir font-bold hover:text-gray-600" >{postTitle}</a>
      <p className="mt-2 text-foreground/90 font-Vazir font-normal ">{postContent}</p>
    </section>
  )
}

export default PostBody;