import { createContext, useState, useEffect } from "react";
import { API_SERVICE } from "../../services";

export const CommentsContext = createContext(null);

function CommentsProvider({ children }) {
  const [commentsList, setCommentsList] = useState([]);

  const loadCommentsListAsync = async () => {
    const list = await API_SERVICE.getCommentsAsync({});
    setCommentsList(list);
  };

  useEffect(() => {
    loadCommentsListAsync();
  }, []);

  const addComment = (comment) => {
    const list = [...commentsList, comment];
    setCommentsList(list);
  };

  const removeComment = (itemId) => {
    const list = commentsList.filter((n) => n.id !== itemId);
    setCommentsList(list);
  };

  CommentsContext.displayName = "CommentsContext";

  return (
    <CommentsContext.Provider
      value={{ addComment, removeComment, commentsList }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
