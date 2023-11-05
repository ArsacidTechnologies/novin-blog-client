import { NextServer } from 'next/dist/server/next';
import React, { FC } from 'react'


export interface IPostPage {

}

const PostPage: FC<IPostPage> = ({ }) => {
  return (
    <div>
      post page
    </div>
  )
}

export default PostPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await nop; // your fetch function here 

  return {
    props: {

    }
  }
}