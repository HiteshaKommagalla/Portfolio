import { Link } from "react-router-dom"
import { FaHome, FaInbox, FaUsers, FaBox, FaSignOutAlt } from "react-icons/fa"
import Logo from "./Logo"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-6">
      <div className="mb-10 mt-16">
        <Logo />
      </div>

      <nav className="space-y-6 font-semibold">
        <Link to="/" className="flex items-center text-gray-800 hover:text-pink-500">
          <FaHome className="mr-3 h-5 w-5 text-pink-500" />
          <span>Dashboard</span>
        </Link>

        <Link to="#" className="flex items-center text-gray-800 hover:text-pink-500">
          <FaInbox className="mr-3 h-5 w-5 text-pink-500" />
          <span>Inbox</span>
        </Link>

        <Link to="#" className="flex items-center text-gray-800 hover:text-pink-500">
          <FaUsers className="mr-3 h-5 w-5 text-pink-500" />
          <span>Users</span>
        </Link>

        <Link to="#" className="flex items-center text-gray-800 hover:text-pink-500">
          <FaBox className="mr-3 h-5 w-5 text-pink-500" />
          <span>Products</span>
        </Link>

        <Link to="#" className="flex items-center text-gray-800 hover:text-pink-500">
          <FaSignOutAlt className="mr-3 h-5 w-5 text-pink-500" />
          <span>Sign Out</span>
        </Link>
      </nav>
    </div>
  )
}

