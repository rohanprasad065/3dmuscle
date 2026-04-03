import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// Pages
import Workout from "./pages/Workout";
import Body from "./pages/Body";
import Abdominals from "./pages/Abdominals";
import Back from "./pages/Back";
import Biceps from "./pages/Biceps";
import Calves from "./pages/Calves";
import Chest from "./pages/Chest";
import Forearms from "./pages/Forearms";
import Glutes from "./pages/Glutes";
import Neck from "./pages/Neck";
import Shoulders from "./pages/Shoulders";
import Thigh from "./pages/Thigh";
import Traps from "./pages/Traps";
import Triceps from "./pages/Triceps";
function App() {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsx("div", { className: "p-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Workout, {}) }), _jsx(Route, { path: "/body", element: _jsx(Body, {}) }), _jsx(Route, { path: "/abdominals", element: _jsx(Abdominals, {}) }), _jsx(Route, { path: "/back", element: _jsx(Back, {}) }), _jsx(Route, { path: "/biceps", element: _jsx(Biceps, {}) }), _jsx(Route, { path: "/calves", element: _jsx(Calves, {}) }), _jsx(Route, { path: "/chest", element: _jsx(Chest, {}) }), _jsx(Route, { path: "/forearms", element: _jsx(Forearms, {}) }), _jsx(Route, { path: "/glutes", element: _jsx(Glutes, {}) }), _jsx(Route, { path: "/neck", element: _jsx(Neck, {}) }), _jsx(Route, { path: "/shoulders", element: _jsx(Shoulders, {}) }), _jsx(Route, { path: "/thigh", element: _jsx(Thigh, {}) }), _jsx(Route, { path: "/traps", element: _jsx(Traps, {}) }), _jsx(Route, { path: "/triceps", element: _jsx(Triceps, {}) })] }) })] }));
}
export default App;
