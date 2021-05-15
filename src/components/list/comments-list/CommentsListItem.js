import { useContext } from "react";
import { CommentsContext } from "../../../contexts/comments-provider/CommentsProvider";

function CommentsListItem({ commentItem }) {
  const { removeComment } = useContext(CommentsContext);

  return (
    <div className="card mb-3">
      <div className="card-header">{commentItem.name}</div>
      <div className="card-body">
        <h5 className="card-title">{commentItem.email}</h5>
        <p className="card-text">{commentItem.body}</p>
        <p className="card-text">{commentItem.id}</p>
        <button
          className="btn btn-danger"
          onClick={() => removeComment(commentItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CommentsListItem;
