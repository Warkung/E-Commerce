import { Link, Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/admin">Admin Panel</Link>

      <hr />
      <Outlet />
    </div>
  );
}
export default UserLayout;
