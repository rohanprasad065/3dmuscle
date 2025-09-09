import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import bicepsImg from "../assets/Biceps.jpeg";

// 3D Model Loader
function ArmModel() {
  const { scene } = useGLTF("/arm.glb");
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

function Biceps() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6">
        
        {/* Left Section - 3D Model */}
        <div className="flex items-center justify-center bg-gray-100 rounded-2xl">
          <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <ArmModel />
            </Suspense>
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        {/* Right Section - Info */}
        <div className="space-y-4 text-gray-800 overflow-y-auto max-h-[80vh] pr-2">
          <h1 className="text-3xl font-bold">Biceps Brachii</h1>
          <p>
            The biceps brachii (“biceps”) is a prominent muscle located on the front of the upper arm, 
            crucial for bending the elbow, supinating the forearm, and assisting with shoulder stability and movement.
          </p>

          <h2 className="text-2xl font-semibold">Biceps Muscle Anatomy</h2>
          <ul className="list-disc ml-6">
            <li><strong>Heads:</strong> Long Head (supraglenoid tubercle) and Short Head (coracoid process).</li>
            <li><strong>Insertion:</strong> Radial tuberosity and bicipital aponeurosis.</li>
            <li><strong>Innervation:</strong> Musculocutaneous nerve (C5–C6).</li>
            <li><strong>Blood Supply:</strong> Brachial artery and branches.</li>
            <li><strong>Variations:</strong> Up to 10% have a third head; rare cases report four or more.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Functions</h2>
          <ul className="list-disc ml-6">
            <li><strong>Elbow Flexion:</strong> Bends forearm toward upper arm.</li>
            <li><strong>Forearm Supination:</strong> Rotates forearm, turning palm upward.</li>
            <li><strong>Shoulder Actions:</strong> Minor role in flexion, abduction, adduction.</li>
            <li><strong>Shoulder Stabilization:</strong> Supports humeral head.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Importance of Training Biceps</h2>
          <ul className="list-disc ml-6">
            <li>Daily movements: lifting, pulling, twisting.</li>
            <li>Sports performance: climbing, throwing, rowing, gymnastics.</li>
            <li>Shoulder health: supports stability, prevents injuries.</li>
            <li>Aesthetics: adds contour and size to arms.</li>
            <li>Elbow/Forearm function: grip, wrist strength, balance.</li>
          </ul>

          <h2 className="text-2xl font-semibold">How to Train Each Part</h2>
          <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Head/Portion</th>
                <th className="p-2 border">Function</th>
                <th className="p-2 border">Key Exercises</th>
                <th className="p-2 border">Training Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Long Head</td>
                <td className="p-2 border">Supination, shoulder flexion</td>
                <td className="p-2 border">Incline dumbbell curls, hammer curls</td>
                <td className="p-2 border">Curl with arm behind torso</td>
              </tr>
              <tr>
                <td className="p-2 border">Short Head</td>
                <td className="p-2 border">Elbow flexion, shoulder adduction</td>
                <td className="p-2 border">Concentration curls, preacher curls</td>
                <td className="p-2 border">Curl with elbows in front</td>
              </tr>
              <tr>
                <td className="p-2 border">Whole Biceps</td>
                <td className="p-2 border">Elbow flexion, supination</td>
                <td className="p-2 border">Barbell curls, chin-ups, cable curls</td>
                <td className="p-2 border">Supinate wrist at top</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold">Additional Biceps Facts</h2>
          <p>
            Biceps and triceps act as antagonists: biceps flex, triceps extend, ensuring balanced motion.
            Good training requires full range of motion, controlled reps, and correct form to avoid strain.
            Supporting muscles (brachialis, brachioradialis) assist curls and pulling work.
          </p>

          <div className="mt-6">
            <img
              src={bicepsImg}
              alt="Biceps Anatomy"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biceps;
