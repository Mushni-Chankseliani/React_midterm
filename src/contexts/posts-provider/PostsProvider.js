import { createContext, useState, useEffect } from "react";
import { API_SERVICE } from "../../services";

export const PostsContext = createContext(null);

function PostsProvider({ children }) {
  const [postsList, setPostsList] = useState([]);

  const loadPostsAsync = async (param = {}) => {
    const list = await API_SERVICE.getPostsAsync(param);
    setPostsList(list);
  };

  useEffect(() => {
    loadPostsAsync();
  }, []);

  const addPost = (post) => {
    const list = [...postsList, post];
    setPostsList(list);
  };

  const removePost = (itemId) => {
    const list = postsList.filter((n) => n.id !== itemId);
    setPostsList(list);
  };

  PostsContext.displayName = "PostsContext";

  return (
    <PostsContext.Provider
      value={{ addPost, removePost, postsList, loadPostsAsync }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;
