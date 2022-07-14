import PropTypes from "prop-types";

function Button({ children, className, id, onClick, title, type }) {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      title={title}
      type={type ? "button" : "submit"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  id: undefined,
  onClick: undefined,
  title: undefined,
  type: undefined,
};

export default Button;
