import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="h-full px-4 mt-2 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
