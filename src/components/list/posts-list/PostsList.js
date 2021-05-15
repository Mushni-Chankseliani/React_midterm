
import { useContext } from "react";
import { PostsContext } from "../../../contexts/posts-provider/PostsProvider";
import PostsListItem from "./PostsListItem";

function PostsList(props) {
  const { postsList } = useContext(PostsContext);

  return (
    <div>
      {postsList.map((item, index) => {
        return <PostsListItem postItem={item} key={index} />;
      })}
    </div>
  );
}

export default PostsList;
