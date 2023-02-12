import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const data = useLoaderData();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.posts}>
          {(postsResolved) => <Posts blogPosts={postsResolved} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export const loader = () => {
  const posts = defer({ posts: getPosts() });
  return posts;
};
