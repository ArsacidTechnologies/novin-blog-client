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
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

const PostLayout = () => {
  return <></>;
};

export default PostLayout;