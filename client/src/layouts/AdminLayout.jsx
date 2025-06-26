import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h1>Sidebar</h1>
      <h1>Header</h1>
      <hr />
      <Outlet />
    </div>
  );
}
export default AdminLayout;
