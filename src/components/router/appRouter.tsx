import { ReactElement } from "react";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import { Home } from "../../pages/home/home";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "home",
		element: <Home />,
	},
	{
		path: "register",
		element: <Register />
	}
]);

export function AppRouter(): ReactElement {
	return <RouterProvider router={router} />
}