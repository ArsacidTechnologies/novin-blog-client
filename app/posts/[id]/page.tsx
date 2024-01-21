import { getPostById } from '@/src/store/api/userApi';
import { NextPageContext } from 'next';
import React, { FC } from 'react'


export interface IPostIdPage {
  params: {
    id: string
    slug: string
  }

}

const PostIdPage: FC<IPostIdPage> = async () => {
  const data = await getPostById(1)

  return (
    <div>
      {data?.title}
    </div>
  )
}

export default PostIdPage;
