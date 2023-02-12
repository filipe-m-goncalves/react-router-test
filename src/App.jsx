import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as loaderBlogPosts } from "./pages/BlogPosts";
import NewPostPage, { action as actionNewPost } from "./pages/NewPost";
import PostDetailPage, { louder as postDetailLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorMessage from "./components/ErrorMessage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/react-router-test"
      element={<RootLayout />}
      errorElement={<ErrorMessage />}
    >
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={loaderBlogPosts} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={actionNewPost}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
