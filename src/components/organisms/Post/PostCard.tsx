import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { IGetPosts } from '@/src/shared/types/posts'
import { Card } from '@nextui-org/react'
import PostHeader from '../../molecules/Post/PostHeader'
import PostBody from '../../molecules/Post/PostBody'
import PostFooter from '../../molecules/Post/PostFooter'

export interface IPostCardProps {
  post: IGetPosts
}

const PostCard: FC<IPostCardProps> = ({ post }) => {


  return <section className='flex w-full justify-center  '>
    <Card className="font-Vazir w-full max-w-4xl px-10 my-4 py-6 bg-background rounded-medium shadow-medium  ">
      <motion.article
        initial={{ opacity: 0, x: -40, y: +50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <PostHeader post={post} />
      </motion.article>
      <motion.article
        initial={{ opacity: 0, x: -40, y: +50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, ease: 'easeIn' }}
      >
        <PostBody postContent={post.content} postTitle={post.title} />
      </motion.article>
      <motion.article
        initial={{ opacity: 0, x: -40, y: +50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, ease: 'easeIn' }}
      >
        <PostFooter postId={post.postId} postTitle={post.title} />
      </motion.article>
    </Card>
  </section>
}
export default PostCard;
