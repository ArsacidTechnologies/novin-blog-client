import axios from 'axios'
import React, { FC } from 'react'
export const dynamic = "force-dynamic"
import https from 'https'
export interface IpageProps {

}

const agent = new https.Agent({ rejectUnauthorized: false })

const PostPage: FC<IpageProps> = async ({ }) => {
  const posts: any = await axios.get('https://localhost:7029/api/Post', { httpsAgent: agent })


  return (
    <main>
      {posts?.length}
      this is posts
    </main>
  )
}

export default PostPage;