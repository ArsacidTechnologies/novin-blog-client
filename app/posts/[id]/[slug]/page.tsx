import { IGetPosts } from '@/src/shared/types/posts';
import { getPostById } from '@/src/store/api/userApi';
import { Textarea } from '@nextui-org/react';
import { NextPageContext } from 'next';
import React, { FC } from 'react'


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
    <div>
      <data></data>
    </div >
  )
}

export default PostSlugPage;
