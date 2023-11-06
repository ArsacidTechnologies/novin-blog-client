import React, { FC } from 'react'
export const dynamic = "force-dynamic"
import PostTemplate from '@/src/components/templates/post/PostTemplate'
import { getPosts } from "@/src/store/api/userApi";
export interface IPostPageProps {

}


const PostPage: FC<IPostPageProps> = async ({ }) => {
  const data = await getPosts()

  return (
    <main className=''>
      <PostTemplate postData={data} />
    </main>
  )
}

export default PostPage;