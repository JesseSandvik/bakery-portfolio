import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationLink({ children, id, to }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : null)}
      id={id}
      to={to}
    >
      {children}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  to: PropTypes.string,
};

NavigationLink.defaultProps = {
  id: undefined,
  to: "/",
};

export default NavigationLink;
