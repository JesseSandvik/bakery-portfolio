import { Routes, Route } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";

import { routes } from "./app/routes";

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
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
