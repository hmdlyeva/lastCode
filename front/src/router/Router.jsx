import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Add from "../pages/add/Add";
import Wishlist from '../pages/wishlist/Wishlist'
import Detail from "../pages/detail/Detail";
import Basket from "../pages/basket/Basket";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/wish",
    element: <Wishlist />,
  },
  {
    path: "/cart",
    element: <Basket />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);


export default router;
