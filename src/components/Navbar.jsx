import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 lg:px-12 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-600 text-2xl font-bold">
          <Link to="/">NutritionPro</Link>
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link
            to="/create-plan"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold shadow bg-blue-50 hover:bg-blue-100 py-2 px-4 rounded-full"
          >
            Create Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
