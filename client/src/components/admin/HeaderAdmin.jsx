import { useState } from "react";
import { FiSearch, FiUser, FiLogOut, FiBell, FiMenu, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

function HeaderAdmin({ setIsSidebarOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Hamburger Menu for mobile */}
        <button
          className="md:hidden mr-4 text-gray-600 hover:text-gray-800"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="text-gray-600 hover:text-blue-500 mr-5">
          <FiHome size={24} />
        </Link>


        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Profile and Notifications */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-gray-800">
          <FiBell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2"
          >
            <FiUser size={24} className="text-gray-600" />
            <span className="hidden md:block">Admin User</span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10">
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileOpen(false)}
              >
                <FiUser className="inline mr-2" />
                Profile
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileOpen(false)}
              >
                <FiLogOut className="inline mr-2" />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default HeaderAdmin;