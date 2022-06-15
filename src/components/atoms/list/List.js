import React from "react";

const List = ({ children, ordered, ...props }) => {
  const listType = ordered ? "ol" : "ul";
  return React.createElement(listType, props, children);
};

export default List;
