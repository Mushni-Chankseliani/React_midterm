import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { withAuthProtected } from "../../hoc";
import { logOut } from "../../services";

function Profile(props) {
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
    history.replace("/");
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <h3 className="mb-3">{props.description}</h3>
      <button className="btn btn-danger btn-lg mb-3" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withAuthProtected(Profile);
