import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Website Name */}
      <h1 className="text-2xl font-semibold text-gray-900">MuscleMorph</h1>

      {/* Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-orange-500 transition-colors"
          >
            Workout
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
