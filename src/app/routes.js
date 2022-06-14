import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    name: "menu",
    path: "/menu",
    element: <Menu />,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
];
