import Home from "./views/Home/Home";
import About from "./views/About/About";
import MMOs from "./views/MMOs/MMOs";
import Game from "./views/Game/Game";
import News from "./views/News/News";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/mmos",
    element: <MMOs />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
  },
  {
    path: "/news",
    element: <News />,
  },
];

export default routes;
