import { NavLink, Outlet, useRoutes } from "react-router-dom";
import { routes } from "../constants";
import { SignIn, SignUp } from "../components";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "../pages";

function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "interview", element: <Interview /> },
        { path: "subjects", element: <SubjectAreas /> },
        { path: "about", element: <About /> },
      ],
    },
    {
      path: "/admin",
      element: <Outlet />,
      children: [
        { path: "", element: <h1>Working on Admin Routes</h1> },
        { path: "dashboard", element: <h1>Working on Admin Dashboard</h1> },
      ],
    },
    {
      path: "*",
      element: <h1>URL chukliy bhava</h1>,
    },
  ]);
  console.log(element);
  return element;
}

export default Router;
