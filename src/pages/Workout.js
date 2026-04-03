import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import ModelViewer from "../ModelViewer"; // adjust path if needed
function Workout() {
    const muscles = [
        { name: "Abdominals", path: "/abdominals" },
        { name: "Back", path: "/back" },
        { name: "Biceps", path: "/biceps" },
        { name: "Calves", path: "/calves" },
        { name: "Chest", path: "/chest" },
        { name: "Forearms", path: "/forearms" },
        { name: "Glutes", path: "/glutes" },
        { name: "Neck", path: "/neck" },
        { name: "Shoulders", path: "/shoulders" },
        { name: "Thigh", path: "/thigh" },
        { name: "Traps", path: "/traps" },
        { name: "Body", path: "/body" },
        { name: "Triceps", path: "/triceps" },
    ];
    return (_jsxs("div", { className: "flex h-screen p-6 gap-6 bg-gray-100", children: [_jsxs("div", { className: "w-1/2 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col", children: [_jsx("h1", { className: "text-2xl font-bold text-center py-4 border-b", children: "Human Anatomy" }), _jsx("div", { className: "flex-1", children: _jsx(ModelViewer, {}) })] }), _jsxs("div", { className: "w-1/2 flex flex-col bg-white rounded-2xl shadow-lg p-6", children: [_jsx("h2", { className: "text-xl font-bold text-center mb-4", children: "Muscle Groups" }), _jsx("div", { className: "grid grid-cols-2 gap-4 flex-1 overflow-y-auto pr-2", children: muscles.map((muscle) => (_jsx(Link, { to: muscle.path, className: "text-center px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md\r\n                         transform transition duration-200 hover:bg-orange-500 hover:-translate-y-1 hover:scale-105 hover:shadow-xl", children: muscle.name }, muscle.path))) })] })] }));
}
export default Workout;
