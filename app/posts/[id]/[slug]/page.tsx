import { IGetPosts } from '@/src/shared/types/posts';
import { getPostById } from '@/src/store/api/userApi';
import React, { FC } from 'react'
import SinglePostPageTemplate from '@/src/components/templates/post/SinglePostPageTemplate';


export interface IPostSlugPage {
  params: {
    id: string
    slug: string
  }

}

const PostSlugPage: FC<IPostSlugPage> = async (props) => {
  const postData = await getPostById(Number(props.params.id))
  console.log(props)
  return (
    <SinglePostPageTemplate post={postData} />
  )
}

export default PostSlugPage;
