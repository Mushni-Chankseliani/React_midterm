import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/navigation";
import AuthPage from "./pages/auth";
import Comments from "./pages/comments";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/profile">
          <Profile title="This is Profile page" description="this page is auth protected" />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home title="This is home page" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
