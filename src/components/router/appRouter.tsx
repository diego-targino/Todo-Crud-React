import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/home";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";
import { Categories } from "../../pages/categories/categories";
import { ProtectedRouter } from "../protectedRouter/protectedRouter";
import { CreateTodo } from "../../pages/createTodo/createTodo";
import { EditTodo } from "../../pages/editTodo/editTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/app",
    children: [
      {
        path: "home",
        element: <ProtectedRouter element={<Home />} />,
      },
      {
        path: "categories",
        element: <ProtectedRouter element={<Categories />} />,
      },
      {
        path: "create",
        element: <ProtectedRouter element={<CreateTodo />} />,
      },
      {
        path: "edit",
        element: <ProtectedRouter element={<EditTodo />} />,
      },
    ],
  },
]);

export function AppRouter(): ReactElement {
  return <RouterProvider router={router} />;
}
