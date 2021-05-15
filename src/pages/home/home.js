import PropTypes from "prop-types";

function Home(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
