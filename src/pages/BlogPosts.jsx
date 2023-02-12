import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const posts = useLoaderData();
  return (
    <>
      <Posts blogPosts={posts} />
    </>
  );
}

export default BlogPostsPage;

export const loader = async () => {
  const posts = await getPosts();
  return posts;
};
