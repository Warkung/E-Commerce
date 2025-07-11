import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiX,
  FiLogOut,
} from "react-icons/fi";
import { MdCategory, MdManageAccounts, MdDashboard } from "react-icons/md";

function SidebarAdmin({ isSidebarOpen, setIsSidebarOpen }) {
  const navLinkClasses =
    "flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200";
  const activeNavLinkClasses = "bg-gray-700 text-white";

  return (
    <Fragment>
      {/* Mobile-first: Overlay for when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 bg-gray-800 text-white flex flex-col z-20 w-48 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
          <span className="text-2xl font-bold">Admin Panel</span>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        <NavLink
          to="/admin"end
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
          }
        >
          <MdDashboard className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
          }
        >
          <FiBox className="mr-3" />
          Products
        </NavLink>
        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
          }
        >
          <MdCategory className="mr-3" />
          Categories
        </NavLink>
        
        <NavLink
          to="/admin/manage"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
          }
        >
          <MdManageAccounts className="mr-3" />
          Manage
        </NavLink>
       
      </nav>

        {/* Sidebar Footer */}
        <div className="px-2 py-4 border-t border-gray-700">
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
          >
            <FiLogOut className="mr-3" />
            Logout
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
export default SidebarAdmin;