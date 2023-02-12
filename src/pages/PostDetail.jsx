import { useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const post = useLoaderData();

  return (
    <>
      <BlogPost title={post.title} text={post.body} />
    </>
  );
}

export default PostDetailPage;

export const louder = async ({ params }) => {
  const post = await getPost(params.id);
  return post;
};
