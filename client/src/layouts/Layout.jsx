import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Main Nav</h1>
      <hr />
      <Outlet />
    </div>
  );
}
export default Layout;
