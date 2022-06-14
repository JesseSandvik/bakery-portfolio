import { Routes, Route } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Small from "./components/atoms/small/Small";

import { routes } from "./app/routes";

const App = () => {
  return (
    <div className='App'>
      <Header>
        <span className='container'></span>
        <span id='title' className='container'>
          <Heading level='1'>stacy's cakes</Heading>
          <Small>new york</Small>
        </span>
        <span className='container'></span>
      </Header>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
};

export default App;
