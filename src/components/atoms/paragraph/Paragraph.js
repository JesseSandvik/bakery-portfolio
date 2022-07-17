import PropTypes from "prop-types";

function Paragraph({ children, className, id }) {
  return (
    <p className={className} id={id}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

Paragraph.defaultProps = {
  className: undefined,
  id: undefined,
};

export default Paragraph;
