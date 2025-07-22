import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiHome, FiBox, FiX, FiLogOut } from "react-icons/fi";
import { MdCategory, MdManageAccounts, MdDashboard } from "react-icons/md";

const navLink = [
  {
    path: "/admin",
    label: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/admin/products",
    label: "Products",
    icon: <FiBox />,
  },
  {
    path: "/admin/categories",
    label: "Categories",
    icon: <MdCategory />,
  },
  {
    path: "/admin/manage",
    label: "Manage",
    icon: <MdManageAccounts />,
  },
];

function SidebarAdmin({ isSidebarOpen, setIsSidebarOpen }) {
  const navLinkClasses =
    "flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200";
  const activeNavLinkClasses = "bg-gray-700 text-white";

  const handleLogout = () => {
    localStorage.removeItem("ecom-store");
    window.location.href = "/";
  };

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
          {navLink.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-2 py-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
          >
            <FiLogOut className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default SidebarAdmin;
