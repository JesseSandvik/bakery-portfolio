import PropTypes from "prop-types";

function Small({ children, className, id }) {
  return (
    <small className={className} id={id}>
      {children}
    </small>
  );
}

Small.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

Small.defaultProps = {
  children: undefined,
  className: undefined,
  id: undefined,
};

export default Small;
