import { useRoutes } from "react-router-dom";
import { routes } from "../constants";

function Router() {
  let element = useRoutes(routes);
  return element;
}

export default Router;
