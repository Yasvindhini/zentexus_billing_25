import DashBoard from "../view/listings/Dashboard/DashBoard";
import Login from "../view/Login";
import Parties from "../view/listings/Parties/Parties";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
  {
    path: "/parties",
    component: Parties,
  },
];
export default routes;
