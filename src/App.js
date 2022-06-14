import { Routes, Route } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes></Routes>
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
};

export default App;
