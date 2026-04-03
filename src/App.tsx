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
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Workout />} />

          {/* Body page */}
          <Route path="/body" element={<Body />} />

          {/* Muscle pages */}
          <Route path="/abdominals" element={<Abdominals />} />
          <Route path="/back" element={<Back />} />
          <Route path="/biceps" element={<Biceps />} />
          <Route path="/calves" element={<Calves />} />
          <Route path="/chest" element={<Chest />} />
          <Route path="/forearms" element={<Forearms />} />
          <Route path="/glutes" element={<Glutes />} />
          <Route path="/neck" element={<Neck />} />
          <Route path="/shoulders" element={<Shoulders />} />
          <Route path="/thigh" element={<Thigh />} />
          <Route path="/traps" element={<Traps />} />
          <Route path="/triceps" element={<Triceps />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;