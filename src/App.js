import { Routes, Route, useNavigate } from "react-router-dom";

import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Navigation from "./components/molecules/navigation/Navigation";
import NavigationLink from "./components/atoms/navLink/NavLink";
import Small from "./components/atoms/small/Small";

import { routes } from "./app/routes";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header>
        <div className="container">
          <Navigation>
            <li>
              <NavigationLink to="/about">about</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/gallery">gallery</NavigationLink>
            </li>
          </Navigation>
        </div>
        <div className="container">
          <Button id="title" onClick={() => navigate("/")}>
            <Heading level="1">{`stacy's cakes`}</Heading>
            <Small>new york</Small>
          </Button>
        </div>
        <div className="container">
          <Navigation>
            <li>
              <NavigationLink to="/menu">menu</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/contact">contact</NavigationLink>
            </li>
          </Navigation>
        </div>
      </Header>
      <Routes>
        {routes.map(({ element, name, path }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
}

export default App;
