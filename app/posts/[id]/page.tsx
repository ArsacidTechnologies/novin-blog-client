import { getPostById } from '@/src/store/api/userApi';
import { NextPageContext } from 'next';
import React, { FC } from 'react'


// export interface IPostIdPage {
//   params: NextPageContext
// }

const PostIdPage: FC<NextPageContext> = async ({ AppTree }) => {
  const data = await getPostById(1)

  return (
    <div>
      {AppTree.defaultProps?.pageProps.slug}
    </div>
  )
}

export default PostIdPage;
