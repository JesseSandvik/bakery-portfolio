import { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function CustomIframe({ children, title, ...props }) {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} title={title} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

CustomIframe.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

CustomIframe.defaultProps = {
  children: undefined,
};

export default CustomIframe;
