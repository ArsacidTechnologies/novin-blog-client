import { IGetPosts } from '@/src/shared/types/posts';
import { getPostById, getPosts } from '@/src/store/api/userApi';
import React, { FC } from 'react'
import SinglePostPageTemplate from '@/src/components/templates/post/SinglePostPageTemplate';
import { notFound } from 'next/navigation';

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


export interface IPostSlugPage {
  params: {
    id: string
    slug: string
  }

}
export function generateStaticParams() {
  return [
    { id: '1', slug: 'title1' },
    { id: '2', slug: 'title2' },
    { id: '3', slug: 'title3' },
  ];
}

const PostSlugPage: FC<IPostSlugPage> = async (props) => {
  const postData = await getPostById(Number(props?.params?.id))
  console.log(props)


  return (
    <SinglePostPageTemplate post={postData} />
  )
}

export default PostSlugPage;
