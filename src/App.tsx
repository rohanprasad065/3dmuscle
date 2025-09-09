// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

// Pages
import Workout from "./pages/Workout.tsx";

import Body from "./pages/Body.tsx";

import Abdominals from "./pages/Abdominals.tsx";
import Back from "./pages/Back.tsx";
import Biceps from "./pages/Biceps.tsx";
import Calves from "./pages/Calves.tsx";
import Chest from "./pages/Chest.tsx";
import Forearms from "./pages/Forearms.tsx";
import Glutes from "./pages/Glutes.tsx";
import Neck from "./pages/Neck.tsx";
import Shoulders from "./pages/Shoulders.tsx";
import Thigh from "./pages/Thigh.tsx";
import Traps from "./pages/Traps.tsx";
import Triceps from "./pages/Triceps.tsx";

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
          <Route path="/body" element={<Body/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
