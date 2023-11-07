import React, { FC } from 'react'
import AuthorComponent from '../../organisms/Post/AuthorComponent';
import { IGetPosts } from '@/src/shared/types/posts';
import img from '@/public/1-2.jpg'
import Image from 'next/image';
import PostContent from '../../organisms/Post/PostContent';
import PostComments from '../../organisms/Post/PostComments';
import CommentArea from '../../organisms/Comment/CommentArea';
import { Divider } from '@nextui-org/react';

export interface ISinglePostPageTemplateProps {
  post?: IGetPosts
}

const SinglePostPageTemplate: FC<ISinglePostPageTemplateProps> = ({ post }) => {
  return (
    <section className='flex flex-row row-auto min-h-screen'>
      <aside className='sticky top-20  hidden h-full justify-center lg:flex lg:w-1/4 mx-2 text-xl font-Vazir font-bold'>
        Other post suggestion
      </aside>
      <aside className='container flex w-full justify-center'>
        <div className=''>
          <Image
            width={800}
            height={400}
            src={img}
            alt="post image"
            className='object-fit rounded-medium'
          />
          <AuthorComponent post={post} />
          <PostContent postContent={post?.content} />
          <Divider className=' my-10' />
          <CommentArea />
          {post?.postId && <PostComments postId={post.postId} />}

        </div >
      </aside>
      <aside className='hidden justify-center items-start lg:flex flex-wrap lg:w-1/4 mx-2 text-xl font-Vazir font-bold'>
        <div className='sticky top-20 flex flex-wrap w-full justify-end'>
          <h1 className='flex w-full justify-center h-fit'>Tabel of content</h1>
          <ul className='justify-end w-full h-fit'>
            <li className='flex justify-end p-4 hover:border-l border-green-400'>item1</li>
            <li className='flex justify-end p-4 hover:border-l border-green-400'>item2</li>
            <li className='flex justify-end p-4 hover:border-l border-green-400'>item3</li>
          </ul>
        </div>
      </aside>
    </section>
  )
}

export default SinglePostPageTemplate;