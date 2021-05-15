import { useContext } from "react";
import { CommentsContext } from "../../../contexts/comments-provider/CommentsProvider";
import CommentsListItem from "./CommentsListItem";

function CommentsList(props) {
  const { commentsList } = useContext(CommentsContext);

  return (
    <div>
      {commentsList.map((item, index) => {
        return <CommentsListItem commentItem={item} key={index} />;
      })}
    </div>
  );
}

export default CommentsList;
