import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import HeaderAdmin from "../components/admin/HeaderAdmin";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen bg-gray-100">
      <SidebarAdmin
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderAdmin setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;
