import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("nav", { className: "flex items-center justify-between bg-white px-6 py-4 shadow-md", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "MuscleMorph" }), _jsx("ul", { className: "flex gap-6 text-gray-700 font-medium", children: _jsx("li", { children: _jsx(Link, { to: "/", className: "hover:text-orange-500 transition-colors", children: "Workout" }) }) })] }));
};
export default Navbar;
