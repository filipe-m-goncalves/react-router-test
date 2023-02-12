import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  function cancelHandler() {
    navigate("/react-router-test/blog");
  }
  return (
    <>
      {data && <p>Message: {data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };

  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) return err;
    throw err;
  }

  return redirect("/react-router-test/blog");
};
