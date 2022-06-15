import List from "../../atoms/list/List";

const Navigation = ({ children }) => (
  <nav>
    <List>{children}</List>
  </nav>
);

export default Navigation;
