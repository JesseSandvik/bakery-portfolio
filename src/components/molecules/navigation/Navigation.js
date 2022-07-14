import PropTypes from "prop-types";
import List from "../../atoms/list/List";

function Navigation({ children }) {
  return (
    <nav>
      <List>{children}</List>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
