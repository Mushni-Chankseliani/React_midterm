import { useContext } from "react";
import { PostsContext } from "../../../contexts/posts-provider/PostsProvider";

function PostsListItem({ postItem }) {
  const { removePost } = useContext(PostsContext);

  return (
    <div className="card mb-3">
      <div className="card-header">{postItem.title}</div>
      <div className="card-body">
        <p className="card-text">{postItem.body}</p>
        <button
          className="btn btn-danger"
          onClick={() => removePost(postItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostsListItem;
