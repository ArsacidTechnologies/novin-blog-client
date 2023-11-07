import React, { FC } from 'react'
export const dynamic = "force-dynamic"
import PostTemplate from '@/src/components/templates/post/PostTemplate'
import { getPosts } from "@/src/store/api/userApi";
import PostCardSkeleton from '@/src/components/organisms/Post/PostCardSkeleton';
export interface IPostPageProps {

}

const PostPage: FC<IPostPageProps> = async ({ }) => {
  const data = await getPosts()

  return (


    <main className=''>
      <div className="flex-col w-full">
        <div className='table w-full justify-center'>
          <div className='table w-full justify-center'>
            <PostTemplate postData={data} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PostPage;

{/* <main className=''>
      <PostTemplate postData={data} />
    </main> */}

