import CommentsProvider from "../../contexts/comments-provider/CommentsProvider";
import { withAuthProtected } from "../../hoc";
import CommentsAddPage from "./comments-add-page";
import CommentListPage from "./comments-list-page";
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function Comments(props) {
  const { pathname } = useLocation();

  return (
    <CommentsProvider>
      <div className="row p-5">
        <div className="col-12 mb-5">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                to="/comments/listing"
                className={classNames("nav-link", {
                  active: pathname.includes("/listing"),
                })}
              >
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/comments/add"
                className={classNames("nav-link", {
                  active: pathname.includes("/add"),
                })}
              >
                add new comment
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <Switch>
            <Route path="/comments/listing">
              <CommentListPage />
            </Route>
            <Route path="/comments/add">
              <CommentsAddPage />
            </Route>
            <Redirect to="/comments/listing" />
          </Switch>
        </div>
      </div>
    </CommentsProvider>
  );
}

export default withAuthProtected(Comments);
