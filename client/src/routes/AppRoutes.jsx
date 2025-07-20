import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Checkout from "../pages/Checkout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/register";
import Layout from "../layouts/Layout";
import AdminLayout from "../layouts/AdminLayout";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";
import Dashboard from "../pages/admin/Dashboard";
import UserLayout from "../layouts/UserLayout";
import HomeUser from "../pages/user/HomeUser";
import ProtectRouteUser from "../routes/ProtectRouteUser";
import Manage from "../pages/admin/Manage";
import ProtectRouteAdmin from "./ProtectRouteAdmin";
import EditProduct from "../pages/admin/EditProduct";

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
    // element: <AdminLayout />,
    element: <ProtectRouteAdmin element={<AdminLayout />} />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/admin/categories", element: <Category /> },
      { path: "/admin/products", element: <Product /> },
      { path: "/admin/product/:id", element: <EditProduct /> },
      { path: "/admin/manage", element: <Manage /> },
    ],
  },
  {
    path: "/user",
    // element: <UserLayout />,
    element: <ProtectRouteUser element={<UserLayout />} />,
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
