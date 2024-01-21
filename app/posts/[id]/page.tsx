import { getPostById, getPosts } from '@/src/store/api/userApi';
import { NextPageContext } from 'next';
import React, { FC } from 'react'

export const dynamicParams = false
// import { Metadata } from 'next'

// // either Static metadata
// export const metadata: Metadata = {
//   title: '...',
// }


// export async function generateStaticParams() {
//   try {
//     const posts = [{ slug: 'title1' }];//await getPosts();
//     if (posts?.length)
//       return [{ slug: 'title1' }]
//     // return posts?.map((post) => ({
//     //   slug: post.title,
//     // }))
//     else
//       return []

//   } catch (err) {
//     throw []
//   }
// }
// or Dynamic metadata


export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export interface IPostSlugPage {
  params: {
    id: string
    slug: string
  }

}

const PostIdPage: FC<IPostSlugPage> = async ({ params }) => {
  const data = await getPostById(Number(params?.id))

  return (
    <div>
      {data?.title}
    </div>
  )
}

export default PostIdPage;
