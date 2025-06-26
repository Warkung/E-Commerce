import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Checkout from "../pages/Checkout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Layout from "../layouts/Layout";
import AdminLayout from "../layouts/AdminLayout";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";
import Dashboard from "../pages/admin/Dashboard";
import UserLayout from "../layouts/UserLayout";
import HomeUser from "../pages/user/HomeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/history", element: <History /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/admin/category", element: <Category /> },
      { path: "/admin/product", element: <Product /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [{ index: true, element: <HomeUser /> }],
  },
]);

function AppRoutes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default AppRoutes;
