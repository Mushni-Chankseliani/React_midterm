import { Redirect } from "react-router";

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (!token) return <Redirect to="/auth" />;

    return <Component {...props} />;
  };

  return WithAuthProtected;
};
