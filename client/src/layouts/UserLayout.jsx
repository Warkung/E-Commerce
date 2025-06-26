import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <h1>Navbar</h1>
      <hr />
      <Outlet />
    </div>
  );
}
export default UserLayout;
