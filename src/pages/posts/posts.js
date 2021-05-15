import { withAuthProtected } from "../../hoc";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import classNames from "classnames";
import PostsProvider from "../../contexts/posts-provider/PostsProvider";
import PostsAddPage from "./posts-add-page";
import PostListPage from "./posts-list-page";

function Posts(props) {
  const { pathname } = useLocation();

  return (
    <PostsProvider>
      <div className="row p-5">
        <div className="col-12 mb-5">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                to="/posts/listing"
                className={classNames("nav-link", {
                  active: pathname.includes("/listing"),
                })}
              >
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/posts/add"
                className={classNames("nav-link", {
                  active: pathname.includes("/add"),
                })}
              >
                add new post
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <Switch>
            <Route path="/posts/listing">
              <PostListPage />
            </Route>
            <Route path="/posts/add">
              <PostsAddPage />
            </Route>
            <Redirect to="/posts/listing" />
          </Switch>
        </div>
      </div>
    </PostsProvider>
  );
}

export default withAuthProtected(Posts);
