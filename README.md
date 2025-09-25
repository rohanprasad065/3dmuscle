3D Human Anatomy Explorer
An inte<img width="1861" height="939" alt="Screenshot 2025-09-25 125050" src="https://github.com/user-attachments/assets/a6bc452f-4385-44b7-9480-06473656a373" />
<img width="1565" height="821" alt="Screenshot 2025-09-25 125124" src="https://github.com/user-attachments/assets/82626649-ec8a-4dcf-943e-7c199c8fa909" />
<img width="1894" height="804" alt="Screenshot 2025-09-25 125102" src="https://github.com/user-attachments/assets/181f0381-0f4a-4d44-be5e-044c49b271eb" />


ractive 3D human anatomy web application built with React and Three.js (@react-three/fiber + drei).
This project lets you rotate, zoom, and explore every muscle of the human body in 3D — and dive deeper into detailed information for each muscle, including:

📌 How it works in your body

💪 Exercises to strengthen and shape it

🥗 Nutrition tips to support muscle health

🚀 Features

✅ Full 3D Interactive Model – Rotate, zoom, and inspect the human body from any angle.
✅ Per-Muscle Insights – Click or navigate to a muscle to learn its function, role, and importance.
✅ Exercise Recommendations – See curated exercises to strengthen each muscle.
✅ Nutrition Guide – Find out what to eat to support growth and recovery.
✅ AI-Generated 3D Model – The human model was created using AI tools and optimized for web rendering.

🛠️ Tech Stack
Technology	Purpose
React	Frontend framework
@react-three/fiber	React renderer for Three.js
@react-three/drei	Useful helpers (OrbitControls, Html, etc.)
Three.js	Core 3D rendering engine
AI 3D Model Tools	Used to generate and optimize the anatomy model

3d-human-anatomy/
│
├── src/
│   ├── components/
│   │   ├── HumanModel.jsx      # 3D model and interaction logic
│   │   ├── MuscleInfo.jsx      # Info page for each muscle
│   │   └── Controls.jsx        # Orbit and camera controls
│   │
│   ├── assets/
│   │   └── humanModel.glb      # AI-generated 3D human model
│   │
│   ├── App.jsx
│   └── index.js
│
└── package.json


🧑‍💻 Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/3d-human-anatomy.git
cd 3d-human-anatomy


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and go to:

http://localhost:5173

🧬 Usage

Once the app is running:

🖱️ Rotate & Zoom – Drag to rotate the model, scroll to zoom.

👆 Click on Muscles – Explore detailed anatomy info.

📚 Read More Tabs – Discover how each muscle works, exercises, and nutrition tips.

🧪 Example Code Snippet
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

function HumanModel() {
  const { scene } = useGLTF("/humanModel.glb");
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <OrbitControls />
      <ambientLight intensity={0.7} />
      <Suspense fallback={<Html>Loading 3D Model...</Html>}>
        <HumanModel />
      </Suspense>
    </Canvas>
  );
}

📚 Future Plans

🩻 Add skeletal and organ layers for deeper anatomy exploration

🧬 Add AI-generated personalized workout recommendations

📊 Add progress tracking and visualization tools
