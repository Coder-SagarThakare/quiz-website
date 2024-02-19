import { useRoutes } from "react-router-dom";
import { routes } from "../constants";

function Router() {
  let element = useRoutes(routes);
  console.log(element);
  return element;
}

export default Router;
