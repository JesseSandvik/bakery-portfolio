import { NavLink } from "react-router-dom";

import React from "react";

const NavigationLink = ({ children, to }) => (
  <NavLink
    className={(navData) => (navData.isActive ? "active" : null)}
    to={to}
  >
    {children}
  </NavLink>
);

export default NavigationLink;
